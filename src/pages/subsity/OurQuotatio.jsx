import React from 'react';
import { ChakraProvider, Box, Text, Grid, Image, Link } from '@chakra-ui/react';
import q_image1 from '../../assets/qimage/q_image.jpeg';
import q_image2 from '../../assets/qimage/q_image2.jpeg';

const SolarQuotation = () => {
    return (
        <ChakraProvider>
            <Box textAlign="center" p={{ base: 2, md: 4 }}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                    Our quotation for 3kw and 4kw
                </Text>
            </Box>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} p={{ base: 2, md: 4 }}>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Link href={q_image2} isExternal>
                        <Image src={q_image2} alt="3KW System" />
                    </Link>
                </Box>

                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Link href={q_image1} isExternal>
                        <Image src={q_image1} alt="4KW System" />
                    </Link>
                </Box>
            </Grid>

            <Box textAlign="center" p={{ base: 2, md: 4 }}>
                <Text fontSize={{ base: 'lg', md: 'xl' }}>रजिस्ट्रेशन करे :</Text>
                <Link href="https://www.pmsuryaghar.gov.in/consumerLogin" color="blue.500" isExternal>
                    https://www.pmsuryaghar.gov.in/consumerLogin
                </Link>
            </Box>
        </ChakraProvider>
    );
};

export default SolarQuotation;
