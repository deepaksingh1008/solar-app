import React from 'react';
import img from '../../assets/subsidy.png';
import {
    Box,
    VStack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ResponsiveCard = () => {
    const navigate = useNavigate()
    const cardWidth = useBreakpointValue({ base: '100%', md: '80%' });
    const cardPaddingBottom = useBreakpointValue({ base: '200px', md: '400px', lg: '600px' });
    const titleFontSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' });

    return (
        <Box>
            <VStack spacing={4} alignItems="center">
                <Text fontSize={titleFontSize} fontWeight="bold">
                    SUBSIDY
                </Text>
            </VStack>
            <Box
                maxW={cardWidth}
                bgImage={`url(${img})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                borderRadius="lg"
                boxShadow="lg"
                p={6}
                mx="auto"
                mt={8}
                cursor='pointer'
                // Set padding bottom responsively
                pb={cardPaddingBottom}
                onClick={() => navigate(`/subsidy`)}
            >
                <VStack spacing={4} alignItems="center">
                    <Text fontSize={titleFontSize} fontWeight="bold" color='orange'>
                        प्रधानमंत्री सूर्योदय योजना
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
};

export default ResponsiveCard;
