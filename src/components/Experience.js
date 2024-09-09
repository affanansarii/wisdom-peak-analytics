import { Box, Heading } from "@chakra-ui/react";
import ExperienceModal from "./ExpericenceModal";

function Experience() {
    const jobs = [
        {
            title: "Software Engineer",
            company: "Tech Company",
            dates: "2021 - Present",
            responsibilities: "Developing and maintaining web applications.",
            achievements: "Optimized application performance by 30%.",
        },
        {
            title: "Frontend Developer",
            company: "Web Solutions",
            dates: "2019 - 2021",
            responsibilities: "Building responsive UIs using React.",
            achievements: "Increased client satisfaction by improving UI/UX.",
        },
    ];

    return (
        <Box mb={6} id="experience">
            <Heading as="h2" size="lg" mb={4}>Experience</Heading>
            {jobs.map((job, index) => (
                <Box key={index} mb={4}>
                    <ExperienceModal job={job} />
                </Box>
            ))}
        </Box>
    );
}

export default Experience;
