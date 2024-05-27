import { Box, Flex, Button, IconButton, useDisclosure, useMediaQuery, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import logo from '../../assets/logo2.png'; // Import your logo image

const MotionBox = motion(Box);

const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 48em)"); // 48em is the breakpoint for "md"
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as="header" py={4} px={6} bg="teal.500" color="white">
            <Flex justifyContent="space-between" alignItems="center">
                <Image src={logo} alt="Logo" boxSize="50px" style={{ cursor: 'pointer' }} /> {/* Replace the title with the logo image */}
                {isMobile ? (
                    <IconButton
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        icon={<HamburgerIcon />}
                        onClick={onToggle}
                        variant="ghost"
                    />
                ) : (
                    <Flex>
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Services</Button>
                        <Button variant="ghost">Contact</Button>
                        <Button variant="ghost">Blog</Button>
                    </Flex>
                )}
            </Flex>
            {isOpen && isMobile && (
                <MotionBox
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    bg="teal.700"
                    color="white"
                    p={4}
                >
                    <Flex direction="column">
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Services</Button>
                        <Button variant="ghost">Contact</Button>
                        <Button variant="ghost">Blog</Button>
                    </Flex>
                </MotionBox>
            )}
        </Box>
    );
};

export default Header;
