
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  KeyRound,
  Users,
  Star
} from "lucide-react";

import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

export default function Home() {
  const featured = properties.slice(0, 6);

  const benefits = [
    {
      icon: Building2,
      title: "Premium Properties",
      description:
        "Explore carefully selected homes and commercial spaces in desirable locations."
    },
    {
      icon: ShieldCheck,
      title: "Trusted Experience",
      description:
        "Enjoy a transparent and customer-focused property discovery experience."
    },
    {
      icon: KeyRound,
      title: "Easy Transactions",
      description:
        "Get guidance throughout your property search and buying journey."
    }
  ];

  return (
    <main className="overflow-hidden bg-[#fafaf8]">

      {/* HERO */}
      <Hero />

      {/* FEATURED PROPERTIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#78917c]">
              CURATED FOR YOU
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Featured Properties
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Discover spaces that match your lifestyle.
            </p>
          </div>

          <Link
            to="/buy"
            className="flex items-center gap-2 font-bold text-[#183d32] transition hover:gap-4"
          >
            Explore All <ArrowRight size={19} />
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

      </section>

      {/* ABOUT BANNER */}
      <section className="bg-[#eff3ed] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#78917c]">
              WHY ESTORA
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              More Than Just a Property
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              We make discovering your next home easier, smarter and more enjoyable.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#e7eee7] p-4 text-[#315d4b]">
                    <Icon size={30} />
                  </div>

                  <h3 className="font-display mt-7 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* IMAGE STORY SECTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200"
            alt="Luxury modern home interior"
            className="h-[430px] w-full rounded-3xl object-cover"
          />

          <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-center gap-2 text-[#b18b48]">
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
            </div>
            <p className="mt-2 text-sm font-bold text-[#183d32]">
              Discover better living
            </p>
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#78917c]">
            FIND YOUR PLACE
          </p>

          <h2 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Every great story begins with a beautiful home.
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500">
            Whether you are searching for your first home, upgrading
            your lifestyle or exploring an investment, ESTORA helps you
            discover spaces that feel right.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-full bg-[#e7eee7] p-3 text-[#315d4b]">
              <Users size={23} />
            </div>

            <div>
              <p className="font-bold">Personal Property Assistance</p>
              <p className="mt-1 text-xs text-gray-500">
                Helping you find the right space.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#183d32] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#315d4b]"
          >
            Discover Our Story
            <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#183d32] px-5 py-20 text-center text-white">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#b8cbb7]">
            YOUR DREAM HOME IS WAITING
          </p>

          <h2 className="font-display mt-5 text-4xl font-semibold sm:text-5xl">
            Ready to find your perfect space?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300">
            Start exploring beautiful properties and discover a place
            that truly feels like home.
          </p>

          <Link
            to="/buy"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#183d32] transition hover:bg-[#dce8dc]"
          >
            Explore Properties
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
