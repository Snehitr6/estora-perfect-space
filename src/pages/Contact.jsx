
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Clock
} from "lucide-react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <section className="bg-[#183d32] px-5 py-20 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[4px] text-[#b8cbb7]">
          LET'S CONNECT
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display mt-5 text-5xl font-semibold sm:text-6xl"
        >
          Get In Touch
        </motion.h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300">
          Have a property question? Looking to buy, rent or sell?
          Our team would love to hear from you.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">

        <div className="rounded-3xl bg-[#183d32] p-8 text-white sm:p-12">
          <h2 className="font-display text-3xl font-semibold">
            Let's find your perfect space.
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-300">
            Get in touch with ESTORA for property enquiries,
            consultations and assistance throughout your property journey.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <MapPin size={23} />
              </div>
              <div>
                <p className="font-bold">Our Location</p>
                <p className="mt-1 text-sm text-gray-300">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <Phone size={23} />
              </div>
              <div>
                <p className="font-bold">Phone Number</p>
                <p className="mt-1 text-sm text-gray-300">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <Mail size={23} />
              </div>
              <div>
                <p className="font-bold">Email Address</p>
                <p className="mt-1 text-sm text-gray-300">
                  hello@estora.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <Clock size={23} />
              </div>
              <div>
                <p className="font-bold">Working Hours</p>
                <p className="mt-1 text-sm text-gray-300">
                  Monday - Saturday, 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg sm:p-10">
          <h2 className="font-display text-3xl font-semibold">
            Send Us a Message
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Fill out the form and our team will get back to you.
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 rounded-2xl bg-green-50 p-10 text-center"
            >
              <CheckCircle2
                size={55}
                className="mx-auto text-green-700"
              />

              <h3 className="mt-5 text-xl font-bold text-green-800">
                Message Submitted Successfully!
              </h3>

              <p className="mt-3 text-sm text-green-700">
                Thank you for contacting ESTORA.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="mt-7 rounded-full bg-[#183d32] px-7 py-3 text-sm font-bold text-white"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition focus:border-[#78917c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition focus:border-[#78917c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  pattern="[0-9+\-\s]{10,15}"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition focus:border-[#78917c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Message
                </label>
                <textarea
                  required
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-gray-200 p-4 text-sm outline-none transition focus:border-[#78917c]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#183d32] py-4 font-bold text-white transition hover:bg-[#315d4b]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
