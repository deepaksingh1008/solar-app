import { Box, Flex, Image } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/s2.jpeg'
import image2 from '../../assets/s3.jpeg'
import image3 from '../../assets/s4.jpeg'

const ImageCarousel = () => {
    return (
        <Box w='100%' h='400px' mx="auto" mt="8">
            <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                stopOnHover={false}
                emulateTouch
                swipeable
            >
                <Flex justify="center" w="100%">
                    <Image src={image1} alt="Slide 1" w="100%" h='400px' />
                </Flex>
                <Flex justify="center">
                    <Image src={image2} alt="Slide 2" w="100%" h='400px' />
                </Flex>
                <Flex justify="center">
                    <Image src={image3} alt="Slide 3" w="100%" h='400px' />
                </Flex>
            </Carousel>
        </Box>
    );
};

export default ImageCarousel;
