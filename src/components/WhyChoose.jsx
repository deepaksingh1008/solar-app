import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaSmile, FaClock, FaMoneyBillWave, FaWrench } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { BsLightningFill } from 'react-icons/bs';

const WhyChoose = () => {
  return (
    <Box p={{ base: 5, md: 10 }} bg="white">
      <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight="600" textAlign="center" mb={{ base: 2, md: 4 }}>
        Why Choose Sanskriti Solar
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" mb={{ base: 5, md: 10 }}>
        We strive to make a positive impact on the environment while helping
        our clients reduce their carbon footprint and energy costs.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, md: 10 }}>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FiFileText} boxSize={{ base: 8, md: 10 }} mb={4} color="teal.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Best Quality</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>Get the best products in market.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaMoneyBillWave} boxSize={{ base: 8, md: 10 }} mb={4} color="green.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Low Installation Cost</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>Unbeatable price from Installers.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={BsLightningFill} boxSize={{ base: 8, md: 10 }} mb={4} color="yellow.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Value</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>We Provide Best Value for Money.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaSmile} boxSize={{ base: 8, md: 10 }} mb={4} color="orange.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Convenient</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>Hassle free experience.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaClock} boxSize={{ base: 8, md: 10 }} mb={4} color="blue.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Timing Saving</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>Single point of contact.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaWrench} boxSize={{ base: 8, md: 10 }} mb={4} color="red.500" />
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Transparent</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>Detailed Project Report.</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default WhyChoose;
