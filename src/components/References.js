import React from "react";
import {
    Box,
    Text,
    VStack,
    Heading,
    Avatar,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    HStack,
} from "@chakra-ui/react";

const references = [
    {
        name: "Jane Smith",
        title: "CTO, XYZ Corporation",
        testimonial:
            "John is an outstanding developer with excellent attention to detail. His ability to work under pressure and deliver high-quality code on time is unparalleled.",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYR0TAT4xCZgg-7cvDs2gH02sMGHAIbFDYQ&s", // Replace with actual image URL
    },
    {
        name: "Michael Johnson",
        title: "Lead Engineer, ABC Solutions",
        testimonial:
            "John's leadership and technical skills were instrumental in delivering several key projects at ABC Solutions. He is a true asset to any team.",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0de08JM29gvft_vW_lPP0Vc8lVsnV3tZFw&s",
    },
    {
        name: "Emily Davis",
        title: "Project Manager, DEF Technologies",
        testimonial:
            "John consistently exceeded expectations while working on multiple complex projects. His problem-solving skills and collaborative approach are top-notch.",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVPH1oGKb6PdOccSxswBsqYA5jJJkiBdWaA&s",
    },
];

const References = () => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md" w="100%" maxW="container.md" mt={4} margin="auto">
            <Heading as="h2" size="lg" textAlign="center" mb={6}>
                References
            </Heading>

            {/* Accordion for references */}
            <Accordion allowMultiple>
                {references.map((reference, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <HStack flex="1" textAlign="left" spacing={4}>
                                    <Avatar size="lg" name={reference.name} src={reference.avatar} />
                                    <Box>
                                        <Text fontWeight="bold">{reference.name}</Text>
                                        <Text>{reference.title}</Text>
                                    </Box>
                                </HStack>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>
                            <Text fontStyle="italic">"{reference.testimonial}"</Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default References;
