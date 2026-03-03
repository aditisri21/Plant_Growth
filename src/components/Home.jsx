import { motion } from "framer-motion";
import bgImage from "../assets/growth.jpg";
import { useRef } from "react";
import leafVideo from "../assets/leafvdo.mp4";
import { Link } from "react-router-dom";


export default function Home() {
  const videoRef = useRef(null);
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen w-full overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col text-white px-6 md:px-16">

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

      <li className="hover:text-green-400 transition cursor-pointer">
        Shop
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

          {/* Hero Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-widest text-green-300"
            >
              Petal power
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[60px] md:text-[140px] font-extrabold leading-none"
            >
              growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 max-w-2xl text-gray-200 text-lg"
            >
              Here you can explore beautiful nature. We offer tropical plants
              and seasonal flowers that bring freshness to your life.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-lg transition"
            >
              Shop tropical plants
            </motion.button>
          </div>

        </div>
      </div>

      {/* ================= PLANTS SECTION ================= */}
      <section className="relative z-20 bg-white text-black px-6 md:px-16 pt-28 pb-20 rounded-t-[60px] -mt-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold">Plants for the People</h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Each plant is cared for by our horticultural experts, so they are as happy as healthy as they are.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={bgImage}
              alt="plant"
              className="w-24 h-16 object-cover rounded-xl"
            />
            <button className="px-5 py-2 border rounded-full hover:bg-black hover:text-white transition">
              Shop tropical plants
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mt-10">
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm">Outdoor Plants</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">Indoor Plants</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">Flower</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm">Plant Food</button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {[ "Pet Friendly Plants", "Orchids", "Succulents" ].map((title, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden group">
              <img
                src={bgImage}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 p-6 text-white flex flex-col justify-end">
                <h3 className="text-xl font-semibold">{title}</h3>
                <button className="mt-4 text-sm border border-white px-4 py-1 rounded-full w-fit hover:bg-white hover:text-black transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* ================= NEW PLANTS SECTION ================= */}
<section className="bg-white text-black px-6 md:px-16 pb-24">

  {/* Top Row */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    <h2 className="text-6xl font-bold">New Plants</h2>

    <p className="text-gray-500 max-w-md text-sm">
      Bring home our latest collection of fresh and beautiful plants,
      carefully grown for your space.
    </p>

  </div>

  {/* Cards Row */}
  <div className="mt-12 grid md:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="bg-gray-100 rounded-3xl p-4 group hover:shadow-xl transition">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={bgImage}
          alt="Pepperomia"
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Pepperomia Plants</h3>
          <p className="text-sm text-gray-500">$25.00</p>
        </div>

        <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition">
          +
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-3xl p-4 group hover:shadow-xl transition">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={bgImage}
          alt="Fiddle Leaf"
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Fiddle Leaf Fig</h3>
          <p className="text-sm text-gray-500">$45.00</p>
        </div>

        <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition">
          +
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 rounded-3xl p-4 group hover:shadow-xl transition">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={bgImage}
          alt="Calathea"
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Calathea Orbifolia</h3>
          <p className="text-sm text-gray-500">$35.00</p>
        </div>

        <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition">
          +
        </button>
      </div>
    </div>

  </div>

</section>

{/* Horizontal Pagination */}
<div className="flex items-center justify-center gap-3 mt-4">

  {/* Small Inactive Dots */}
  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>

  {/* Active Pill */}
  <div className="w-10 h-2 bg-black rounded-full transition-all duration-300"></div>

</div>

{/* ================= INDOOR COLLECTION ================= */}
<section className="bg-white text-black px-6 md:px-16 pb-28">

  {/* Top Row */}
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

    <p className="text-sm text-gray-500 max-w-xs">
      Check out our video content including informative sessions where you can
      learn more about your indoor plants.
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Indoor Collection
    </h2>

  </div>

  {/* Grid Layout */}
  <div className="mt-12 grid md:grid-cols-2 gap-6">

    {/* Big Card - Philodendron */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        src={bgImage}
        className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-semibold">Philodendron</h3>
        <p className="text-sm mt-2 max-w-sm">
          Philodendron comes in a variety of leaf shapes and sizes.
        </p>
      </div>
    </div>

    {/* Small Card - Calathea */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        src={bgImage}
        className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex items-end text-white">
        <h3 className="text-2xl font-semibold">Calathea</h3>
      </div>
    </div>

    {/* Bottom Left */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        src={bgImage}
        className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex items-end text-white">
        <h3 className="text-2xl font-semibold">Air Purifying</h3>
      </div>
    </div>

    {/* Bottom Right */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        src={bgImage}
        className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 p-6 flex items-end text-white">
        <h3 className="text-2xl font-semibold">Low Light Tolerant</h3>
      </div>
    </div>

  </div>

</section>

{/* ================= QUALITY SECTION ================= */}
<section className="bg-white text-black px-6 md:px-16 py-5 text-center">

  {/* Animated Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-6xl md:text-5xl font-bold"
  >
    Quality Plants & Curated Goods
  </motion.h2>

  {/* Animated Description */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-gray-500 mt-6 max-w-2xl mx-auto"
  >
    We offer carefully selected indoor plants, accessories, and curated
    botanical goods that elevate your living space naturally.
  </motion.p>

  {/* Video Thumbnail */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
    className="relative mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden group"
  >
 <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-72 md:h-96 object-cover"
>
  <source src={leafVideo} type="video/mp4" />
</video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Play Button */}
<div className="absolute inset-0 flex items-center justify-center">
  <div
   onClick={async () => {
  if (!videoRef.current) return;

  try {
    if (videoRef.current.paused) {
      await videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  } catch (err) {
    console.log("Video play blocked:", err);
  }
}}
    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition"
  >
    ▶
  </div>
</div>
  </motion.div>

</section>

{/* ================= FAQ SECTION ================= */}
<section className="bg-white text-black px-6 md:px-16 pb-28">

  <div className="max-w-4xl mx-auto space-y-4">

    {[
      "Ordering for Delivery?",
      "Potting Services",
      "Do we ship plants?",
      "Ordering for Pick up?"
    ].map((item, index) => (
      <div
        key={index}
        className="border rounded-2xl px-6 py-5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
      >
        <h3 className="font-semibold">{item}</h3>
        <span className="text-xl">+</span>
      </div>
    ))}

  </div>
</section>

{/* ================= FULLSCREEN COMMUNITY SECTION ================= */}
<section className="relative w-full h-screen overflow-hidden">

  {/* Background Image */}
  <img
    src={bgImage}
    alt="community"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-emerald-950/80 flex flex-col items-center justify-start text-center px-6 pt-36">

    {/* Heading */}
    <h2 className="text-4xl md:text-9xl font-bold text-white leading-tight">
      Join the community!
    </h2>

    {/* White Pill Box */}
    <div className="mt-20 bg-white rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-3 shadow-2xl">

      <button className="px-4 py-2 text-xs rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
        Instagram
      </button>

      <button className="px-4 py-2 text-xs rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
        Twitter
      </button>

      <button className="px-4 py-2 text-xs rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
        YouTube
      </button>

      <button className="px-6 py-2 text-xs rounded-full bg-black text-white hover:opacity-80 transition">
        Subscribe
      </button>

      <button className="px-4 py-2 text-xs rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
        Pinterest
      </button>

    </div>

    {/* Bottom Text */}
    <p className="text-sm text-gray-300 mt-8">
      10,000+ Plant Lovers
    </p>

  </div>
</section>



{/* Footer */}
<footer className="w-full text-center py-6 border-t border-white/10 bg-black/30 backdrop-blur-md">
  <p className="text-black-300 text-sm">
    © {new Date().getFullYear()} Plantify. All rights reserved.
  </p>
</footer>

    </div>
  );
}