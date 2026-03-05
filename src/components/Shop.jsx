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
  {
    id: 5,
    name: "Palm Plant",
    price: "$30",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  },
  {
    id: 6,
    name: "Cactus",
    price: "$12",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Shop Plants</h1>
        <p className="text-gray-400 mt-3">
          Explore our collection of beautiful tropical plants
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

        {plants.map((plant) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={plant.id}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-green-500 transition"
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
