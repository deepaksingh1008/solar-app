import React, { useEffect, useState } from 'react';
import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    useBreakpointValue,
    Select
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const OrderForm = () => {
    const formWidth = useBreakpointValue({ base: '100%', md: 'md' });
    const [product, setProduct] = useState([]);
    // State variables for form inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [products, setProducts] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();
    // Function to handle form submission
    const fillProduct = () => {
        if (id === 'pv') {
            setProduct(["540wp",
                "550wp",
                " 565topcon",
                "575topcon"])
        }
        else if (id === 'acdv') {
            setProduct(["1 in 1 out",
                "2 in 2 out"])
        }
        else {
            setProduct(["1 meter",
                " 2 meter",
                "1 meter LA",
                "  2 meter LA"])
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !products || !phone || !address || !quantity) {
            alert('All fields are required!');
            return;
        }

        const formData = {
            name,
            products,
            phone,
            quantity,
            address,

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
                setAddress('');
                setPhone('');
                setProducts('');
                setQuantity('');


            } else {
                alert('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error sending your message. Please try again.');
        }

    };
    useEffect(() => {
        fillProduct();
    }, [])

    return (
        <Box p={5} textAlign="center">
            <MotionBox
                maxW={formWidth}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
                p={6}
                mx="auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    Order form
                </Text>
                <VStack spacing={4}>
                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Name" bg="blue.100" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl id="phone" isRequired>
                        <FormLabel>Phone no.</FormLabel>
                        <Input type="tel" placeholder="Phone no." bg="blue.100" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </FormControl>
                    <FormControl id="products" isRequired>
                        <FormLabel>Products</FormLabel>
                        <Select placeholder="Select option" bg="blue.100" value={products} onChange={(e) => setProducts(e.target.value)}>
                            {
                                product?.map((val, idx) => (
                                    <option key={idx} value={val}>{val}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl id="quantity" isRequired>
                        <FormLabel>Quantity</FormLabel>
                        <Input type="number" placeholder="Quantity" bg="blue.100" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </FormControl>
                    <FormControl id="address" isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input type="text" placeholder="Address" bg="blue.100" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </FormControl>
                    <MotionButton
                        colorScheme="green"
                        size="md"
                        width="100%"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </MotionButton>
                </VStack>
            </MotionBox>
        </Box>
    );
};

export default OrderForm;
