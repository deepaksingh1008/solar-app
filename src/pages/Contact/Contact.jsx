import React, { useState } from 'react';
import { Box, VStack, Text, Input, Button, FormControl, FormLabel, Textarea, SimpleGrid, GridItem, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import call from '../../assets/svg/call.png';
import gmail from '../../assets/svg/email.png';
import location from '../../assets/svg/loaction.png';
import Banner from '../../components/Banner';
import img1 from '../../assets/contact_us.jpg'
import { Helmet } from 'react-helmet';
import axios from 'axios'
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        try {
            const response = await axios.post('https://api.web3forms.com/submit', {
                access_key: process.env.REACT_APP_API_KEY, // Replace with your actual Web3Forms access key
                ...formData
            });

            if (response.data.success) {
                alert('Message sent successfully!');
                // Reset form fields
                setFormData({})
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error sending your message. Please try again.');
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Sanskriti Solar</title>
                <meta name="description" content="Get in touch with Sanskriti Solar for your solar power needs. Contact us via phone, email, or visit us at our location in Varanasi. Fill out the form to request a callback or more information." />
                <meta name="keywords" content="contact Sanskriti Solar, solar power Varanasi, solar panel contact form, solar installation contact" />
                <meta property="og:title" content="Contact Us | Sanskriti Solar" />
                <meta property="og:description" content="Get in touch with Sanskriti Solar for your solar power needs. Contact us via phone, email, or visit us at our location in Varanasi. Fill out the form to request a callback or more information." />
                <meta property="og:image" content={img1} />
                <meta property="og:url" content="https://sanskritisolar.in/contact" />
            </Helmet>
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
                    <Text fontSize="md" color="gray.500">Got a project on your mind? Let's discuss the details.</Text>
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
                        <Text>Vishwanathpuram Colony, Awaleshpur, Chitaipur, Varanasi</Text>
                        <Text>Varanasi, Uttar Pradesh, 221106</Text>
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
                        <Text>+917309375095</Text>
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
                        <Text> sanskritisolar@gmail.com</Text>
                    </MotionBox>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
                    <GridItem>
                        <Box textAlign="center" mb={4}>
                            <Text fontSize="2xl" fontWeight="bold">Location</Text>
                        </Box>
                        <Box>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3605.221573814952!2d82.99632312540517!3d25.363889474928857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717593569649!5m2!1sen!2sin"
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
                                <form onSubmit={handleSubmit}>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Name</FormLabel>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Email</FormLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Mobile</FormLabel>
                                        <Input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Your Message (optional)</FormLabel>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>
                                    <Button colorScheme="green" type="submit">Submit</Button>
                                </form>
                            </MotionBox>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </MotionVStack>
        </>
    );
};

export default ContactComponent;
