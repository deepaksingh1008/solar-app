import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Modals from "../../components/Modal";

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/1310384629/photo/solar-panel-cell-on-dramatic-sunset-sky-background-clean-alternative-power-energy-concept.jpg?s=612x612&w=0&k=20&c=HW8S4AbKe1fyEuu5E-XC4gwlIrUghNY6kaiS-gzDu0A='
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
            <Flex direction="column" align="center" justify="center" h="100%" w="100%">
                <Heading as="h1" size="4xl" mb={4} textAlign="center" color='#C53030'>
                    SANSKRITI PVT LTD
                </Heading>
                <Heading as="h1" size="3xl" mb={4} textAlign="center" color='#C53030'>
                    REGISTERED SUBSIDY VENDOR!
                </Heading>
                <Flex mt={4}>
                    <Modals />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
