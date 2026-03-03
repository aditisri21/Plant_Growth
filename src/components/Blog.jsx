import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Blog() {
  return (
    <div className="w-full bg-[#f4f2ef] overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        
         {/* ================= NAVBAR ================= */}
        <nav className="flex items-center justify-between py-6">
          <div className="text-3xl font-bold tracking-wide">
            <a href="/" className="hover:text-green-400 transition">
              growth
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-8 bg-white/60 backdrop-blur-lg px-8 py-3 rounded-full border border-gray-200 shadow-sm">

              <li>
                <a href="/" className="hover:text-green-500 transition cursor-pointer">
                  Home
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-green-500 transition cursor-pointer">
                  Contact
                </a>
              </li>

              <li>
                <a href="/blog" className="text-green-600 font-medium cursor-pointer">
                  Blog
                </a>
              </li>

              <li className="hover:text-green-500 transition cursor-pointer">
                Shop
              </li>

            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
            >
              Login
            </motion.button>
          </div>
        </nav>

        {/* ================= HERO SECTION ================= */}
        <section className="relative rounded-[40px] overflow-hidden mb-24">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="blog hero"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold"
            >
              Our Plant Blog
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-2xl text-white/80"
            >
              Tips, care guides, and inspiration to help your indoor jungle thrive.
            </motion.p>
          </div>
        </section>

        {/* ================= FEATURED POST ================= */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="featured"
            className="rounded-3xl w-full h-[350px] object-cover"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Featured Article
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              How to Care for Tropical Indoor Plants
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Discover essential watering routines, sunlight needs, and soil tips
              to keep your tropical plants healthy and vibrant all year round.
            </p>
            <button className="mt-6 flex items-center gap-2 text-green-700 font-medium hover:gap-3 transition-all">
              Read More <ArrowRight size={18} />
            </button>
          </motion.div>
        </section>

        {/* ================= LATEST POSTS GRID ================= */}
        <section className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-transparent hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1524594154908-eddc3e5f70c8"
                  alt="blog"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    5 Easy Low-Light Plants for Beginners
                  </h3>
                  <p className="text-gray-500 text-sm mt-3">
                    Perfect choices for apartments and rooms with minimal sunlight exposure.
                  </p>
                  <button className="mt-4 text-green-700 font-medium hover:underline">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SUBSCRIBE SECTION ================= */}
        <section className="bg-[#0d2b22] text-white rounded-[40px] py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stay Updated with Plant Tips
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss a care guide, seasonal tip, or plant inspiration post.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full text-black w-full outline-none"
            />
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
