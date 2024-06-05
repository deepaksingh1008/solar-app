// src/pages/About.js
import React from 'react';
import { Box, Flex, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import img1 from '../../assets/banner.jpg'
import AboutImage from '../../assets/about.jpg'
import img2 from '../../assets/save-money.png'
import img3 from '../../assets/roof.png'
import img4 from '../../assets/plug.jpg'
const About = () => {
    const MotionBox = motion(Box);

    return (
        <>
            <Banner backgroundImage={img1} title={'About'} />
            <Box p={{ base: 4, md: 8 }}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    mb={12}
                >
                    <MotionBox
                        flex="1"
                        p={4}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={AboutImage}
                            alt="Solar Panel Image"
                            borderRadius="md"
                            boxSize={{ base: '100%', md: '80%' }}
                            objectFit="cover"
                        />
                    </MotionBox>
                    <MotionBox
                        flex="2"
                        p={4}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Heading as="h2" size="xl" mb={4}>
                            Who we are and what we do
                        </Heading>
                        <Heading as="h3" size="lg" mb={4} color="blue.600">
                            Sanskriti Solar
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb={4}>
                            We are one of the leading solar system integrators and suppliers of premium brands in Varanasi, with 5 years of experience in solar power projects for the residential and commercial sectors.
                        </Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb={4}>
                            We supply solar modules, inverters, batteries, mounting structures, PV array junction boxes (DCDB), AC distribution boxes, and other solar accessories that are imported or indigenous from the best sources available in the market, and we maintain the quality standards with precision. We have specialized service engineers and well-trained installation teams.
                        </Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }}>
                            As a well-known company in the industry, we offer Solar Power Plant Installation Services. Experts in their field use cutting-edge techniques to provide this service in accordance with client requests.
                        </Text>
                    </MotionBox>
                </Flex>

                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-around"
                    align="center"
                    wrap="wrap"
                >
                    <MotionBox
                        p={4}
                        flex="1"
                        minW={{ base: '100%', md: '30%' }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        mb={{ base: 4, md: 0 }}
                    >
                        <Image src={img2} boxSize="100px" mb={4} />
                        <Heading as="h4" size="md" mb={2} textAlign="center">Enjoy Cost-Savings</Heading>
                        <Text textAlign="center">
                            Installing solar panels can help optimise underutilised roof space. Depending on your electricity consumption and roof size, you can enjoy greater cost savings, potentially cutting your electricity bills by up to 80%!
                        </Text>
                    </MotionBox>
                    <MotionBox
                        p={4}
                        flex="1"
                        minW={{ base: '100%', md: '30%' }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image src={img3} boxSize="100px" mb={4} />
                        <Heading as="h4" size="md" mb={2} textAlign="center">Protect Your Roof</Heading>
                        <Text textAlign="center">
                            Excessive heat from the sun can cause warping of your roof. Installing solar panels for your home can thus act as an added shield, preventing direct sunlight and minimising heat influx into your living space.
                        </Text>
                    </MotionBox>
                    <MotionBox
                        p={4}
                        flex="1"
                        minW={{ base: '100%', md: '30%' }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        mb={{ base: 4, md: 0 }}
                    >
                        <Image src={img4} boxSize="100px" mb={4} />
                        <Heading as="h4" size="md" mb={2} textAlign="center">Reduce Carbon Footprint</Heading>
                        <Text textAlign="center">
                            Solar energy is very clean because it makes electricity without creating pollution. Since we have sunny weather all year, it's also a reliable source of renewable energy for your home.
                        </Text>
                    </MotionBox>
                </Flex>


            </Box>
        </>
    );
};

export default About;
