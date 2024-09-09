import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Portfolio() {

    const projects = [

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8fAnM8gCKuDHXwumio7Lpelh4qhIhlJ2iw&s",
            description: "Project 1: A application totally based on handling UI with React uses LazyLoading."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSi_dFRECfDdSLD_Vl7ndw__1bm3miMdBOCQ&s",
            description: "Project 2: A quiz application built with React and Express."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUCVv_BiXbg8J6e9gAhRbtCNkWPJ00my7hw&s",
            description: "Project 3: E-commerce website built with HTML, CSS and JavaScript"
        }

    ]

    return (

        <Box mb={6}>

            <Heading as="h2" size="lg" mb={4}>Portfolio</Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={4}>

                {projects.map((item, index) => (

                    <Box key={index} borderWidth={1} borderRadius="md" overflow="hidden" p={4}>

                        <Image src={item.image} alt="Project" />
                        <Text mt={2}>{item.description}</Text>

                    </Box>

                ))}

            </SimpleGrid>

        </Box>

    )

}

export default Portfolio;