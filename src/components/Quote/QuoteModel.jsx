import React, { useState } from 'react';
import {
    Box, Button, Heading, Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Textarea,
    Select
} from "@chakra-ui/react";
import axios from 'axios';

const QuoteModel = ({ bg }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        projectType: '',
        email: '',
        projectDetails: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, projectType: value });
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
    }
    return (
        <>
            <Button
                colorScheme="whiteAlpha"
                variant="outline"
                mb={{ base: 2, md: 4 }}
                bg={bg}
                p='20px'
                border="3px solid white"
                color="white"
                _hover={{ bg: "green", color: "black", }}
                transition="background-color 0.3s ease, color 0.3s ease"
                onClick={onOpen}
            >
                Request to Quote
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Send Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                            <FormControl id="name" mb={4} isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="phone" mb={4} isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="city" mb={4} isRequired>
                                <FormLabel>City/Town</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter your city or town"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="projectType" mb={4} isRequired>
                                <FormLabel>Project Type</FormLabel>
                                <Select
                                    placeholder="Select project type"
                                    value={formData.projectType}
                                    onChange={handleSelectChange}
                                >
                                    <option value="ongrid">ON GRID SUBSIDY</option>
                                    <option value="offgrid">OFF GRID</option>
                                    <option value="solar-ata-chakki">SOLAR ATA CHAKKI</option>
                                    <option value="commercial">COMMERCIAL</option>
                                    <option value="other">OTHER</option>
                                </Select>
                            </FormControl>

                            <FormControl id="email" mb={4} isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="projectDetails" mb={4} isRequired>
                                <FormLabel>Project Details</FormLabel>
                                <Textarea
                                    placeholder="Project in KW"
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Send
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default QuoteModel;
