
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";

export default function PropertyCard({ property }) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  if (!property) return null;

  const {
    id,
    title,
    name,
    location,
    price,
    type,
    beds,
    baths,
    area,
    images,
    image,
    purpose,
    status,
  } = property;

  const propertyName = title || name || "Beautiful Property";
  const propertyImage =
    images?.[0] || image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9";

  const saved = isWishlisted(id);

  const formatPrice = (value) => {
    const amount = Number(value);

    if (Number.isNaN(amount)) return value || "Price on request";

    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }

    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lac`;
    }

    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={propertyImage}
          alt={propertyName}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#183d32] shadow-sm">
            {purpose || status || "For Sale"}
          </span>

          {type && (
            <span className="rounded-full bg-[#183d32] px-4 py-2 text-xs font-semibold text-white">
              {type}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(property)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={saved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
            saved
              ? "scale-110 bg-red-500 text-white"
              : "bg-white text-gray-600 hover:scale-110 hover:text-red-500"
          }`}
        >
          <FaHeart size={17} />
        </button>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Property Details */}
      <div className="p-5">
        <div className="mb-3">
          <p className="mb-2 text-xl font-bold text-[#183d32]">
            {formatPrice(price)}
          </p>

          <h3 className="line-clamp-1 text-lg font-bold text-gray-800 transition-colors group-hover:text-[#78917c]">
            {propertyName}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt className="shrink-0 text-[#78917c]" />
            <span className="line-clamp-1">{location || "Location unavailable"}</span>
          </p>
        </div>

        {/* Property Features */}
        <div className="my-5 flex flex-wrap items-center gap-5 border-y border-gray-100 py-4 text-sm text-gray-600">
          {beds !== undefined && (
            <span className="flex items-center gap-2">
              <FaBed className="text-[#78917c]" />
              {beds} Beds
            </span>
          )}

          {baths !== undefined && (
            <span className="flex items-center gap-2">
              <FaBath className="text-[#78917c]" />
              {baths} Baths
            </span>
          )}

          {area !== undefined && (
            <span className="flex items-center gap-2">
              <FaRulerCombined className="text-[#78917c]" />
              {Number(area).toLocaleString("en-IN")} sqft
            </span>
          )}
        </div>

        {/* Details Button */}
        <Link
          to={`/property/${id}`}
          className="flex w-full items-center justify-between rounded-xl bg-[#edf2ed] px-5 py-3.5 text-sm font-bold text-[#183d32] transition-all duration-300 hover:bg-[#183d32] hover:text-white"
        >
          View Property
          <FaArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
