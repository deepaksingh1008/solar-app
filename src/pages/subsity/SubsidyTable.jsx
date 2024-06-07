import React from "react";
import {
    ChakraProvider,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";

const data = [
    { capacity: "1 kw", centerGrant: 30000, stateGrant: 15000, totalGrant: 45000, monthlySavings: 1000, paybackTime: "30 माह", additionalIncome: 270000, roofArea: 10 },
    { capacity: "2 kw", centerGrant: 60000, stateGrant: 30000, totalGrant: 90000, monthlySavings: 2000, paybackTime: "30 माह", additionalIncome: 540000, roofArea: 20 },
    { capacity: "3 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 3000, paybackTime: "36 माह", additionalIncome: 792000, roofArea: 30 },
    { capacity: "4 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 4000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 1008000, roofArea: 40 },
    { capacity: "5 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 5000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 1260000, roofArea: 50 },
    { capacity: "6 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 6000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 1512000, roofArea: 60 },
    { capacity: "7 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 7000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 1764000, roofArea: 70 },
    { capacity: "8 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 8000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 2016000, roofArea: 80 },
    { capacity: "9 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 9000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 2268000, roofArea: 90 },
    { capacity: "10 kw", centerGrant: 78000, stateGrant: 30000, totalGrant: 108000, monthlySavings: 10000, paybackTime: "लगभग 4 वर्ष", additionalIncome: 2520000, roofArea: 100 },
];

const SolarSubsidyTable = () => {
    const textAlign = useBreakpointValue({ base: 'left', md: 'center' });
    const fontSize = useBreakpointValue({ base: '2xl', md: '6xl' });

    return (
        <ChakraProvider>
            <Box width="100%" overflowX="auto" p={4}>
                <Text textAlign={textAlign} fontSize={fontSize} fontWeight='bold'>
                    पी एम सूर्यघर योजना के अंतर्गत प्राप्त सब्सिडी
                </Text>
                <TableContainer>
                    <Table variant="striped" colorScheme="teal">
                        <Thead>
                            <Tr>
                                <Th><Text fontWeight="bold" color="black">क्रम संख्या</Text></Th>
                                <Th><Text fontWeight="bold" color="black">सोलर प्लांट</Text></Th>
                                <Th><Text fontWeight="bold" color="black">केंद्र से अनुदान</Text></Th>
                                <Th><Text fontWeight="bold" color="black">राज्य से अनुदान</Text></Th>
                                <Th><Text fontWeight="bold" color="black">कुल अनुदान</Text></Th>
                                <Th><Text fontWeight="bold" color="black">विद्युत बचत से प्रतिमाह आय</Text></Th>
                                <Th><Text fontWeight="bold" color="black">संयंत्र में व्यय धनराशि की वापसी का समय</Text></Th>
                                <Th><Text fontWeight="bold" color="black">संयंत्र का कार्यकाल 25 वर्षों में अतिरिक्त आय</Text></Th>
                                <Th><Text fontWeight="bold" color="black">आवश्यक छत (वर्ग मीटर)</Text></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((row, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{row.capacity}</Td>
                                    <Td>{row.centerGrant}</Td>
                                    <Td>{row.stateGrant}</Td>
                                    <Td>{row.totalGrant}</Td>
                                    <Td>{row.monthlySavings}</Td>
                                    <Td>{row.paybackTime}</Td>
                                    <Td>{row.additionalIncome}</Td>
                                    <Td>{row.roofArea}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </ChakraProvider>
    );
};

export default SolarSubsidyTable;
