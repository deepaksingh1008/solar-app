import React from 'react';
import {
    Box,
    Flex,
    Button,
    IconButton,
    useDisclosure,
    useMediaQuery,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/logo2.png'; // Import your logo image
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 48em)"); // 48em is the breakpoint for "md"
    const { isOpen, onToggle } = useDisclosure();

    const sharedButtonStyles = {
        fontWeight: "bold",
        fontSize: { base: "sm", md: "md" },
    };

    return (
        <Box as="header" py={4} px={6} bg="teal.500" color="white">
            <Flex justifyContent="space-between" alignItems="center">
                <Link to="/">
                    <Image src={logo} alt="Logo" boxSize="50px" style={{ cursor: 'pointer' }} /> {/* Replace the title with the logo image */}
                </Link>
                {isMobile ? (
                    <AnimatePresence>
                        <MotionIconButton
                            key={isOpen ? "close" : "menu"}
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            onClick={onToggle}
                            variant="ghost"
                            initial={{ rotate: 0, opacity: 0 }}
                            animate={{ rotate: isOpen ? 180 : 0, opacity: 1 }}
                            exit={{ rotate: isOpen ? 0 : -180, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                ) : (
                    <Flex>
                        <Link to="/">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                Home
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                About
                            </Button>
                        </Link>
                        <Menu>
                            <MenuButton
                                as={Button}
                                variant="ghost"
                                _hover={{ bg: "teal.600" }}
                                mb={2}
                                {...sharedButtonStyles}
                            >
                                <span className="font">Services</span>
                            </MenuButton>
                            <MenuList bg="teal.500" border="none" boxShadow="lg" borderRadius="md" py={1}>
                                <Link to="/commercial-services">
                                    <MenuItem
                                        _hover={{ bg: "teal.600" }}
                                        color="black"
                                        borderRadius="md"
                                        px={4}
                                        py={2}
                                        {...sharedButtonStyles}
                                    >
                                        Solar for Commercial
                                    </MenuItem>
                                </Link>
                                <Link to="/home-services">
                                    <MenuItem
                                        _hover={{ bg: "teal.600" }}
                                        color="Black"
                                        borderRadius="md"
                                        px={4}
                                        py={2}
                                        {...sharedButtonStyles}
                                    >
                                        Solar for Homes
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                        <Link to="/contact">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                Contact
                            </Button>
                        </Link>
                        <Link to="/product">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                Product
                            </Button>
                        </Link>
                        <Link to="/blog">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                Blog
                            </Button>
                        </Link>
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
                        <Link to="/">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles} w="100%">
                                Home
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles} w="100%">
                                About
                            </Button>
                        </Link>
                        <Menu>
                            <MenuButton
                                as={Button}
                                variant="ghost"
                                _hover={{ bg: "teal.600" }}
                                {...sharedButtonStyles}
                                w="100%"

                            >
                                <span className='font'>Services</span>
                            </MenuButton>
                            <MenuList border="none" boxShadow="lg" borderRadius="md" py={1}>
                                <Link to="/commercial-services">
                                    <MenuItem
                                        _hover={{ bg: "teal.600" }}
                                        color="black"
                                        borderRadius="md"
                                        px={4}
                                        py={2}
                                        {...sharedButtonStyles}
                                    >
                                        Solar for Commercial
                                    </MenuItem>
                                </Link>
                                <Link to="/home-services">
                                    <MenuItem
                                        _hover={{ bg: "teal.600" }}
                                        color="black"
                                        borderRadius="md"
                                        px={4}
                                        py={2}
                                        {...sharedButtonStyles}
                                    >
                                        Solar for Homes
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                        <Link to="/contact">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles} w="100%">
                                Contact
                            </Button>
                        </Link>
                        <Link to="/product">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles} w="100%">
                                Product
                            </Button>
                        </Link>
                        <Link to="/blog">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles} w="100%">
                                Blog
                            </Button>
                        </Link>
                    </Flex>
                </MotionBox>
            )}
        </Box>
    );
};

export default Header;
