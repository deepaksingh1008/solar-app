import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Carousel from "./components/Caresole/Carousel";
import MainCard from "./components/Card/MainCard";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import Banner from "./components/Banner";
import OnGridSolar from "./pages/Solar/OnGridSolar";
import OffGridSolar from "./pages/Solar/OffGridSolar";
import HybridSolar from "./pages/Solar/HybridSolar";
import ScrollToTop from "./hook/ScrollToTop";
import SocialMedia from "./components/SocialMedia";
import WhyChoose from "./components/WhyChoose";
import HomeServices from "./pages/Services/HomeServices";
import CommercialServices from "./pages/Services/CommercialServices";
import Product from "./pages/product/Product";
import OrderForm from "./pages/product/OrderForm";
import SubsidyDetails from "./pages/subsity/SubsidyDetails";
import ProductNotFound from "./components/ProductNotFound";
import Blog from "./pages/blog/Blog";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box flex="1">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/on-grid-solar" element={<OnGridSolar />} />
            <Route path="/off-grid-solar" element={<OffGridSolar />} />
            <Route path="/hybrid" element={<HybridSolar />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order/:id" element={<OrderForm />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/hybrid" element={<HybridSolar />} />
            <Route path="/subsidy" element={<SubsidyDetails />} />
            <Route path="/*" element={<ProductNotFound />} />
            <Route
              path="/commercial-services"
              element={<CommercialServices />}
            ></Route>
            <Route path="/home-services" element={<HomeServices />}></Route>
          </Routes>
        </ScrollToTop>
      </Box>
      <SocialMedia />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
