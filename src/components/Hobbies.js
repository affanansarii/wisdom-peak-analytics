import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons"; // Optional icon for custom bullet points

function Hobbies() {
    const hobbies = ["Music", "Travelling", "Photography", "Cricket", "Gaming"];

    return (
        <Box mb={6} id="hobbies">
            <Heading as="h2" size="lg" mb={4}>
                Hobbies
            </Heading>

            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign={"left"}>
                            Show Hobbies
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                        <List spacing={3}>
                            {hobbies.map((item, index) => (
                                <ListItem key={index} display="flex" alignItems="center">
                                    {/* Optional custom bullet point using an icon */}
                                    <CheckCircleIcon color="green.500" mr={2} />
                                    <Text fontWeight="bold" fontSize="lg">
                                        {item}
                                    </Text>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default Hobbies;
