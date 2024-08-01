import React from 'react'
import BannerImage from '../../assets/banner.jpg';
import { Box, Button, VStack, Text, Heading, Flex, Image, useMediaQuery, ChakraProvider } from '@chakra-ui/react';
import SideBar from './SideBar';
import OffGridImage from '../../assets/hybrid-solar.jpg'
import Banner from '../../components/Banner';
import SocialMedia from '../../components/SocialMedia';
import { Helmet } from 'react-helmet';
const HybridSolar = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Helmet>
                <title>Hybrid Solar System | Sanskriti Solar</title>
                <meta name="description" content="Discover Hybrid Solar Systems at Sanskriti Solar. Our hybrid systems combine solar panels with battery storage to provide continuous, reliable energy for homes and businesses." />
                <meta name="keywords" content="Hybrid Solar System, Solar Panels, Battery Storage, Renewable Energy, Sanskriti Solar" />
                <meta property="og:title" content="Hybrid Solar System | Sanskriti Solar" />
                <meta property="og:description" content="Discover Hybrid Solar Systems at Sanskriti Solar. Our hybrid systems combine solar panels with battery storage to provide continuous, reliable energy for homes and businesses." />
                <meta property="og:image" content={BannerImage} />
                <meta property="og:url" content="https://sanskritisolar.in/hybrid" />
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hybrid Solar System",
            "description": "Hybrid solar systems combine solar panels with battery storage to provide reliable, continuous energy for homes and businesses. Ideal for reducing reliance on traditional power sources.",
            "brand": {
                "@type": "Organization",
                "name": "Sanskriti Solar"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://sanskritisolar.in/hybrid",
                "priceCurrency": "INR",
                "price": "Contact for pricing",
                "itemCondition": "https://schema.org/NewCondition"
            }
        }
        `}
                </script>
            </Helmet>
            <Banner backgroundImage={BannerImage} title={'Hybrid Solar System'} />

            <Flex direction={{ base: 'column', md: 'row' }} margin="50px" wrap="wrap">
                {/* Side Menu */}
                <SideBar />

                {/* Content */}
                <Box flex="1" p="4" ml={{ base: '0', md: '60px' }}>

                    <Flex align="center" justify="center" mb="8">
                        <Image src={OffGridImage} alt="On-grid solar system diagram" maxWidth="100%" />
                    </Flex>
                    <Heading color="green.400" mb="4"><span style={{ fontWeight: 'bold', color: '#2060c7' }}> Hybrid</span> <span style={{ fontWeight: 'bold' }}>Solar System</span></Heading>
                    <Text fontSize="lg" mb="4">
                        A hybrid solar system combines solar panels with battery storage, enabling users to generate and store electricity independently from the utility grid. During sunny hours, the solar panels produce energy to meet the immediate demand, and any excess is stored in the batteries. When solar production is low, such as during cloudy days or at night, the stored energy is used to supply power. This system ensures continuous electricity availability, offering flexibility, cost savings, and enhanced energy independence. Hybrid solar systems are ideal for residential and commercial use, providing a reliable and sustainable energy solution that reduces reliance on traditional power sources.
                    </Text>

                </Box>
            </Flex >

        </>
    );
}

export default HybridSolar