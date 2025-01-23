import { Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import ResrevationPage from "./pages/ResrevationPage";
import Footer from "./components/ui/landing components/Footer";
import PastShowPage from "./pages/PastShowPage";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/ui/landing components/Navbar";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </>
  );
}

function AinmationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/reservation"
          element={
            <PageWrapper>
              <ResrevationPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactUs />
            </PageWrapper>
          }
        />
        <Route
          path="/pastshow"
          element={
            <PageWrapper>
              <PastShowPage />
            </PageWrapper>
          }
        />
        <Route
          path="/booking"
          element={
            <PageWrapper>
              <BookingPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <div className="bg">
      <div className=" absolute top-0 z-30 w-full">
        <Navbar />
      </div>
      <AinmationRoutes />
      <Footer />
    </div>
  );
}

export default App;
