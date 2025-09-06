import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Projects from "./pages/Projects";
import FeaturesManagement from "./dashboard/features/FeaturesManagement";
import ServiceManagement from "./dashboard/service/ServiceManagement";
import SliderManagement from "./dashboard/slider/SliderManagement";
import Dashboard from "./dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./components/BlogDetails";
import CategoryPage from "./components/CategoryPage";
import Career from "./pages/Career";
import WebsiteDev from "./pages/WebsiteDev";
import WebTechSupport from "./pages/WebTechSupport";
import CorporateMail from "./pages/CorporateMail";
import PaymentSystems from "./pages/PaymentSystems";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/websitedev" element={<WebsiteDev />} />
        <Route path="/webtechsupport" element={<WebTechSupport />} />
        <Route path="/corporateemail" element={<CorporateMail />} />
        <Route path="/paymentsystems" element={<PaymentSystems />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features-management" element={<FeaturesManagement />} />
        <Route path="/service-management" element={<ServiceManagement />} />
        <Route path="/slider-management" element={<SliderManagement />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
