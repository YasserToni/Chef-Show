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
import LoginPage from "./pages/LoginPage";
import RegistrePage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerificationPage from "./pages/VerificationPage";

function PageWrapper({ children }) {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
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
        <Route
          path="/login"
          element={
            <PageWrapper>
              <LoginPage />
            </PageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageWrapper>
              <RegistrePage />
            </PageWrapper>
          }
        />
        <Route
          path="/forgetPassword"
          element={
            <PageWrapper>
              <ForgetPasswordPage />
            </PageWrapper>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <PageWrapper>
              <ResetPasswordPage />
            </PageWrapper>
          }
        />
        <Route
          path="/verifyPassword"
          element={
            <PageWrapper>
              <VerificationPage />
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
      <AinmationRoutes />
    </div>
  );
}

export default App;
