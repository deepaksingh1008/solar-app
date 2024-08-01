
import React from 'react';
import {
    Box,
    Flex,
    VStack,
    Text,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';
import img from '../../assets/subsidy.jpeg'
import SubsidyTable from './SubsidyTable'
import SubsidyPlant from './SubsityPlant'
import VideoSubsidy from './VIdeoSubsity'
import OurQuotation from './OurQuotatio'
import OurProject from './OurProject'
import { Helmet } from 'react-helmet';
const SubsidyDetails = () => {

    const columnDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const titleFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });
    const contentFontSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' });

    return (
        <>
            <Helmet>
                <title>प्रधानमंत्री सूर्योदय योजना - Subsidy Details | Sanskriti Solar</title>
                <meta name="description" content="प्रधानमंत्री सूर्योदय योजना के तहत रूफटॉप सोलर पैनल लगाने से संबंधित विवरण, पात्रता और आवेदन प्रक्रिया की जानकारी। अधिक जानकारी के लिए आधिकारिक वेबसाइट pmsuryaghar.gov.in पर जाएं।" />
                <meta name="keywords" content="प्रधानमंत्री सूर्योदय योजना, Subsidy Details, Rooftop Solar Panels, Solar Subsidy, PM Surya Ghar Yojana, Solar Installation, Renewable Energy" />
                <meta property="og:title" content="प्रधानमंत्री सूर्योदय योजना - Subsidy Details | Sanskriti Solar" />
                <meta property="og:description" content="प्रधानमंत्री सूर्योदय योजना के तहत रूफटॉप सोलर पैनल लगाने से संबंधित विवरण, पात्रता और आवेदन प्रक्रिया की जानकारी। अधिक जानकारी के लिए आधिकारिक वेबसाइट pmsuryaghar.gov.in पर जाएं।" />
                <meta property="og:image" content={img} />
                <meta property="og:url" content="https://sanskritisolar.in/subsidy" />
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "SolarOrganization",
            "name": "Sanskriti Solar",
            "description": "Prime Minister Surya Uday Yojana details including rooftop solar panel installation subsidy, eligibility criteria, and application process.",
            "url": "https://sanskritisolar.in/subsidy",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Varanasi",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "telephone": "+917309375095",
                "email": "sanskritisolar@gmail.com"
            }
        }
        `}
                </script>
            </Helmet>
            <Box>
                <Flex direction={columnDirection} alignItems="center" justifyContent="space-between">
                    {/* Column for the image */}
                    <Box flex={{ base: '1', md: '1', lg: '0.5' }} mr={{ base: 0, md: 4 }}>
                        <Image src={img} alt="प्रधानमंत्री सूर्योदय योजना" borderRadius="lg" />
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
        </>
    );
};

export default SubsidyDetails;
