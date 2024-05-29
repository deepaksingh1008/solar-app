// src/components/Layout.js
import React from "react";
import { Box } from "@chakra-ui/react";
import SocialMedia from "./SocialMedia";

const Layout = ({ children }) => {
    return (
        <Box>
            {children}
            <SocialMedia /> {/* Add the SocialMedia component */}
        </Box>
    );
};

export default Layout;
