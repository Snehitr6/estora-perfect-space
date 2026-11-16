
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineCurrencyRupee,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export default function Sell() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Apartment",
    location: "",
    price: "",
    bedrooms: "2",
    description: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <HiOutlineUserGroup size={27} />,
      title: "Expert Guidance",
      text: "Get support from experienced real estate professionals.",
    },
    {
      icon: <HiOutlineShieldCheck size={27} />,
      title: "Trusted Process",
      text: "A simple and transparent property-selling experience.",
    },
    {
      icon: <HiOutlineCurrencyRupee size={27} />,
      title: "Better Exposure",
      text: "Showcase your property to potential buyers and renters.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d32] py-24 sm:py-32">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
            alt="Luxury property"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#102c25]/95 to-[#183d32]/65" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl px-5 sm:px-8"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#c3d6bd]">
            SELL WITH ESTORA
          </span>

          <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Your property deserves
            <span className="text-[#c3d6bd]"> the right buyer.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            List your property with ESTORA and connect with people looking
            for their perfect space.
          </p>

          <a
            href="#sell-form"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#183d32] transition hover:bg-[#c3d6bd]"
          >
            List Your Property
            <HiOutlineArrowRight size={19} />
          </a>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#78917c]">
            WHY ESTORA
          </span>

          <h2 className="font-display mt-3 text-3xl font-bold text-[#183d32] sm:text-4xl">
            Selling made simpler
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            We help make your property journey straightforward, transparent
            and convenient.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf0e9] text-[#183d32]">
                {benefit.icon}
              </div>

              <h3 className="font-display mt-6 text-xl font-bold text-[#183d32]">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sell Form */}
      <section id="sell-form" className="bg-[#f0f3ef] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="pt-5">
            <span className="text-xs font-bold tracking-[0.2em] text-[#78917c]">
              GET STARTED
            </span>

            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#183d32] sm:text-5xl">
              Tell us about your property.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Share a few details about your property. Our team can review
              your information and get in touch to discuss the next steps.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Share your property information",
                "Our team reviews your submission",
                "Discuss listing and selling options",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#183d32] font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-[#183d32]">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85"
                alt="Beautiful home"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <HiOutlineCheckCircle
                  size={75}
                  className="text-green-600"
                />

                <h2 className="font-display mt-6 text-3xl font-bold text-[#183d32]">
                  Property Submitted!
                </h2>

                <p className="mt-4 max-w-md leading-7 text-gray-500">
                  Thank you for choosing ESTORA. Your property details have
                  been submitted in this demo. Our team will contact you
                  using the information provided.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      propertyType: "Apartment",
                      location: "",
                      price: "",
                      bedrooms: "2",
                      description: "",
                    });
                  }}
                  className="mt-8 rounded-xl bg-[#183d32] px-7 py-3 font-bold text-white transition hover:bg-[#285747]"
                >
                  Submit Another Property
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-[#183d32]">
                  Property Information
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Complete the form to submit your property.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={updateForm}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-gray-200 p-3 outline-none transition focus:border-[#78917c]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateForm}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-200 p-3 outline-none transition focus:border-[#78917c]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={updateForm}
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-gray-200 p-3 outline-none transition focus:border-[#78917c]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={updateForm}
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-[#78917c]"
                      >
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Independent House</option>
                        <option>Commercial</option>
                        <option>Land / Plot</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Property Location *
                      </label>
                      <input
                        required
                        name="location"
                        value={form.location}
                        onChange={updateForm}
                        placeholder="City, area or locality"
                        className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-[#78917c]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-600">
                        Expected Price (₹) *
                      </label>
                      <input
                        required
                        type="number"
                        min="1"
                        name="price"
                        value={form.price}
                        onChange={updateForm}
                        placeholder="Enter expected price"
                        className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-[#78917c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Bedrooms
                    </label>
                    <select
                      name="bedrooms"
                      value={form.bedrooms}
                      onChange={updateForm}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-[#78917c]"
                    >
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                      <option value="0">Not Applicable</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Property Description
                    </label>
                    <textarea
                      rows="5"
                      name="description"
                      value={form.description}
                      onChange={updateForm}
                      placeholder="Describe your property, features and amenities..."
                      className="w-full resize-none rounded-xl border border-gray-200 p-3 outline-none focus:border-[#78917c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#183d32] py-4 font-bold text-white transition hover:bg-[#285747]"
                  >
                    Submit Property
                    <HiOutlineArrowRight size={19} />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to be contacted by the ESTORA
                    property team.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
