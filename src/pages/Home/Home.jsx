import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modals from "../../components/Modal";

const Home = () => {
    const [img, setImg] = useState([
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/1310384629/photo/solar-panel-cell-on-dramatic-sunset-sky-background-clean-alternative-power-energy-concept.jpg?s=612x612&w=0&k=20&c=HW8S4AbKe1fyEuu5E-XC4gwlIrUghNY6kaiS-gzDu0A='
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('forward');

    const handleChange = (index) => {
        setCurrentIndex(index);
        if (direction === 'forward' && index === img.length - 1) {
            setDirection('backward');
        } else if (direction === 'backward' && index === 0) {
            setDirection('forward');
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (direction === 'forward') {
                    return (prevIndex + 1) % img.length;
                } else {
                    return (prevIndex - 1 + img.length) % img.length;
                }
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [direction, img.length]);

    return (
        <Box>
            <Carousel
                showThumbs={false}
                showStatus={false}
                selectedItem={currentIndex}
                onChange={handleChange}
                infiniteLoop={false}
                autoPlay={false}
                stopOnHover={false}
                swipeable
                emulateTouch
            >
                {img.map((item, idx) => (
                    <Box
                        key={idx}
                        height="calc(var(--vh, 1vh) * 100)"  // Use the CSS variable for height
                        backgroundImage={`url('${item}')`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        color="white"
                        style={{ touchAction: 'pan-y' }} // Allow vertical scroll
                    >
                        <Flex direction="column" align="center" justify="center" h="100%" w="100%">
                            <Heading as="h1" size="4xl" mb={4} textAlign="center" color='#C53030'>
                                SANSKRITI PVT LTD
                            </Heading>
                            <Heading as="h1" size="3xl" mb={4} textAlign="center" color='#C53030'>
                                REGISTERED SUBSIDY VENDOR !
                            </Heading>
                            <Flex mt={4}>
                                <Modals />
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Home;
