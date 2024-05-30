import React from 'react'
import { Box, Button, VStack, Text, Heading, Flex, Image, useMediaQuery, ChakraProvider, Grid } from '@chakra-ui/react';
import bgImage from '../../assets/bg-image.jpg';
import { useNavigate } from 'react-router-dom'
const SideBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                width={{ base: '100%', md: '350px' }}
                bg="white.400"
                p="4"

                display={{ base: 'none', md: 'block' }}



            >



                <Box
                    width={{ base: '100%', md: '350px' }}
                    bg="green.400"
                    p="4"
                    color="white"
                    display={{ base: 'none', md: 'block' }}
                    boxShadow="md"
                    mb={{ base: '8', md: '0' }}
                >
                    <Heading size="md" mb="4">Our Products</Heading>
                    <VStack align="start" spacing="2">
                        <Button
                            width="100%"
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            bg="white"
                            color="black"
                            _hover={{ background: 'blue.500', color: 'white' }}
                            mb='10px'
                            mt='10px'
                            onClick={() => navigate('/on-grid-solar')}
                        >
                            On Grid Solar System
                        </Button>
                        <Button
                            width="100%"
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            bg="white"
                            color="black"
                            _hover={{ background: 'blue.500', color: 'white' }}
                            mb='10px'
                            mt='10px'
                            onClick={() => navigate('/off-grid-solar')}
                        >
                            Off Grid Solar System
                        </Button>
                        <Button
                            width="100%"
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            bg="white"
                            color="black"
                            _hover={{ background: 'blue.500', color: 'white' }}
                            mb='10px'
                            mt='10px'
                            onClick={() => navigate('/hybrid')}
                        >
                            Hybrid Solar System
                        </Button>
                    </VStack>

                </Box>

                <Box
                    width={{ base: '100%', md: '350px' }}
                    mt="8"
                    p="4"
                    borderRadius="md"
                    backgroundImage={`url('https://i.pinimg.com/564x/da/2b/57/da2b57ad5cc5309be7af09d9d1d39b0f.jpg')`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                >
                    <Heading as="h4" size="md" m="4px" p="5px" mb="10px">For More Details</Heading>
                    <Button
                        colorScheme="whiteAlpha"
                        variant="outline"
                        mb="2"
                        border="3px solid white"
                        color="white"
                        _hover={{ bg: "green", color: "black" }}
                        transition="background-color 0.3s ease, color 0.3s ease"
                    >
                        Request A Quote
                    </Button>
                    <Text>+91 7309375095</Text>
                </Box>
            </Box>
        </>
    )
}

export default SideBar


