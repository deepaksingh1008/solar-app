import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <MotionBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bg="gray.100"
            p={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <VStack spacing={6} textAlign="center">
                <MotionHeading
                    as="h1"
                    size="2xl"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </MotionHeading>
                <MotionText
                    fontSize="xl"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Oops! The page you are looking for does not exist.
                </MotionText>
                <MotionButton
                    colorScheme="teal"
                    size="lg"
                    onClick={handleGoHome}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Go Home
                </MotionButton>
            </VStack>
        </MotionBox>
    );
};

export default NotFoundPage;
