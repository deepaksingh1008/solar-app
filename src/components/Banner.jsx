import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Banner = ({ backgroundImage, title = 'title', subtitle }) => {
    return (
        <Box
            height={{ base: '40vh', md: '60vh' }}
            backgroundImage={`url(${backgroundImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            textAlign="center"
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bg: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
                zIndex: 0,
            }}
        >
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                zIndex={1} // Make sure content is above the overlay
                p={{ base: 4, md: 8 }}
                maxWidth="80%"
                mx="auto"
            >
                <Heading
                    as="h1"
                    size={{ base: 'lg', md: '2xl' }}
                    mb={{ base: 2, md: 4 }}
                    textAlign="center"
                >
                    {title}
                </Heading>
                {subtitle && (
                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        mb={{ base: 4, md: 6 }}
                        textAlign="center"
                    >
                        {subtitle}
                    </Text>
                )}
            </Flex>
        </Box>
    );
};

export default Banner;
