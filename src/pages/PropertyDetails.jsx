
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineArrowLeft,
  HiOutlineMapPin,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineHome,
  HiOutlineCheckCircle,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

import properties from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    }

    return `₹${value.toLocaleString("en-IN")}/month`;
  };

  if (!property) {
    return (
      <div className="flex min-h-[65vh] flex-col items-center justify-center px-5 text-center">
        <HiOutlineHome size={55} className="text-[#78917c]" />

        <h1 className="mt-5 font-display text-4xl font-bold text-[#183d32]">
          Property Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          This property may have been removed or is no longer available.
        </p>

        <Link
          to="/buy"
          className="mt-7 rounded-xl bg-[#183d32] px-7 py-3 font-bold text-white transition hover:bg-[#285747]"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  const images =
    property.images?.length > 0
      ? property.images
      : [property.image];

  const amenities = property.amenities || [
    "Modern Kitchen",
    "Parking",
    "Security",
    "Garden",
    "Power Backup",
    "24/7 Water Supply",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: property.title,
          text: property.location,
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        window.alert("Property link copied!");
      }
    } catch (error) {
      console.log("Share cancelled or unavailable.");
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">

        {/* Back Button */}
        <Link
          to="/buy"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#183d32] hover:underline"
        >
          <HiOutlineArrowLeft size={19} />
          Back to properties
        </Link>

        {/* Property Heading */}
        <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
          <div>
            <span className="rounded-full bg-[#e9f0e9] px-4 py-2 text-xs font-bold tracking-wider text-[#183d32]">
              {property.category === "Buy" ? "FOR SALE" : "FOR RENT"}
            </span>

            <h1 className="font-display mt-5 text-3xl font-bold text-[#183d32] sm:text-4xl">
              {property.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-gray-500">
              <HiOutlineMapPin size={19} className="text-[#78917c]" />
              {property.location}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              aria-label="Toggle favourite"
              className="rounded-full border border-gray-200 bg-white p-3 transition hover:bg-gray-100"
            >
              <HiOutlineHeart
                size={22}
                className={
                  liked
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600"
                }
              />
            </button>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Share property"
              className="rounded-full border border-gray-200 bg-white p-3 transition hover:bg-gray-100"
            >
              <HiOutlineShare size={21} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Property Image Gallery */}
        <div className="grid gap-3 overflow-hidden rounded-2xl md:grid-cols-4">
          <motion.div
            key={images[activeImage]}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="h-[350px] overflow-hidden md:col-span-3 md:h-[490px]"
          >
            <img
              src={images[activeImage]}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
            {images.slice(0, 3).map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                className={`h-28 overflow-hidden rounded-xl md:h-[155px] ${
                  activeImage === index
                    ? "ring-4 ring-[#78917c]"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_370px]">

          {/* Left Content */}
          <div>
            {/* Price */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-7">
              <div>
                <p className="text-sm text-gray-500">
                  Property Price
                </p>

                <p className="mt-1 text-3xl font-bold text-[#183d32]">
                  {formatPrice(property.price)}
                </p>
              </div>

              <span className="rounded-xl bg-[#e9f0e9] px-5 py-3 text-sm font-bold text-[#183d32]">
                {property.type}
              </span>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-3 gap-4 border-b border-gray-200 py-7">
              <div>
                <HiOutlineHome size={25} className="text-[#78917c]" />

                <p className="mt-2 font-bold text-[#183d32]">
                  {property.beds} Bedrooms
                </p>
              </div>

              <div>
                <HiOutlineHome size={25} className="text-[#78917c]" />

                <p className="mt-2 font-bold text-[#183d32]">
                  {property.baths} Bathrooms
                </p>
              </div>

              <div>
                <HiOutlineHome size={25} className="text-[#78917c]" />

                <p className="mt-2 font-bold text-[#183d32]">
                  {property.area} sqft
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="py-8">
              <h2 className="font-display text-2xl font-bold text-[#183d32]">
                About This Property
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                {property.description ||
                  "Discover this beautiful property in a prime location. Designed with comfort and modern living in mind, this space offers an excellent opportunity for your next home."}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-t border-gray-200 py-8">
              <h2 className="font-display text-2xl font-bold text-[#183d32]">
                Property Amenities
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <HiOutlineCheckCircle
                      size={19}
                      className="shrink-0 text-[#78917c]"
                    />

                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-lg lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold text-[#183d32]">
              Interested in this property?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Send us your details. Our property consultant will get in touch.
            </p>

            {submitted ? (
              <div className="mt-7 rounded-xl bg-[#edf5ed] p-5 text-center">
                <HiOutlineCheckCircle
                  size={42}
                  className="mx-auto text-[#39744d]"
                />

                <h3 className="mt-3 font-bold text-[#183d32]">
                  Enquiry Submitted!
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Thank you for your interest. Your enquiry has been recorded
                  in this demo.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-bold text-[#183d32] underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-[#78917c]"
                />

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Email address"
                  className="w-full rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-[#78917c]"
                />

                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-[#78917c]"
                />

                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Your message (optional)"
                  className="w-full resize-none rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-[#78917c]"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#183d32] py-4 font-bold text-white transition hover:bg-[#285747]"
                >
                  Send Enquiry
                  <HiOutlinePaperAirplane size={18} />
                </button>
              </form>
            )}

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <HiOutlinePhone className="text-[#78917c]" size={18} />
                Contact our property team
              </p>

              <p className="flex items-center gap-2">
                <HiOutlineEnvelope className="text-[#78917c]" size={18} />
                enquiries@estora.com
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
