
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import PropertyCard from "../components/PropertyCard";

export default function Wishlist() {
  const { wishlist, clearWishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <section className="bg-[#183d32] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-[#c3d6bd]">
              <FaHeart size={20} />
              <span className="text-xs font-bold tracking-[0.25em]">
                YOUR SAVED COLLECTION
              </span>
            </div>

            <h1 className="font-display mt-5 text-4xl font-bold text-white sm:text-6xl">
              Your Wishlist
            </h1>

            <p className="mt-4 text-white/75">
              All your favourite properties, together in one place.
            </p>

            <p className="mt-6 text-sm font-semibold text-[#c3d6bd]">
              {wishlist.length} {wishlist.length === 1 ? "Property" : "Properties"} Saved
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        {wishlist.length > 0 ? (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#183d32]">
                  Your Favourite Properties
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Revisit the properties you love.
                </p>
              </div>

              <button
                type="button"
                onClick={clearWishlist}
                className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
              >
                <FaTrashAlt size={14} />
                Clear Wishlist
              </button>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {wishlist.map((property, index) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="relative"
                >
                  <PropertyCard property={property} />

                  <button
                    type="button"
                    onClick={() => removeFromWishlist(property.id)}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                  >
                    <FaTrashAlt size={14} />
                    Remove from Wishlist
                  </button>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex max-w-xl flex-col items-center py-16 text-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#eaf0e9]">
              <FaHeart size={38} color="#78917c" />
            </div>

            <h2 className="font-display mt-7 text-3xl font-bold text-[#183d32]">
              Your Wishlist is Empty
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              You haven't saved any properties yet. Explore our collection
              and tap the heart icon to save your favourites.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/buy"
                className="flex items-center gap-2 rounded-xl bg-[#183d32] px-6 py-4 font-bold text-white transition hover:bg-[#285747]"
              >
                Explore Properties
                <FaArrowRight size={16} />
              </Link>

              <Link
                to="/rent"
                className="rounded-xl border border-[#183d32] px-6 py-4 font-bold text-[#183d32] transition hover:bg-[#eaf0e9]"
              >
                Browse Rentals
              </Link>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
