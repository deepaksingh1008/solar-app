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


















// import React from 'react';
// import {
//     Box,
//     Flex,
//     HStack,
//     Link,
//     IconButton,
//     Button,
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     useDisclosure,
//     useColorModeValue,
//     Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { motion } from 'framer-motion';

// const Links = ['Home', 'About', 'Contact', 'Blog'];
// const Services = ['Home', 'Commercial'];

// const NavLink = ({ children }) => (
//     <Link
//         px={2}
//         py={1}
//         rounded={'md'}
//         _hover={{
//             textDecoration: 'none',
//             bg: useColorModeValue('gray.200', 'gray.700'),
//         }}
//         href={'#'}>
//         {children}
//     </Link>
// );

// const Header = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     return (
//         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//             <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//                 <IconButton
//                     size={'md'}
//                     icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//                     aria-label={'Open Menu'}
//                     display={{ md: 'none' }}
//                     onClick={isOpen ? onClose : onOpen}
//                 />
//                 <HStack spacing={8} alignItems={'center'}>
//                     <Box>Logo</Box>
//                     <HStack
//                         as={'nav'}
//                         spacing={4}
//                         display={{ base: 'none', md: 'flex' }}>
//                         {Links.map((link) => (
//                             <NavLink key={link}>{link}</NavLink>
//                         ))}
//                         <Menu>
//                             <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                                 Services
//                             </MenuButton>
//                             <MenuList>
//                                 {Services.map((service) => (
//                                     <MenuItem key={service}>{service}</MenuItem>
//                                 ))}
//                             </MenuList>
//                         </Menu>
//                     </HStack>
//                 </HStack>
//                 <Flex alignItems={'center'}>
//                     <Button
//                         as={motion.button}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         variant={'solid'}
//                         colorScheme={'teal'}
//                         size={'sm'}
//                         mr={4}>
//                         Sign Up
//                     </Button>
//                 </Flex>
//             </Flex>

//             {isOpen ? (
//                 <Box pb={4} display={{ md: 'none' }}>
//                     <Stack as={'nav'} spacing={4}>
//                         {Links.map((link) => (
//                             <NavLink key={link} style={{ textAlign: 'center' }}>{link}</NavLink>
//                         ))}
//                         <Menu>
//                             <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                                 Services
//                             </MenuButton>
//                             <MenuList>
//                                 {Services.map((service) => (
//                                     <MenuItem key={service}>{service}</MenuItem>
//                                 ))}
//                             </MenuList>
//                         </Menu>
//                     </Stack>
//                 </Box>
//             ) : null}
//         </Box>
//     );
// };

// export default Header;









// import React from 'react';
// import { Box, Flex, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { motion } from 'framer-motion';

// const Header = () => {
//     return (
//         <Box as="header" bg="gray.700" color="white" py={4} px={6}>
//             <Flex alignItems="center">
//                 <Heading as="h1" size="md">
//                     <motion.div
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         My Logo
//                     </motion.div>
//                 </Heading>
//                 <Spacer />
//                 <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         <Box mr={4}>Home</Box>
//                     </motion.div>
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                     >
//                         <Box mr={4}>About</Box>
//                     </motion.div>
//                     <Menu>
//                         <motion.div
//                             initial={{ y: -20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.5, delay: 0.6 }}
//                         >
//                             <MenuButton mr={4}>Services</MenuButton>
//                         </motion.div>
//                         <MenuList>
//                             <MenuItem>Home</MenuItem>
//                             <MenuItem>Commercial</MenuItem>
//                         </MenuList>
//                     </Menu>
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.8 }}
//                     >
//                         <Box mr={4}>Contact</Box>
//                     </motion.div>
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 1 }}
//                     >
//                         <Box>Blog</Box>
//                     </motion.div>
//                 </Flex>
//                 <Flex alignItems="center" display={{ base: 'flex', md: 'none' }}>
//                     <Menu>
//                         <MenuButton as={HamburgerIcon} />
//                         <MenuList>
//                             <MenuItem>Home</MenuItem>
//                             <MenuItem>About</MenuItem>
//                             <Menu>
//                                 <MenuButton>Services</MenuButton>
//                                 <MenuList>
//                                     <MenuItem>Home</MenuItem>
//                                     <MenuItem>Commercial</MenuItem>
//                                 </MenuList>
//                             </Menu>
//                             <MenuItem>Contact</MenuItem>
//                             <MenuItem>Blog</MenuItem>
//                         </MenuList>
//                     </Menu>
//                 </Flex>
//             </Flex>
//         </Box>
//     );
// };

// export default Header;