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
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AboutPage from "./components/AboutPage";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import ServicePage from "./components/ServicePage";
import WifiNetworkPage from "./components/WifiNetworkPage";
import HomeSecurityPage from "./components/HomeSecurityPage";
import ComputersPrintersPage from "./components/ComputersPrintersPage";
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
import ProductDetail from "./components/ProductDetail";
import CheckoutPage from "./components/CheckoutPage";
import OrderConfirmationPage from "./components/OrderConfirmationPage"; //recently added

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserProvider } from "./context/UserContext"; // Import UserProvider

import "./App.css";

// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51PpEjCRrDMf6sJkaBt2tdZI4w0qVDPeuhE3wwoJdbBCqgJBzEjRTcnZkitgThRax9fh3WIgl9lT362mOvEatpl6Q00u1Rs636a"
);

function App() {
  return (
    <UserProvider>
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
            <Route path="/booking/:category" element={<ProductDetail />} />

            {/* Wrap Cart with Elements for Stripe */}
            <Route path="/cart" element={<Cart />} />

            {/* Wrap Checkout with Elements for Stripe */}
            <Route
              path="/checkout"
              element={
                <Elements stripe={stripePromise}>
                  <CheckoutPage />
                </Elements>
              }
            />

            <Route
              path="/order-confirmation"
              element={<OrderConfirmationPage />}
            />

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
    </UserProvider>
  );
}

export default App;
