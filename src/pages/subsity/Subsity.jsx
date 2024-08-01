import React from 'react';
import img from '../../assets/subsidy.jpeg';
import {
    Box,
    VStack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ResponsiveCard = () => {
    const navigate = useNavigate();
    const cardWidth = useBreakpointValue({ base: '100%', md: '80%', lg: '60%' });
    const cardHeight = useBreakpointValue({ base: '200px', md: '400px', lg: '600px' });
    const titleFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

    return (
        <Box textAlign="center" py={10}>
            <VStack spacing={4} alignItems="center">
                <Text fontSize={titleFontSize} fontWeight="bold">
                    SUBSIDY
                </Text>
            </VStack>
            <Box
                width={cardWidth}
                height={cardHeight}
                bgImage={`url(${img})`}
                bgSize="contain"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="lg"
                boxShadow="lg"
                mx="auto"
                mt={8}
                cursor="pointer"
                onClick={() => navigate(`/subsidy`)}
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
            >
                {/* Optional content inside the card */}
            </Box>
        </Box>
    );
};

export default ResponsiveCard;
