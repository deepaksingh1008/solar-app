import React from "react";
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
    Textarea
} from "@chakra-ui/react";
import axios from 'axios';

const Modals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [city, setCity] = React.useState('');
    const [project, setProject] = React.useState('');

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleSubmit = async (e) => {
        console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)
        e.preventDefault();
        if (!name || !email || !phone || !city || !project || !message) {
            alert('All fields are required!');
            return;
        }

        const formData = {
            name,
            email,
            phone,
            city,
            project,
            message
        };

        try {
            const response = await axios.post('https://api.web3forms.com/submit', {
                access_key: process.env.REACT_APP_API_KEY, // Replace with your actual Web3Forms access key
                ...formData
            });

            if (response.data.success) {
                alert('Message sent successfully!');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
                setCity('');
                setProject('');
                setPhone('');
                onClose();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error sending your message. Please try again.');
        }
    };

    //handle call
    const handleCall = () => {
        window.location.href = `tel:+917309375095`;
    };

    return (
        <>
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={{ base: 2, md: 4 }}>
                <Button onClick={onOpen} colorScheme="teal" mr={{ base: 0, md: 4 }} _hover={{ bg: '#165bbd', transform: 'scale(1.05)' }}
                    transition="all 0.2s ease-in-out" p={{ base: 4, md: 6 }} bgColor=''>Contact Us</Button>
                <Button
                    ml={{ base: 0, md: 4 }}
                    ref={finalRef}
                    onClick={handleCall}
                    bgColor='#1c73ff'
                    color='white'
                    p={{ base: 4, md: 6 }}
                    _hover={{ bg: '#165bbd', transform: 'scale(1.05)' }}
                    transition="all 0.2s ease-in-out"
                >
                    Call Me
                </Button>
            </Flex>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Send Us a Message</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input ref={initialRef} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Phone No</FormLabel>
                                <Input placeholder='Phone No' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>City</FormLabel>
                                <Input placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Project (In Kw)</FormLabel>
                                <Input placeholder='Project' value={project} onChange={(e) => setProject(e.target.value)} />
                            </FormControl>
                            <FormControl mt={4} >
                                <FormLabel>Comment</FormLabel>
                                <Textarea placeholder='Comment' value={message} onChange={(e) => setMessage(e.target.value)} />
                            </FormControl>
                            <ModalFooter>
                                <Button colorScheme='blue' type="submit" mr={3}>
                                    Send Message
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Modals;
