
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import {
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineArrowRight,
  HiOutlineHome,
  HiOutlineKey,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com/", label: "Facebook" },
    { icon: FaInstagram, url: "https://instagram.com/", label: "Instagram" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/", label: "LinkedIn" },
    { icon: FaYoutube, url: "https://youtube.com/", label: "YouTube" },
    { icon: FaPinterestP, url: "https://pinterest.com/", label: "Pinterest" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Buy Properties", path: "/buy" },
    { name: "Rent Properties", path: "/rent" },
    { name: "Sell Property", path: "/sell" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "Residential Properties", icon: HiOutlineHome },
    { name: "Commercial Properties", icon: HiOutlineBuildingOffice2 },
    { name: "Property Buying", icon: HiOutlineKey },
    { name: "Trusted Consultation", icon: HiOutlineShieldCheck },
  ];

  return (
    <footer className="bg-[#142c24] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2 text-[#183d32]">
                <HiOutlineBuildingOffice2 size={29} />
              </div>

              <span className="font-display text-2xl font-bold text-white">
                ESTORA<span className="text-[#a4b8a6]">.</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-8 text-[#c1cec5]">
              Discover exceptional spaces, beautiful homes and a better
              way to find your next property. Your dream space starts here.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c3d6bd]/40 bg-[#c3d6bd]/10 text-[#dce8d8] transition-all duration-300 hover:-translate-y-1 hover:border-[#c3d6bd] hover:bg-[#c3d6bd] hover:text-[#183d32]"
                    style={{ color: "#dce8d8" }}
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-7 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-[#c1cec5] transition hover:translate-x-1 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-lg font-bold text-white">
              Our Services
            </h3>

            <div className="flex flex-col gap-5">
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-[#c1cec5]"
                  >
                    <Icon size={19} className="shrink-0 text-[#c3d6bd]" />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <div className="space-y-6 text-sm text-[#c1cec5]">
              <div className="flex items-start gap-3">
                <HiOutlineMapPin
                  size={20}
                  className="shrink-0 text-[#c3d6bd]"
                />
                <p>Bengaluru, Karnataka, India</p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone size={20} className="text-[#c3d6bd]" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope size={20} className="text-[#c3d6bd]" />
                <p>hello@estora.com</p>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#dce8d8] px-5 py-4 font-bold text-[#183d32] transition hover:bg-[#c3d6bd]"
              >
                Contact Our Team
                <HiOutlineArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-7 md:flex-row">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              Find your next perfect space.
            </h3>

            <p className="mt-2 text-sm text-[#c1cec5]">
              Let ESTORA help you discover your dream property.
            </p>
          </div>

          <Link
            to="/buy"
            className="flex items-center gap-3 rounded-full bg-[#c3d6bd] px-7 py-4 text-sm font-bold text-[#183d32] transition-all duration-300 hover:bg-[#e2ecdf]"
          >
            Explore Properties
            <HiOutlineArrowRight size={19} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-7 text-center sm:flex-row">
          <p className="text-xs text-[#b5c3b9]">
            © {new Date().getFullYear()} ESTORA Real Estate. All rights reserved.
          </p>

          <p className="text-xs text-[#b5c3b9]">
            Designed with care for better living.
          </p>
        </div>
      </div>
    </footer>
  );
}
