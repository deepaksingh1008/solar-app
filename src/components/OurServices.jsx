import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, keyframes } from '@chakra-ui/react';
import HomeImage from '../assets/Home.jpg'
import CommercialImage from '../assets/commercial.jpg'
import { useNavigate } from 'react-router-dom';
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SolarServices = () => {
    const navigate = useNavigate();
    return (
        <Box bg="green.50" py={10}>
            <Box textAlign="center" mb={8}>
                <Heading color="green.600" size="2xl" mb={2}>
                    Our Solar Services
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    We are dedicated to providing sustainable and renewable energy solutions
                    to empower individuals, businesses, and communities.
                </Text>
            </Box>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                gap={8}
                px={{ base: 4, md: 20 }}
            >
                <Flex
                    direction="column"
                    align="center"
                    p={8}
                    bg="white"
                    borderRadius="md"
                    boxShadow="md"
                    textAlign="center"
                    animation={`${bounceAnimation} 2s infinite`}
                >
                    <Image src={HomeImage} alt="Solar Panels For Homes" boxSize="150px" mb={4} />
                    <Heading size="md" mb={4}>Solar Panels For Homes</Heading>
                    <Text mb={4}>
                        Go solar for your home with India's first Rent-To-Own solar programme or opt for an upfront purchase plan.
                    </Text>
                    <Button colorScheme="blue" onClick={() => navigate('/home-services')}>Explore More</Button>
                </Flex>
                <Flex
                    direction="column"
                    align="center"
                    p={8}
                    bg="white"
                    borderRadius="md"
                    boxShadow="md"
                    textAlign="center"
                    animation={`${bounceAnimation} 2s infinite`}
                >
                    <Image src={CommercialImage} boxSize="150px" mb={4} />
                    <Heading size="md" mb={4}>Commercial Solar Panels</Heading>
                    <Text mb={4}>
                        Embrace sustainability for your business through a Power Purchase Agreement (PPA) or an upfront purchase plan.
                    </Text>
                    <Button colorScheme="blue" onClick={() => navigate('/commercial-services')}>Explore More</Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default SolarServices;
