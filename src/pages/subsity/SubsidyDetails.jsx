
import React from 'react';
import {
    Box,
    Flex,
    VStack,
    Text,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';
import img from '../../assets/subsidy1.png'
import SubsidyTable from './SubsidyTable'
import SubsidyPlant from './SubsityPlant'
import VideoSubsidy from './VIdeoSubsity'
import OurQuotation from './OurQuotatio'
import OurProject from './OurProject'
const SubsidyDetails = () => {

    const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const titleFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });
    const contentFontSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' });

    return (
        <Box>
            <Flex direction={columnDirection} alignItems="center" justifyContent="space-between">
                {/* Column for the image */}
                <Box flex={{ base: '1', md: '1', lg: '0.5' }} mr={{ base: 0, md: 4 }}>
                    <Image src={img} alt="Image" borderRadius="lg" />
                </Box>
                {/* Column for details */}
                <Box flex={{ base: '1', md: '1', lg: '0.5' }}>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize={titleFontSize} fontWeight="bold">
                            प्रधानमंत्री सूर्योदय योजना
                        </Text>
                        <Text fontSize={contentFontSize} fontWeight="bold">
                            इस योजना का लक्ष्य 1 करोड़ लोगों के घरों में रूफटॉप सोलर पैनल लगा कर उनके बिजली बिल पर होने वाले खर्चे को कम या बिल्कुल ज़ीरो कर देना है।
                        </Text>
                        <Text fontSize={contentFontSize} fontWeight="bold">
                            PM Surya Ghar Yojana से संबंधित विस्तृत जानकारी योजना की आधिकारिक वेबसाइट pmsuryaghar.gov.in पर उपलब्ध करवाई गई है। पात्र लाभार्थी उम्मीदवार पीएम सूर्य घर योजना 2024 के लिए ऑनलाइन आवेदन कर सकते हैं।
                        </Text>
                    </VStack>
                </Box>
            </Flex>
            <SubsidyTable />
            <SubsidyPlant />
            <VideoSubsidy />
            <OurQuotation />
            <OurProject />
        </Box>
    );
};

export default SubsidyDetails;
