
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Buy");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (type !== "All") params.set("type", type);

    navigate(`/${category.toLowerCase()}?${params.toString()}`);
  };

  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#183d32]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#102c25]/95 via-[#183d32]/75 to-[#183d32]/20" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-block rounded-full border border-white/30 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white">
            FIND YOUR PLACE IN THE WORLD
          </span>

          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Find a place
            <br />
            where life <span className="text-[#c3d6bd]">feels right.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Discover exceptional homes, beautiful spaces and properties
            designed around the way you want to live.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-10 max-w-3xl rounded-2xl bg-white p-4 shadow-2xl"
          >
            <div className="mb-4 flex gap-3">
              {["Buy", "Rent"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-7 py-2.5 text-sm font-bold transition ${
                    category === item
                      ? "bg-[#183d32] text-white"
                      : "bg-[#f1f4f0] text-gray-600 hover:bg-[#e3ebe3]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                <MapPin className="shrink-0 text-[#78917c]" size={20} />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city or location"
                  className="w-full min-w-0 bg-transparent text-sm outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                <Search className="shrink-0 text-[#78917c]" size={20} />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                >
                  <option value="All">All Property Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Commercial">Commercial</option>
                </select>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#183d32] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#285747]"
              >
                Search Homes
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-white/80">
            <span><strong className="text-xl text-white">2,500+</strong> Properties</span>
            <span><strong className="text-xl text-white">1,200+</strong> Happy Clients</span>
            <span><strong className="text-xl text-white">15+</strong> Locations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
