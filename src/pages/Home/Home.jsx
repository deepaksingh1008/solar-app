import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Modals from "../../components/Modal";
import SocialMedia from "../../components/SocialMedia";
import image1 from '../../assets/solar-image1.jpg';
import image2 from '../../assets/solar-image2.jpg';
import MainCard from "../../components/Card/MainCard";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg', image1, image2
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change the image every 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
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
                        color='#C53030'
                    >
                        Sanskriti Solar Power
                    </Heading>
                    <Heading
                        as="h1"
                        size={{ base: "lg", md: "xl" }} // Responsive font size
                        mb={4}
                        textAlign="center"
                        color='#2F855A'
                    >
                        Registered subsidy vendor under up government
                    </Heading>
                    <Flex
                        mt={4}
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        gap={{ base: 2, md: 4 }} // Add gap between buttons
                    >
                        <Modals />
                    </Flex>
                </Flex>
                <SocialMedia /> {/* Add the SocialMedia component */}
            </Box>
            <Box p={4}>
                <MainCard />
            </Box>
        </>
    );
};

export default Home;
