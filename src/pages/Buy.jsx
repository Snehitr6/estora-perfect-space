
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Home } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";
import properties from "../data/properties";

export default function Buy() {
  const [filters, setFilters] = useState({
    location: new URLSearchParams(window.location.search).get("location") || "",
    type: new URLSearchParams(window.location.search).get("type") || "All",
    maxPrice: "all",
    beds: "All"
  });

  const filtered = properties.filter(property => {
    return (
      property.category === "Buy" &&
      property.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === "All" || property.type === filters.type) &&
      (filters.maxPrice === "all" || property.price <= Number(filters.maxPrice)) &&
      (filters.beds === "All" || property.beds >= Number(filters.beds))
    );
  });

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <section className="bg-[#183d32] px-5 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#b8cbb7]">
            EXPLORE PROPERTIES
          </p>

          <h1 className="font-display mt-5 text-5xl font-semibold sm:text-6xl">
            Find Your Dream Home
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300">
            Discover exceptional properties and find a space that perfectly
            matches your lifestyle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <PropertyFilters filters={filters} setFilters={setFilters} />

        <div className="mb-8 mt-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Properties for Sale
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Explore our premium property collection.
            </p>
          </div>

          <span className="rounded-full bg-[#e7eee7] px-5 py-3 text-sm font-bold text-[#183d32]">
            {filtered.length} Properties Found
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white px-5 py-20 text-center shadow-sm">
            <Home size={45} className="mx-auto text-[#78917c]" />
            <h3 className="font-display mt-5 text-3xl font-semibold">
              No Properties Found
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              Try another location or adjust your filters.
            </p>

            <button
              onClick={() => setFilters({
                location: "",
                type: "All",
                maxPrice: "all",
                beds: "All"
              })}
              className="mt-7 rounded-full bg-[#183d32] px-7 py-3 text-sm font-bold text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
