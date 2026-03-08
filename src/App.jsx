import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import ContactPage from "./components/contact/ContactPage";
import Blog from "./components/blog/Blog";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;