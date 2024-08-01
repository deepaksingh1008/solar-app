import React from 'react';
import { Box, Flex, Heading, Text, Image, keyframes } from '@chakra-ui/react';
import { FaSolarPanel } from 'react-icons/fa';
import commercialImage from '../../assets/commercial.jpg'
import Banner from '../../components/Banner';
import commercialBg from '../../assets/commercialbg.jpg'
import { Helmet } from 'react-helmet';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CommercialServices = () => {
    return (
        <>
            <Helmet>
                <title>Commercial Solar System Services | Sanskriti Solar</title>
                <meta name="description" content="Explore our commercial solar system services at Sanskriti Solar. We offer comprehensive solar solutions for industries, helping to reduce grid power usage and save costs." />
                <meta name="keywords" content="commercial solar system, solar power for industries, solar installation, Sanskriti Solar" />
                <meta property="og:title" content="Commercial Solar System Services | Sanskriti Solar" />
                <meta property="og:description" content="Explore our commercial solar system services at Sanskriti Solar. We offer comprehensive solar solutions for industries, helping to reduce grid power usage and save costs." />
                <meta property="og:image" content={commercialBg} />
            </Helmet>
            <Banner backgroundImage={commercialBg} title={'Commercial Solar project'} />
            <Box p={5} animation={`${fadeIn} 2s ease-in-out`}>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" gap={6}>
                    <Image
                        src={commercialImage} // Replace with your image path
                        alt="Solar Panels for Commercial"
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
                                Commercial Solar project
                            </Heading>
                        </Flex>
                        <Text fontSize="md" color="gray.600">
                            We provide Commercial Solar System Service in response to our clients’ increasing needs. This service is provided
                            in a variety of ways depending on the needs of the client. We charge fair fees for these services. Industrial solar
                            power systems are mostly used to supply electricity to isolated locations where traditional power is either too
                            expensive or too hard to access. The systems can be constructed with industrial-grade walk-in shelters or skid,
                            roof, pole, or trailer mounted. We provide industries complete solar solutions. The government offers subsidies to
                            our clients for the installation of solar power plants up to 100 KW. By adopting solar-generated power, industries
                            can reduce their Grid power usage and save a significant amount of money.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default CommercialServices;
