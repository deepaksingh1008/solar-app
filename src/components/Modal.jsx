
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
import axios from 'axios'

const Modals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message
        };
        //console.log('->', formData)
        try {
            const response = await axios.post('https://api.web3forms.com/submit', {
                access_key: 'a00a7efc-b31d-487c-b6f2-1e1a68edd962', // Replace with your actual Web3Forms access key
                ...formData
            });

            if (response.data.success) {
                alert('Message sent successfully!');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
                onClose();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error sending your message. Please try again.');
        }

    }
    //handle call
    const handleCall = () => {
        window.location.href = `tel:+919305175469`;
    };

    return (
        <>
            <Button onClick={onOpen} colorScheme="teal" mr={4}>Contact as</Button>
            <Button ml={4} ref={finalRef} onClick={handleCall}>
                CallMe
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Message</FormLabel>
                            <Textarea type="text" placeholder='Email' required value={message} onChange={(e) => setMessage(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Send Message
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default Modals