import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-center max-w-xl mb-12"
        >
          Have questions about our tropical plants or seasonal flowers? 
          We’d love to hear from you. Send us a message and we’ll respond soon.
        </motion.p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-green-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-green-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:outline-none focus:border-green-400 transition"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full transition"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;