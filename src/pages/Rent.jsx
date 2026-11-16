
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";
import properties from "../data/properties";

export default function Rent() {
  const [filters, setFilters] = useState({
    location: "",
    type: "All",
    maxPrice: "all",
    beds: "All",
  });

  const [sortBy, setSortBy] = useState("recommended");

  const filteredProperties = useMemo(() => {
    let result = properties.filter(
      (property) => property.category === "Rent"
    );

    if (filters.location.trim()) {
      result = result.filter((property) =>
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      );
    }

    if (filters.type !== "All") {
      result = result.filter(
        (property) => property.type === filters.type
      );
    }

    if (filters.maxPrice !== "all") {
      result = result.filter(
        (property) => property.price <= Number(filters.maxPrice)
      );
    }

    if (filters.beds !== "All") {
      result = result.filter(
        (property) => property.beds >= Number(filters.beds)
      );
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d32] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
            alt="Beautiful rental property"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#102c25]/95 to-[#183d32]/70" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl px-5 sm:px-8"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#c3d6bd]">
            ESTORA RENTALS
          </span>

          <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Find a home that
            <span className="text-[#c3d6bd]"> fits your lifestyle.</span>
          </h1>

          <p className="mt-5 max-w-xl leading-8 text-white/75">
            Explore beautiful apartments, villas and homes available for rent
            in your favourite neighbourhoods.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 text-white">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="mt-1 text-sm text-white/60">Rental options</p>
            </div>
            <div>
              <p className="text-3xl font-bold">25+</p>
              <p className="mt-1 text-sm text-white/60">Neighbourhoods</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-sm text-white/60">Verified listings</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rental Listings */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-9">
          <span className="text-xs font-bold tracking-[0.2em] text-[#78917c]">
            EXPLORE RENTALS
          </span>

          <h2 className="font-display mt-3 text-3xl font-bold text-[#183d32] sm:text-4xl">
            Homes available for rent
          </h2>

          <p className="mt-3 text-gray-500">
            Discover a space that feels like home.
          </p>
        </div>

        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
        />

        <div className="my-9 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#183d32]">
              Available Rental Properties
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Showing {filteredProperties.length} properties
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3">
            <HiOutlineAdjustmentsHorizontal
              size={19}
              className="text-[#78917c]"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-semibold text-gray-600 outline-none"
            >
              <option value="recommended">Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <motion.div
            layout
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-16 text-center">
            <HiOutlineHome
              size={48}
              className="mx-auto text-[#78917c]"
            />

            <h3 className="font-display mt-5 text-2xl font-bold text-[#183d32]">
              No rental properties found
            </h3>

            <p className="mt-3 text-gray-500">
              Try changing your location or filters.
            </p>

            <button
              type="button"
              onClick={() =>
                setFilters({
                  location: "",
                  type: "All",
                  maxPrice: "all",
                  beds: "All",
                })
              }
              className="mt-6 rounded-xl bg-[#183d32] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#285747]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#eaf0e9] p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#183d32]">
              Looking for your next home?
            </h2>

            <p className="mt-3 text-gray-600">
              Let ESTORA help you find the perfect rental property.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#183d32] px-7 py-4 font-bold text-white transition hover:bg-[#285747]"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
