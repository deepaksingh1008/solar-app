import React from 'react';
import { Card, CardBody, Image, Box, Heading } from '@chakra-ui/react';

const ImageCard = ({ image, name }) => {
    return (
        <Box
            maxW='sm'
            overflow='hidden'
            transition='transform 0.3s, z-index 0.3s'
            _hover={{ transform: 'scale(1.2)', zIndex: 1 }}
            m={4}  // Add margin around the card
            h='400px' // Set a fixed height for the card
            position='relative' // Ensure the card is positioned relatively
            cursor='pointer'
        >
            <Card h='100%' position='relative' bg='transparent'> {/* Set background to transparent */}
                <CardBody p={0} h='100%'>
                    <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        objectFit='cover'
                        width='100%'
                        height='100%'
                    />
                    <Box
                        position='absolute'
                        bottom='0'
                        width='100%'
                        bg='rgba(0, 0, 0, 0.6)'
                        color='white'
                        textAlign='center'
                        py={2}
                    >
                        <Heading size='md' bg='transparent'>{name}</Heading> {/* Set background to transparent */}
                        <Heading size='sm' cursor='pointer' bg='transparent'>Learn More..</Heading> {/* Set background to transparent */}
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
}

export default ImageCard;
