import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-3xl font-bold tracking-wide">
        <Link to="/" className="hover:text-green-400 transition">
          growth
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-8 bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full border border-white/20">

          <li>
            <Link to="/" className="hover:text-green-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-green-400 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-green-400 transition">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-green-400 transition">
              Shop
            </Link>
          </li>

        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          Login
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;