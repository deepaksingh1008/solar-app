import { Box, Flex, Text, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            as="footer"
            py={10}
            px={6}
            bg="#383630" // Flipkart-like blue color
            color="white"
            width="100%"
        >
            <Flex justifyContent="space-between" flexDirection={['column', 'column', 'row']} alignItems="center">
                {/* Address Column */}
                <VStack alignItems="flex-start" mb={[4, 4, 0]}>
                    <Text fontSize="lg" fontWeight="bold">Address</Text>
                    <Text>Varanasi,Uttar Pradesh</Text>
                    <Text>City, State, 221001</Text>
                    <Text>Mobile No - 7309375095</Text>
                </VStack>

                {/* Social Media Column */}
                <VStack alignItems="center" mb={[4, 4, 0]}>
                    <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
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
                <VStack alignItems="flex-start">
                    <Text fontSize="lg" fontWeight="bold">Information</Text>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Contact Us</Link>
                </VStack>
            </Flex>
        </Box>
    );
};

export default Footer;
