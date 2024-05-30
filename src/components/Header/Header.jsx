import { Box, Flex, Button, IconButton, useDisclosure, useMediaQuery, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import logo from '../../assets/logo2.png'; // Import your logo image
import { Link } from "react-router-dom";
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
                        <Link to='/'>
                            <Button variant="ghost">Home</Button>
                        </Link>
                        <Link to='/about'><Button variant="ghost">About</Button></Link>

                        <Link to='/services'> <Button variant="ghost">Services</Button></Link>
                        <Link to='/contact'> <Button variant="ghost">Contact</Button></Link>
                        <Link to='/blog'> <Button variant="ghost">Blog</Button></Link>
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
                        <Link to='/'>
                            <Button variant="ghost">Home</Button>
                        </Link>
                        <Link to='/about'><Button variant="ghost">About</Button></Link>

                        <Link to='/services'> <Button variant="ghost">Services</Button></Link>
                        <Link to='/contact'> <Button variant="ghost">Contact</Button></Link>
                        <Link to='/blog'> <Button variant="ghost">Blog</Button></Link>
                    </Flex>
                </MotionBox>
            )}
        </Box>
    );
};

export default Header;
