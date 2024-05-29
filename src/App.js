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
function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <BrowserRouter>
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        {/* <ImageCarousel /> */}
        <MainCard />
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
