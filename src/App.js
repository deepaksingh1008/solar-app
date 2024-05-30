import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import ImageCarousel from "./components/Caresole/ImageCarousel";
import MainCard from "./components/Card/MainCard";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import Banner from "./components/Banner";
import OnGridSolar from "./pages/Solar/OnGridSolar";
import OffGridSolar from "./pages/Solar/OffGridSolar";
import HybridSolar from "./pages/Solar/HybridSolar";
import ScrollToTop from "./hook/ScrollToTop";
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
          </Routes>
        </ScrollToTop>
      </Box>
      {/* <ImageCarousel /> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
