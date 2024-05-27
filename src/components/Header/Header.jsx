import { Box, Flex, Text, Button, IconButton, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 48em)"); // 48em is the breakpoint for "md"
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as="header" py={4} px={6} bg="teal.500" color="white">
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                    My App Title
                </Text>
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
                        <Button variant="ghost">Contact</Button>
                    </Flex>
                </MotionBox>
            )}
        </Box>
    );
};

export default Header;
