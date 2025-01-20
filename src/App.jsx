import { Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import ResrevationPage from "./pages/ResrevationPage";
import Footer from "./components/ui/landing components/Footer";
import PastShowPage from "./pages/PastShowPage";
import Navbar from "./components/ui/landing components/Navbar";
import { AnimatePresence } from "framer-motion";
// import transition from "../transition";
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
      >
        <children />
      </motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <children />
      </motion.div>
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
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  const location = useLocation();
  return (
    <>
      <>
        <AnimatePresence mode="wait">
          <div className=" absolute top-0 z-30 w-full">
            <Navbar />
          </div>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/reservation" element={<ResrevationPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pastshow" element={<PastShowPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
      <>
        {/* <Navbar />
      <AinmationRoutes />
      <Footer /> */}
      </>
    </>
  );
}

export default App;
