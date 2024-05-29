import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Modals from "../../components/Modal";
import SocialMedia from "../../components/SocialMedia";
import image1 from '../../assets/solar-image1.jpg';
import image2 from '../../assets/solar-image2.jpg';

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
        <Box
            height="100vh"
            backgroundImage={`url(${images[currentImageIndex]})`}
            backgroundSize="cover"
            backgroundPosition="center"
            transition="background-image 1s ease-in-out" // Smooth transition between images
            color="white"
        >
            <Flex direction="column" align="center" justify="center" h="100%" w="100%" mb={-50}>
                <Heading as="h1" size="4xl" mb={4} textAlign="center" color='#C53030'>
                    Sanskriti Solar Power
                </Heading>
                <Heading as="h1" size="xl" mb={4} textAlign="center" color='#2F855A'>
                    Registered subsidy vendor under up government
                </Heading>
                <Flex mt={4}>
                    <Modals />
                </Flex>
            </Flex>
            <SocialMedia /> {/* Add the SocialMedia component */}
        </Box>
    );
};

export default Home;
