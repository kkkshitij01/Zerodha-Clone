
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from "./Landing-page/Home/HomePage"
import Signup from "./Landing-page/Signup/Signup"
import AboutPage from "./Landing-page/About/AboutPage"
import SupportPage from "./Landing-page/Support/SupportPage"
import ProductPage from "./Landing-page/Product/ProductPage"
import PricingPage from "./Landing-page/Pricing/PricingPage"
import Nav from "./Landing-page/Nav";
import Footer from "./Landing-page/Footer";
import NotFound from "./Landing-page/NotFound";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter >
);

