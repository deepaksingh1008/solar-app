import React from "react";
import {
    ChakraProvider,
    Box,
    Image,
    Text,
    Button,
    VStack,
    Center,
    Link
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import image from '../../assets/s1.jpeg';
import Model from '../../components/Modal'
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const SolarPromotion = () => {
    return (
        <>
            <Center p={4}>
                <VStack spacing={4}>
                    <MotionBox
                        width={{ base: "100%", md: "100%" }}  // Adjust the width instead of boxSize
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href={image} isExternal>
                            <Image src={image} alt="Solar Promotion" height="100%" width="100%" objectFit="cover" />
                        </Link>
                    </MotionBox>
                    <Text fontSize="2xl" fontWeight="bold">
                        सब्सिडी पर प्लांट लगवाने के लिए संपर्क करे
                    </Text>
                    <Model />
                </VStack>
            </Center>
        </>
    );
};

export default SolarPromotion;
