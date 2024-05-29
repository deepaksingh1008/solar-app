import { Box, Flex, Text, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
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
                    <Text>Varanasi, Uttar Pradesh</Text>
                    <Text>City, State, 221001</Text>
                    <Text>Mobile No - 7309375095</Text>
                </VStack>

                {/* Social Media Column */}
                <VStack alignItems="center" mb={[4, 4, 0]}>
                    <Text fontSize="lg" fontWeight="bold">
                        Follow Us
                    </Text>
                    <Flex className="icons">
                        <IconButton
                            as={Link}
                            href="#"
                            aria-label="Facebook"
                            icon={<FaFacebook />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#1877F2" }}
                            isRound
                        />
                        <IconButton
                            as={Link}
                            href="#"
                            aria-label="Twitter"
                            icon={<FaTwitter />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#1DA1F2" }}
                            isRound
                        />
                        <IconButton
                            as={Link}
                            href="#"
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "#E1306C" }}
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
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Contact Us</Link>
                </VStack>
            </Flex>
        </StyledBox>
    );
};

export default Footer;
