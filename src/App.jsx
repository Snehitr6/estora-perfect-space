
import { useCallback, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";

import { WishlistProvider } from "./context/WishlistContext";

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Wishlist from "./pages/Wishlist";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

function AppContent() {
  // Always show intro when the application loads.
  const [showIntro, setShowIntro] = useState(true);

  const completeIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      <AnimatedRoutes />

      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={completeIntro} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </WishlistProvider>
  );
}
