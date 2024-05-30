// src/components/Card.js
import React, { useEffect, useRef, useState } from 'react';
import { Card as ChakraCard, CardBody, Image, Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Card = ({ image, name, nav }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <MotionBox
            ref={cardRef}
            maxW='sm'
            overflow='hidden'
            transition='transform 0.3s, z-index 0.3s'
            whileHover={{ scale: 1.2, zIndex: 1 }}
            m={4}  // Add margin around the card
            h='400px' // Set a fixed height for the card
            position='relative' // Ensure the card is positioned relatively
            cursor='pointer'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
        >
            <Link to={`${nav}`}>
                <ChakraCard h='100%' position='relative' bg='transparent' >
                    <CardBody p={0} h='100%'>
                        <Image
                            src={image}
                            alt={name}
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
                            <Heading size='md' bg='transparent'>{name}</Heading>
                            <Heading size='sm' cursor='pointer' bg='transparent'>Learn More..</Heading>
                        </Box>
                    </CardBody>
                </ChakraCard>
            </Link>
        </MotionBox>
    );
}

export default Card;
