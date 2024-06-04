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
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import logo from '../../assets/logo2.png'; // Import your logo image
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

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
                    <IconButton
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        icon={<HamburgerIcon />}
                        onClick={onToggle}
                        variant="ghost"
                    />
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
                                <Link to="/services/commercial">
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
                                <Link to="/services/homes">
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

                                {...sharedButtonStyles}
                                textAlign='start'
                            >
                                <span className="font">Services</span>
                            </MenuButton>
                            <MenuList border="none" boxShadow="lg" borderRadius="md" py={1}>
                                <Link to="/services/commercial">
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
                                <Link to="/services/homes">
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
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
                                Contact
                            </Button>
                        </Link>
                        <Link to="/blog">
                            <Button variant="ghost" _hover={{ bg: "teal.600" }} {...sharedButtonStyles}>
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
