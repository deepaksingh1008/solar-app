import React from "react";
import { ChakraProvider, Box, Text, List, ListItem, AspectRatio } from "@chakra-ui/react";
import WebSiteVideo from '../../assets/video/video.mp4'

const VideoPlaceholder = () => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                bg="#FFD3C3"
                borderRadius="md"
                maxW="md"
                mx="auto"
                my={6}
                textAlign="center"
            >
                <div className="video-player">
                    <video controls width="800">
                        <source src={WebSiteVideo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Box textAlign="left">
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                        प्रोजेक्ट के अंतर्गत -
                    </Text>
                    <List spacing={1}>
                        <ListItem>• सोलर पैनल</ListItem>
                        <ListItem>• ऑन ग्रिड इन्वर्टर</ListItem>
                        <ListItem>• स्ट्रक्चर</ListItem>
                        <ListItem>• अर्थिंग और लाइटनिंग अरेस्टर</ListItem>
                        <ListItem>• नेट मीटर का पूरा कार्य</ListItem>
                        <ListItem>• सब्सिडी एप्लीकेशन का कार्य</ListItem>
                    </List>
                </Box>
            </Box>
        </>
    );
};

export default VideoPlaceholder;
