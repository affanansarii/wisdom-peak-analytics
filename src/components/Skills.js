import { Box, Heading, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";

function Skills() {

    const skills = [
        { name: "JavaScript", rating: "Intermediate" },
        { name: "React", rating: "Intermediate" },
        { name: "Node.js", rating: "Intermediate" },
        { name: "HTML", rating: "Advanced" },
        { name: "CSS", rating: "Advanced" },
        { name: "Responsive Web Design", rating: "Advanced" }
    ];

    return (
        <Box mb={6} id="skills">
            <Heading as="h2" size="lg" mb={4}>
                Skills
            </Heading>
            <SimpleGrid columns={[2, 3]} spacing={4}>
                {skills.map((item, index) => (
                    <Tooltip
                        key={index}
                        label={`Proficiency: ${item.rating}`}
                        fontSize="md"
                    >
                        <Text
                            borderWidth={1}
                            borderRadius="md"
                            p={2}
                            textAlign="center"
                            transition="all 0.3s ease-in-out" // smooth transition for hover effects
                            _hover={{
                                bg: "blue.100",        // change background color on hover
                                fontWeight: "bold",    // make text bolder on hover
                                color: "blue.700",     // change text color on hover
                                cursor: "pointer"      // change cursor to pointer
                            }}
                        >
                            {item.name}
                        </Text>
                    </Tooltip>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Skills;
