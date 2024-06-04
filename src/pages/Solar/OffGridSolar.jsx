import React from 'react'
import BannerImage from '../../assets/banner.jpg';
import { Box, Button, VStack, Text, Heading, Flex, Image, useMediaQuery, ChakraProvider } from '@chakra-ui/react';
import SideBar from './SideBar';
import OffGridImage from '../../assets/off-grid.jpg'
import Banner from '../../components/Banner';
import SocialMedia from '../../components/SocialMedia';
const OffGridSolar = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Banner backgroundImage={BannerImage} title={'Off Grid Solar System'} />

            <Flex direction={{ base: 'column', md: 'row' }} margin="50px" wrap="wrap">
                {/* Side Menu */}
                <SideBar />

                {/* Content */}
                <Box flex="1" p="4" ml={{ base: '0', md: '60px' }}>

                    <Flex align="center" justify="center" mb="8">
                        <Image src={OffGridImage} alt="On-grid solar system diagram" maxWidth="100%" />
                    </Flex>
                    <Heading color="green.400" mb="4"><span style={{ fontWeight: 'bold', color: '#2060c7' }}> Off Grid</span> <span style={{ fontWeight: 'bold' }}>Solar System</span></Heading>
                    <Text fontSize="lg" mb="4">
                        We are engaged in offering a wide range of Off Grid Solar Power System to our clients. Our range of all products is widely appreciated by our clients. The off-grid solar system is an independent system, which is not connected to the utility’s power grid. This kind of system can be developed by connecting a battery with the solar system. When the solar system will have sunny hours, the solar system itself supplies the demand of the consumer but during cloudy days when the sun is not shining fully and the solar system is not able to generate the electricity according to the demand, the consumer can withdraw the excess required electricity from storage device like a battery. The grid in this system is not at all connected and responsible for supplying electricity to the consumer. Therefore, in off-grid systems, if a consumer is not having sufficient storage device, the consumer may have less or no access to the electricity at night.
                    </Text>


                </Box>
            </Flex>

        </>
    );
}

export default OffGridSolar