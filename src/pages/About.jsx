
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Building2,
      title: "Premium Properties",
      description:
        "Discover carefully selected residential and commercial properties in desirable locations."
    },
    {
      icon: ShieldCheck,
      title: "Trusted Experience",
      description:
        "Enjoy a transparent, reliable and customer-focused property discovery experience."
    },
    {
      icon: Users,
      title: "Expert Assistance",
      description:
        "Our team helps guide you through every step of your property journey."
    }
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-[#183d32] px-5 py-28 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[4px] text-[#b8cbb7]">
          ABOUT ESTORA
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display mt-6 text-5xl leading-tight sm:text-6xl"
        >
          Spaces that inspire.
          <br />
          Places that belong.
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-300">
          We believe finding a property should be an exciting experience.
          ESTORA brings beautiful spaces and people together.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
          alt="Luxury modern home interior"
          className="h-[450px] w-full rounded-3xl object-cover"
        />

        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#78917c]">
            OUR STORY
          </p>

          <h2 className="font-display mt-4 text-4xl font-semibold leading-tight">
            Making real estate feel more personal.
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500">
            ESTORA is a real estate marketplace concept built around
            discovering spaces that fit different lifestyles and needs.
            From beautiful family homes to modern commercial spaces,
            our goal is to make property discovery simple and enjoyable.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#183d32] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#315d4b]"
          >
            Connect With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-[#eff3ed] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#78917c]">
              WHY CHOOSE US
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-[#e7eee7] p-4 text-[#315d4b]">
                  <item.icon size={30} />
                </div>

                <h3 className="font-display mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
