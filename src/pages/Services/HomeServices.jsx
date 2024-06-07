import React from 'react';
import { Box, Flex, Heading, Text, Image, keyframes } from '@chakra-ui/react';
import { FaSolarPanel } from 'react-icons/fa';
import HomeImage from '../../assets/Home.jpg'
import Banner from '../../components/Banner';
import HomeBg from '../../assets/homebg.jpg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeServices = () => {
    return (
        <>
            <Banner backgroundImage={HomeBg} title={'Rooftop solar project'} />
            <Box p={5} animation={`${fadeIn} 2s ease-in-out`}>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" gap={6}>
                    <Image
                        src={HomeImage} // Replace with your image path
                        alt="Solar Panels for Home"
                        borderRadius="md"
                        boxShadow="md"
                        w={{ base: '100%', md: '50%' }}
                        maxH="400px"
                    />
                    <Box
                        p={5}
                        border="1px solid"
                        borderColor="green.300"
                        borderRadius="md"
                        boxShadow="md"
                        bg="white"
                        w={{ base: '100%', md: '50%' }}
                    >
                        <Flex align="center" mb={4}>
                            <Box as={FaSolarPanel} color="green.400" boxSize={10} mr={3} />
                            <Heading size="lg" color="green.500">
                                Rooftop solar project
                            </Heading>
                        </Flex>
                        <Text fontSize="md" color="gray.600">
                            We Provide Solar Service For Home is a term used to describe the expert services offered by businesses or
                            contractors that specialize in the planning, acquiring, and setting up solar power systems—more specifically,
                            solar panels—for homes, businesses, and other types of properties. The whole process of installing a solar power
                            system to collect sunlight and turn it into electricity for on-site use is included in the service.
                            As a well-known company in the industry, we offer Solar Power Plant Installation Services. Experts in their field
                            use cutting-edge techniques to provide this service in accordance with client requests. We make use of
                            cutting-edge printing equipment for this service.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default HomeServices;
