// import { NavLink, Route, Router, Routes } from "react-router-dom";
// import ContactUs from "./pages/ContactUs";
// import LandingPage from "./pages/LandingPage";
// import ResrevationPage from "./pages/ResrevationPage";

// function App() {
//   return (
//     <>
//       <LandingPage />
//       <ResrevationPage />
//       <ContactUs />
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import ResrevationPage from "./pages/ResrevationPage";
import Footer from "./components/ui/landing components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservation" element={<ResrevationPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
