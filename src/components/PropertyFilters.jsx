
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyFilters({ filters, setFilters }) {
  const update = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      type: "All",
      maxPrice: "all",
      beds: "All"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-bold text-[#183d32]">
          <SlidersHorizontal size={20} />
          Filter Properties
        </h3>

        <button
          type="button"
          onClick={clearFilters}
          className="flex items-center gap-2 text-xs font-bold text-[#78917c] hover:text-[#183d32]"
        >
          <RotateCcw size={14} />
          Reset Filters
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Location */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
            Location
          </label>

          <div className="flex items-center rounded-xl border border-gray-200 px-3 transition focus-within:border-[#78917c]">
            <Search size={17} className="shrink-0 text-gray-400" />

            <input
              type="text"
              value={filters.location}
              onChange={e => update("location", e.target.value)}
              placeholder="Search location"
              className="w-full bg-transparent p-3 text-sm outline-none"
            />
          </div>
        </div>

        {/* Property type */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
            Property Type
          </label>

          <select
            value={filters.type}
            onChange={e => update("type", e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-[#78917c]"
          >
            <option value="All">All Properties</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        {/* Maximum price */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
            Maximum Price
          </label>

          <select
            value={filters.maxPrice}
            onChange={e => update("maxPrice", e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-[#78917c]"
          >
            <option value="all">Any Price</option>
            <option value="100000">₹1 Lakh</option>
            <option value="5000000">₹50 Lakhs</option>
            <option value="10000000">₹1 Crore</option>
            <option value="20000000">₹2 Crore</option>
            <option value="30000000">₹3 Crore</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
            Bedrooms
          </label>

          <select
            value={filters.beds}
            onChange={e => update("beds", e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-[#78917c]"
          >
            <option value="All">Any Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}
