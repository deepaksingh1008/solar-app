// WhyChooseShivaSakthi.js

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
    <Box p={10} bg="white">
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={4}>
        Why Choose Sanskriti
      </Text>
      <Text fontSize="lg" textAlign="center" mb={10}>
        We strive to make a positive impact on the environment while helping
        <Text>
          our clients reduce their carbon footprint and energy costs.
        </Text>
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FiFileText} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Best Quality</Text>
          <Text>Get the best products in market.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaMoneyBillWave} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Low Installation Cost</Text>
          <Text>Unbeatable price from Installers.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={BsLightningFill} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Value</Text>
          <Text>We Provide Best Value for Money.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaSmile} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Convenient</Text>
          <Text>Hassle free experience.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaClock} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Timing Saving</Text>
          <Text>Single point of contact.</Text>
        </Flex>
        <Flex direction="column" align="center" textAlign="center">
          <Icon as={FaWrench} boxSize={10} mb={4} />
          <Text fontSize="xl" fontWeight="bold">Transparent</Text>
          <Text>Detailed Project Report.</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default WhyChoose;
