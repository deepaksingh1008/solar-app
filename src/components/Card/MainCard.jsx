import React from 'react'

import { Box, Heading, Flex, Image, Text, VStack } from '@chakra-ui/react';
import Card from './Card';
import OffGrid from '../../assets/off_grid.jpg'
import OnGrid from '../../assets/on_grid.jpg'
const MainCard = () => {


    return (
        <Box py={8} px={4}>
            <Heading as="h1" size="xl" textAlign="center" mb={8}>Our Products</Heading>
            <Flex justify="center" wrap="wrap">
                <Card image={OffGrid} name={'On Grid Solar System'} nav={'/on-grid-solar'} />
                <Card image={OnGrid} name={'Off Grid Solar System'} nav={'/off-grid-solar'} />
                <Card image={'https://5.imimg.com/data5/SELLER/Default/2023/7/324130530/AK/GE/DR/77094546/solar-power-plant-installation.jpeg'} name={'Hybrid Solar System'} nav={'/hybrid'} />

            </Flex>
        </Box>
    );
}

export default MainCard