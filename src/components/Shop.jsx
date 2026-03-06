import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plants = [
  {
    id: 1,
    name: "Monstera Plant",
    price: "$25",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: "$18",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32c8b54",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: "$22",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: "$15",
    img: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-black text-white px-6">

      {/* Navbar */}
      <nav className="flex items-center justify-between py-6">
        <div className="text-3xl font-bold tracking-wide">
          <Link to="/" className="hover:text-green-400 transition">
            growth
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full border border-white/20">

            <li>
              <Link
                to="/"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-green-400 transition cursor-pointer"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-green-400 transition cursor-pointer"
              >
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

      {/* Shop Heading */}
      <div className="text-center mt-10 mb-12">
        <h1 className="text-5xl font-bold">Shop Plants</h1>
        <p className="text-gray-400 mt-3">
          Explore our collection of tropical plants
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-16">

        {plants.map((plant) => (
          <motion.div
            key={plant.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500 transition"
          >
            <img
              src={plant.img}
              alt={plant.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{plant.name}</h2>
              <p className="text-green-400 mt-1">{plant.price}</p>

              <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}