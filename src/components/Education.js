import { Box, Heading, Text } from "@chakra-ui/react";

function Education() {

    const education = [

        {
            cources: "Full Stack Developer",
            institutes: "Masai School",
            dates: "March 2023 - Jan 2024"
        },
        {
            cources: "Computer Engineering, Diploma",
            institutes: "Anjuman-I-Islam Abdul Razzak Kalsekar Polytechnic, Panvel",
            dates: "Jun 2018 - Nov 2021"
        }

    ]

    return (

        <Box mb={6} id="education">

            <Heading as="h2" size="lg" mb={4}>Education</Heading>

            {education.map((item, index) => (

                <Box key={index} mt={4}>

                    <Text fontWeight="bold">{item.cources}</Text>
                    <Text>{item.institutes}</Text>
                    <Text>{item.dates}</Text>

                </Box>

            ))}

        </Box>

    )

}

export default Education;