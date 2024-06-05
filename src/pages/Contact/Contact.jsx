import React from 'react';
import { Box, VStack, Text, Input, Button, FormControl, FormLabel, Textarea, SimpleGrid, GridItem, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import call from '../../assets/svg/call.png';
import gmail from '../../assets/svg/email.png';
import location from '../../assets/svg/loaction.png';
import Banner from '../../components/Banner';
import img1 from '../../assets/contact_us.jpg'
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const ContactComponent = () => {
    return (

        <>
            <Banner backgroundImage={img1} title={'Contact Us'} />
            <MotionVStack
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                spacing={10}
                p={10}
            >
                <Box textAlign="center">
                    <Text fontSize="4xl" fontWeight="bold">Let's Talk</Text>
                    <Text fontSize="md" color="gray.500">Got a project on your mind? Let's discuss about the details.</Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                    <MotionBox
                        p={6}
                        bg="white"
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        w="full"
                        maxW="md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Box display="flex" alignItems="center" mb={4}>
                            <Box
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                                p={1}

                            >
                                <MotionImage
                                    src={location}
                                    alt="Location"
                                    borderRadius="full"
                                    boxSize="40px"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </Box>
                            <Text fontSize="xl" fontWeight="bold" ml={4}>Location</Text>
                        </Box>
                        <Text>No. 4, Gowthamaman Street,</Text>
                        <Text>Varanasi</Text>
                        <Text>Varanasi</Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        bg="white"
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        w="full"
                        maxW="md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Box display="flex" alignItems="center" mb={4}>
                            <Box
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                                p={1}
                            >
                                <MotionImage
                                    src={call}
                                    alt="Mobile"
                                    borderRadius="full"
                                    boxSize="40px"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </Box>
                            <Text fontSize="xl" fontWeight="bold" ml={4}>Mobile</Text>
                        </Box>
                        <Text>+91 1324 4453 0046</Text>
                        <Text>044 4232 5620 0000</Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        bg="white"
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        w="full"
                        maxW="md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Box display="flex" alignItems="center" mb={4}>
                            <Box
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                                p={1}
                            >
                                <MotionImage
                                    src={gmail}
                                    alt="E-Mail"
                                    borderRadius="full"
                                    boxSize="40px"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </Box>
                            <Text fontSize="xl" fontWeight="bold" ml={4}>E-Mail</Text>
                        </Box>
                        <Text>deepak@outlook.com</Text>
                    </MotionBox>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                    <GridItem>
                        <Box textAlign="center" mb={4}>
                            <Text fontSize="2xl" fontWeight="bold">Location</Text>
                        </Box>
                        <Box>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14368.85620747191!2d82.97391405720545!3d25.31410483823788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31dc6b7f5b71%3A0xf0c9d03e77d84d2b!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1595156190380!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box w="full" maxW="md" mx="auto">
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <form>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Email</FormLabel>
                                        <Input type="email" />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Mobile</FormLabel>
                                        <Input type="tel" />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Message (optional)</FormLabel>
                                        <Textarea />
                                    </FormControl>
                                    <Button colorScheme="green" type="submit">Submit</Button>
                                </form>
                            </MotionBox>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </MotionVStack></>
    );
};

export default ContactComponent;
