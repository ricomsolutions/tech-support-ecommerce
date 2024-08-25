import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";

import Testimonials from "./components/Testimonials";
import PopularProducts from "./components/PopularProducts";
import HeroSection from "./components/HeroSection";
import TopCategories from "./components/TopCategories";
import SpecialOffers from "./components/SpecialOffers";
import CustomerReviews from "./components/CustomerReviews";
import NewArrivals from "./components/NewArrivals";
import BestSellers from "./components/BestSellers";
import Newsletter from "./components/Newsletter";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AboutPage from "./components/AboutPage";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import ServicePage from "./components/ServicePage";
import WifiNetworkPage from "./components/WifiNetworkPage";
import HomeSecurityPage from "./components/HomeSecurityPage";
import ComputersPrintersPage from "./components/ComputersPrintersPage";
import PaymentForm from "./components/PaymentForm"; // Import PaymentForm
import ServicesAndTestimonials from "./components/ServicesAndTestimonials";
import ContactPage from "./components/ContactPage";
import BecomeTechnicianNavbar from "./components/BecomeTechnicianNavbar";
import HeroTechnician from "./components/HeroTechnician";
import WhyJoin from "./components/WhyJoin";
import HowItWorks from "./components/HowItWorks";
import ExpertiseArea from "./components/ExpertiseArea";
import Qualifications from "./components/Qualifications";
import TechnicianTestimonials from "./components/TechnicianTestimonials";
import CoreValues from "./components/CoreValues";
import GetStarted from "./components/GetStarted";
import ApplyPage from "./components/ApplyPage";
import ProductDetail from "./components/ProductDetail"; // Import the ProductDetail component

import Cart from "./components/Cart"; // Import the Cart component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Slider />
                <Services />
                <FeaturedProducts />
                <PopularProducts />
                <TopCategories />
                <SpecialOffers />
                <Testimonials />
                <CustomerReviews />
                <HeroSection />
                <NewArrivals />
                <BestSellers />
                <Newsletter />
                <Brands />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutPage />
                <FeaturesSection />
                <AboutSection />
                <ServicesAndTestimonials />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <ServicePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/wifi-networks"
            element={
              <>
                <Navbar />
                <WifiNetworkPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/home-security"
            element={
              <>
                <Navbar />
                <HomeSecurityPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/computers-printers"
            element={
              <>
                <Navbar />
                <ComputersPrintersPage />
                <Footer />
              </>
            }
          />
          <Route path="/payment" element={<PaymentForm />} />{" "}
          {/* New PaymentForm route */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/technician"
            element={
              <>
                <BecomeTechnicianNavbar />
                <HeroTechnician />
                <WhyJoin />
                <HowItWorks />
                <ExpertiseArea />
                <Qualifications />
                <TechnicianTestimonials />
                <CoreValues />
                <GetStarted />
                <Footer />
              </>
            }
          />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/booking/:category" element={<ProductDetail />} />{" "}
          {/* Dynamic route */}
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
          <Route
            path="/signup"
            element={
              <>
                <Signup />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
