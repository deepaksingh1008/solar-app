import React from 'react';
import {
    Box,
    Image,
    Text,
    VStack,
    Button,
    useBreakpointValue,
    SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import img from '../../assets/c1.jpg';
import lighting from '../../assets/lighting.jpg';
import advc from '../../assets/adbc.jpg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const MotionBox = motion(Box);

const ProductCard = ({ src, title, description, details, navto }) => {
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const imageSize = useBreakpointValue({ base: '150px', md: '200px', lg: '250px' });
    const navigate = useNavigate();

    return (
        <MotionBox
            maxW={{ base: "sm", md: "calc(16rem + 100px)" }} // Adjust width for different screen sizes
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            mx="auto"
            mb={6}
        >
            <Box justifyContent="center" mt={4}>
                <Image src={src} alt={title} boxSize={imageSize} mx="auto" />
            </Box>
            <VStack spacing={3} mt={4} px={4}>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                    {title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
                <Text fontSize={{ base: "md", md: "lg" }}>{details}</Text>
                <Button
                    size={buttonSize}
                    colorScheme="green"
                    onClick={() => navigate(`/order/${navto}`)}
                    mb={4}
                    width="80%"
                >
                    Order
                </Button>
            </VStack>
        </MotionBox>
    );
};

const ProductComponent = () => {
    return (
        <>
            <Helmet>
                <title>Product List | Sanskriti Solar</title>
                <meta name="description" content="Explore our range of solar products including Solar PV Panels, ACDB/DCDB, and Earthing/Lightning Arresters. Find top brands like Loom Solar, Adani Solar, Waaree, and Renewsys at competitive prices." />
                <meta name="keywords" content="Solar PV Panels, ACDB, DCDB, Earthing, Lightning Arresters, Loom Solar, Adani Solar, Waaree, Renewsys" />
                <meta property="og:title" content="Product List | Sanskriti Solar" />
                <meta property="og:description" content="Explore our range of solar products including Solar PV Panels, ACDB/DCDB, and Earthing/Lightning Arresters. Find top brands like Loom Solar, Adani Solar, Waaree, and Renewsys at competitive prices." />
                <meta property="og:image" content={img} />
                <meta property="og:url" content="https://sanskritisolar.in/product" />
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Solar Products",
            "description": "Explore our range of solar products including Solar PV Panels, ACDB/DCDB, and Earthing/Lightning Arresters. Find top brands like Loom Solar, Adani Solar, Waaree, and Renewsys at competitive prices.",
            "brand": {
                "@type": "Organization",
                "name": "Sanskriti Solar"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://sanskritisolar.in/product",
                "priceCurrency": "INR",
                "itemCondition": "https://schema.org/NewCondition"
            }
        }
        `}
                </script>
            </Helmet>
            <Box p={5} textAlign="center">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                    <ProductCard
                        src={img}
                        title="SOLAR PV PANEL"
                        description="Loom Solar, Adani Solar, Waaree, Renewsys"
                        details="540wp, 550wp, 565 topcon, 575 topcon"
                        navto='pv'
                    />
                    <ProductCard
                        src={advc}
                        title="ACDB/DCDB"
                        description="AC Distribution Box and DC Distribution Box"
                        details="1 in 1 out, 2 in 2 out"
                        navto='acdv'
                    />
                    <ProductCard
                        src={lighting}
                        title="EARTHING / LIGHTENING ARRESTER"
                        description="Protective devices for electrical systems"
                        details="1 meter, 2 meter, 1 meter LA, 2 meter LA"
                        navto='earthing'
                    />
                </SimpleGrid>
            </Box>
        </>
    );
};

export default ProductComponent;
