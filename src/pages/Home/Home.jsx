import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, useMediaQuery } from "@chakra-ui/react";
import Modals from "../../components/Modal";
import SocialMedia from "../../components/SocialMedia";
import image1 from '../../assets/solar-image1.jpg';
import image2 from '../../assets/solar-image2.jpg';
import MainCard from "../../components/Card/MainCard";
import QuoteModel from "../../components/Quote/QuoteModel";
import Carousel from "../../components/Caresole/Carousel";
import img1 from '../../assets/s1.jpeg';
import img2 from '../../assets/s2.jpeg';
import img3 from '../../assets/s3.jpeg';
import img4 from '../../assets/s4.jpg';
import WhyChoose from "../../components/WhyChoose";
import OurServices from '../../components/OurServices'
import Subsidy from '../../pages/subsity/Subsity'
import { Helmet } from 'react-helmet'
const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg', image1, image2
    ];
    const img = [
        img1, img2, img3, img4
    ];

    // Media query hook to detect if the device is mobile
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change the image every 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <Helmet>
                <title>Home - Sanskriti Solar</title>
                <meta name="description" content="Welcome to the home page of Your Company. We offer the best solar energy solutions including on-grid, off-grid, and hybrid solar systems. Contact us today for solar panel installation and renewable energy services." />
                <meta name="keywords" content="solar energy solutions, solar power systems, solar energy provider, solar panel installation, solar power services, solar energy company, renewable energy solutions, solar energy for homes, solar energy for businesses, on-grid solar systems, off-grid solar systems, hybrid solar systems, solar energy benefits, solar power advantages, sustainable energy solutions, clean energy solutions, green energy provider, solar energy experts" />

                <meta name="author" content="Saurabh Singh" />
            </Helmet>
            <Box
                height="100vh"
                backgroundImage={`url(${images[currentImageIndex]})`}
                backgroundSize="cover"
                backgroundPosition="center"
                transition="background-image 1s ease-in-out" // Smooth transition between images
                color="white"
            >
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    h="100%"
                    w="100%"
                    p={4} // Add padding for better spacing on smaller screens
                >
                    <Heading
                        as="h1"
                        size={{ base: "2xl", md: "4xl" }} // Responsive font size
                        mb={4}
                        textAlign="center"
                        color="white"
                    >
                        Sanskriti Solar Power
                    </Heading>
                    <Heading
                        as="h2"
                        size={{ base: "lg", md: "xl" }} // Responsive font size
                        mb={4}
                        textAlign="center"
                        color="white"
                    >
                        Registered subsidy vendor under UP government
                    </Heading>
                    <Flex
                        mt={4}
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        gap={{ base: 2, md: 4 }} // Add gap between buttons
                    >
                        <Modals />
                    </Flex>
                    <Flex
                        mt={4}
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        gap={{ base: 2, md: 4 }} // Add gap between buttons
                    >
                        <QuoteModel bg={'#6371e0'} />
                    </Flex>
                </Flex>
            </Box>
            <Box p={5} ml={{ base: '0', md: '100px' }} mr={{ base: '0', md: '100px' }}>

                <Subsidy />
            </Box>
            <Box p={4}>
                <MainCard />
            </Box>
            {/* Render Carousel only on non-mobile devices */}

            <Box p={5}>
                {/* <Heading mb={5}>React Carousel</Heading> */}
                <Carousel images={img} />
            </Box>

            <Box p={5} ml={{ base: '0', md: '100px' }} mr={{ base: '0', md: '100px' }}>
                <WhyChoose />
            </Box>
            <Box p={5} ml={{ base: '0', md: '100px' }} mr={{ base: '0', md: '100px' }}>
                <OurServices />
            </Box>
        </>
    );
};

export default Home;
