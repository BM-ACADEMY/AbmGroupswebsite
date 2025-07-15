// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Home";
import AchievementsSection from "./components/Achievements";
import Reviews from "./components/Reivews";
import BusinessRoadmap from "./components/Phases";
import Feed from "./components/Feed";
import TrustedCompanies from "./components/TrustBrands";
import Whychoose from "./components/whychoose";
import Footer from "./components/Footer";
import Main from "./components/Ceo/Main";
import WhatsappFloatButton from "./components/WhatsappFloatButton";
import GalleryComponent from "./components/Gallery";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <AchievementsSection />
              <Whychoose />
              <BusinessRoadmap />
              <Feed />
              <TrustedCompanies />
              <GalleryComponent />
              <Reviews />
              <Footer />
            </div>
          }
        />
        {/* CEO Route */}
        <Route path="/ceo" element={<Main />} />
      </Routes>
      <WhatsappFloatButton />
    </Router>
  );
};

export default App;
