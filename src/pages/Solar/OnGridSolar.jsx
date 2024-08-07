import React from 'react';
import { Box, Button, VStack, Text, Heading, Flex, Image, useMediaQuery, ChakraProvider } from '@chakra-ui/react';

import OnGridImage from '../../assets/on-grid.jpg';
import Banner from '../../components/Banner';
import BannerImage from '../../assets/banner.jpg';
import SideBar from './SideBar';
import SocialMedia from '../../components/SocialMedia';
import { Helmet } from 'react-helmet';
const OnGridSolar = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Helmet>
                <title>On Grid Solar System | Sanskriti Solar</title>
                <meta name="description" content="Learn about On Grid Solar Systems offered by Sanskriti Solar. Discover how on-grid solar systems work, their components, and the benefits of installing them. Get detailed insights on solar panel systems, inverters, and more." />
                <meta name="keywords" content="On Grid Solar System, Solar Panels, Solar Inverter, Solar Power, Roof Solar Power Plant, Solar Energy, Sanskriti Solar" />
                <meta property="og:title" content="On Grid Solar System | Sanskriti Solar" />
                <meta property="og:description" content="Learn about On Grid Solar Systems offered by Sanskriti Solar. Discover how on-grid solar systems work, their components, and the benefits of installing them. Get detailed insights on solar panel systems, inverters, and more." />
                <meta property="og:image" content={BannerImage} />
                <meta property="og:url" content="https://sanskritisolar.in/on-grid-solar" />
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "On Grid Solar System",
            "description": "On-Grid solar system generates power with solar panels and diverts excess power back to the grid. Learn about its components and benefits.",
            "brand": {
                "@type": "Organization",
                "name": "Sanskriti Solar"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://sanskritisolar.in/on-grid-solar",
                "priceCurrency": "INR",
                "price": "Contact for pricing",
                "itemCondition": "https://schema.org/NewCondition"
            }
        }
        `}
                </script>
            </Helmet>
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

        </>
    );
}

export default OnGridSolar;
