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
            <Heading as="h2" size="lg" mb={4}>Skills</Heading>
            <SimpleGrid columns={[2, 3]} spacing={4}>
                {skills.map((item, index) => (
                    <Tooltip key={index} label={`Proficiency: ${item.rating}`} fontSize="md">
                        <Text
                            borderWidth={1}
                            borderRadius="md"
                            p={2}
                            _hover={{ bg: "gray.200", cursor: "pointer" }}
                        >
                            {item.name}
                        </Text>
                    </Tooltip>
                ))}
            </SimpleGrid>
        </Box>

    )

}

export default Skills;