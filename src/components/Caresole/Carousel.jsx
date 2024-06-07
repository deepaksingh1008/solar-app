import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    const prevSlide = () => {
        const index = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // Change the image every 2 seconds (2000 ms)

        return () => clearInterval(interval);
    }, [currentIndex]); // Re-run the effect when currentIndex changes

    return (
        <Box position="relative" width="full" height={{ base: '300px', sm: '400px', md: '600px', lg: '800px' }} overflow="hidden">
            <Flex width="full" height="full">
                {images.map((image, index) => (
                    <Box
                        key={index}
                        width="full"
                        height="full"
                        flex="none"
                        transition="transform 0.5s"
                        transform={`translateX(-${currentIndex * 100}%)`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <a href={image} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={image}
                                alt={`slide-${index}`}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                            />
                        </a>
                    </Box>
                ))}
            </Flex>

            <IconButton
                icon={<FaArrowLeft />}
                position="absolute"
                left={{ base: 1, md: 2 }}
                top="50%"
                transform="translateY(-50%)"
                onClick={prevSlide}
                aria-label="Previous Slide"
                zIndex={2}
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                p={{ base: 1, md: 2 }}
            />

            <IconButton
                icon={<FaArrowRight />}
                position="absolute"
                right={{ base: 1, md: 2 }}
                top="50%"
                transform="translateY(-50%)"
                onClick={nextSlide}
                aria-label="Next Slide"
                zIndex={2}
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                p={{ base: 1, md: 2 }}
            />
        </Box>
    );
};

export default Carousel;
