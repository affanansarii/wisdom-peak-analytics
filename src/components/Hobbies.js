import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, List, ListItem } from "@chakra-ui/react";

function Hobbies() {

    const hobbies = ["Music", "Travelling", "Photography", "Cricket", "Gaming"];

    return (

        <Box mb={6} id="hobbies">

            <Heading as="h2" size="lg" mb={4}>Hobbies</Heading>

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
                                <ListItem key={index}>{item}</ListItem>
                            ))}

                        </List>

                    </AccordionPanel>

                </AccordionItem>

            </Accordion>

        </Box>

    )

}

export default Hobbies;