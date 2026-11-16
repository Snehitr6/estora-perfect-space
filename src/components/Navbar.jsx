
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Buy", path: "/buy" },
  { name: "Rent", path: "/rent" },
  { name: "Sell", path: "/sell" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlist } = useWishlist();

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? "text-[#78917c]"
        : "text-gray-600 hover:text-[#183d32]"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#183d32] text-white">
            <HiOutlineBuildingOffice2 size={25} />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold tracking-wide text-[#183d32]">
              ESTORA
            </span>
            <span className="text-[9px] font-semibold tracking-[0.25em] text-gray-400">
              FIND YOUR PERFECT SPACE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex items-center gap-2 text-sm font-semibold text-[#183d32] transition hover:text-[#78917c]"
          >
            <FaHeart size={17} />
            Wishlist

            {wishlist.length > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/buy"
            className="flex items-center gap-2 rounded-full bg-[#183d32] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#285747]"
          >
            Explore Homes <HiOutlineArrowRight size={17} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#183d32] hover:bg-gray-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <HiOutlineXMark size={27} />
          ) : (
            <HiOutlineBars3 size={27} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? "bg-[#edf2ed] text-[#183d32]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Wishlist */}
              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-[#183d32] hover:bg-[#eaf0e9]"
              >
                <FaHeart size={17} />
                Wishlist ({wishlist.length})
              </Link>

              <Link
                to="/buy"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-full bg-[#e2ecdf] px-7 py-3 text-sm font-bold text-[#183d32] shadow-sm transition-all duration-300 hover:bg-[#c3d6bd] hover:shadow-md"
              >
                Explore Homes
                <HiOutlineArrowRight size={18} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
