import React from "react";
import { Box, Flex, Text, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link as Li } from "react-router-dom";
import styled from "@emotion/styled";

// StyledBox component with animation
const StyledBox = styled(Box)`
  border-top: 2px solid #ffffff; /* Change to border-top */
  position: relative;
  overflow: hidden;
  background-color: #38a169; /* Change background color to green */
  &:before {
    content: "";
    position: absolute;
    top: -2px; /* Change to top */
    left: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      #ffffff,
      rgba(255, 255, 255, 0)
    );
    animation: flow 2s linear infinite;
  }
  @keyframes flow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Footer = () => {
    return (
        <StyledBox
            as="footer"
            py={10}
            px={6}
            color="white"
            width="100%"
        >
            <Flex
                justifyContent="space-between"
                flexDirection={["column", "column", "row"]}
                alignItems="center"
            >
                {/* Address Column */}
                <VStack alignItems="flex-start" mb={[4, 4, 0]} ml={[0, 0, 20]}>
                    {/* Add ml={[0, 0, 4]} for left margin */}
                    <Text fontSize="lg" fontWeight="bold">
                        Address
                    </Text>
                    <Text>Vishwanathpuram Colony, Awaleshpur, Chitaipur, Varanasi</Text>
                    <Text>Varanasi, Uttar Pradesh, 221106</Text>
                    <Text>Mobile No - +917309375095</Text>
                </VStack>

                {/* Social Media Column */}
                <VStack alignItems="center" mb={[4, 4, 0]}>
                    <Text fontSize="lg" fontWeight="bold">
                        Follow Us
                    </Text>
                    <Flex className="icons">
                        <IconButton
                            as={Link}
                            href="https://www.facebook.com/profile.php?id=61559821108879"
                            aria-label="Facebook"
                            icon={<FaFacebook />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#1877F2" }}
                            isRound
                        />

                        <IconButton
                            as={Link}
                            href="https://www.instagram.com/sanskritisolar?igsh=aXdscmVqenplNTdm"
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#E1306C" }}
                            isRound
                        />

                        {/* WhatsApp Icon */}
                        <IconButton
                            as={Link}
                            href="https://wa.me/+917309375095"
                            aria-label="WhatsApp"
                            icon={<FaWhatsapp />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#25d366" }}
                            isRound
                        />
                    </Flex>
                </VStack>

                {/* Information Column */}
                <VStack alignItems="flex-start" mr={[0, 0, 20]}>
                    {/* Add mr={[0, 0, 4]} for right margin */}
                    <Text fontSize="lg" fontWeight="bold">
                        Information
                    </Text>
                    <Li to='/'>Home</Li>
                    <Li to='/about'>About</Li>
                    <Li to='/contact'>Contact Us</Li>
                </VStack>
            </Flex>
        </StyledBox>
    );
};

export default Footer;
