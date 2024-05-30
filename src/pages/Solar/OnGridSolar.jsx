import React from 'react';
import { Box, Button, VStack, Text, Heading, Flex, Image, useMediaQuery, ChakraProvider } from '@chakra-ui/react';

import OnGridImage from '../../assets/on-grid.jpg';
import Banner from '../../components/Banner';
import BannerImage from '../../assets/banner.jpg';
import SideBar from './SideBar';
import SocialMedia from '../../components/SocialMedia';
const OnGridSolar = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Banner backgroundImage={BannerImage} title={'On Grid Solar System'} />

            <Flex direction={{ base: 'column', md: 'row' }} margin="50px" wrap="wrap">
                {/* Side Menu */}
                <SideBar />

                {/* Content */}
                <Box flex="1" p="4" ml={{ base: '0', md: '60px' }}>
                    <Heading color="green.400" mb="4"><span style={{ fontWeight: 'bold', color: '#2060c7' }}>On Grid</span> <span style={{ fontWeight: 'bold' }}>Solar System</span></Heading>
                    <Flex align="center" justify="center" mb="8">
                        <Image src={OnGridImage} alt="On-grid solar system diagram" maxWidth="100%" />
                    </Flex>
                    <Text fontSize="lg" mb="4">
                        On-Grid system is a type of Solar system for home that generates power with the help of Solar Panels.
                        The excess power supply will be diverted back to the grid when there is an overproduction.
                        This power can be credited for later use. For safety reasons, it will function only when the grid is connected to it.
                    </Text>
                    <Text fontSize="lg" mb="4">
                        On-Grid rooftop solar PV system is the most cost-effective Roof Solar Power Plant Installation.
                        The On-grid system consists of the following components for providing solar energy for a house:
                    </Text>
                    <Flex direction={{ base: 'column', md: 'row' }} align="start" fontSize="lg" gap="4">
                        <Box>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Solar panels
                            </Text>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Inverter
                            </Text>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Distribution box
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Bi-directional Meter
                            </Text>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Grid (KEB) or Utility service
                            </Text>
                            <Text>
                                <span style={{ backgroundColor: 'green', padding: '0 5px' }}>✦</span> Consumer load
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <SocialMedia />
        </>
    );
}

export default OnGridSolar;
