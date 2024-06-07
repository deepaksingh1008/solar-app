import React from 'react';
import { ChakraProvider, Box, Text, Grid, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import p_image1 from '../../assets/project/p1_image.png';
import p_image2 from '../../assets/project/p2_image.png';
import p_image3 from '../../assets/project/p3_image.png';

const MotionBox = motion(Box);

const ImageSection = () => {
    return (
        <>
            <MotionBox
                textAlign="center"
                p={4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
                    हमारे द्वारा किए गए कार्य
                </Text>
            </MotionBox>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} p={4}>
                <MotionBox
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href={p_image1} isExternal>
                        <Image src={p_image1} alt="Image 1" />
                    </Link>
                </MotionBox>

                <MotionBox
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link href={p_image2} isExternal>
                        <Image src={p_image2} alt="Image 2" />
                    </Link>
                </MotionBox>

                <MotionBox
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href={p_image3} isExternal>
                        <Image src={p_image3} alt="Image 3" />
                    </Link>
                </MotionBox>
            </Grid>
        </>
    );
};

export default ImageSection;
