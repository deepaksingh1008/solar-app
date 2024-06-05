import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <Box
            position="fixed"
            bottom="4"
            left="4"
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="whiteAlpha.900"
            padding="2"
            borderRadius="md"
            boxShadow="md"
            zIndex="10"
        >
            <IconButton
                as="a"
                href="https://www.facebook.com"
                aria-label="Facebook"
                icon={<FaFacebook />}
                mb={2}
                colorScheme="facebook"
            />
            <IconButton
                as="a"
                href="https://www.twitter.com"
                aria-label="Twitter"
                icon={<FaTwitter />}
                mb={2}
                colorScheme="twitter"
            />
            <IconButton
                as="a"
                href="https://www.instagram.com"
                aria-label="Instagram"
                icon={<FaInstagram />}
                mb={2}
                colorScheme="pink"
            />
            <IconButton
                as="a"
                href="https://wa.me/+919305175469"
                aria-label="WhatsApp"
                icon={<FaWhatsapp />}
                mb={2}
                colorScheme="green"
            />
            <IconButton
                as="a"
                href="tel:+919305175469" // Replace with your actual phone number
                aria-label="Call"
                icon={<FaPhone />}
                colorScheme="teal"
            />
        </Box>
    );
};

export default SocialMedia;
