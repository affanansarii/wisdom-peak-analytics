import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Heading, Text } from "@chakra-ui/react";

function Timeline() {
    return (
        <Box width={["100%", "50%"]} margin="auto">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3182CE' }}
                    contentArrowStyle={{ borderRight: '7px solid #3182CE' }}
                    date="2020 - Present"
                    iconStyle={{ background: '#3182CE', color: '#fff' }}
                >
                    <Heading size="sm" style={{ color: "#2D3748" }}>Senior Developer at XYZ Company</Heading>
                    <Text style={{ color: "#fff" }}>
                        Working as a full-stack developer, specializing in React and Node.js.
                    </Text>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2019"
                    iconStyle={{ background: '#2D3748', color: '#fff' }}
                >
                    <Heading size="sm">Junior Developer at ABC Corp</Heading>
                    <Text>
                        Developed and maintained web applications with JavaScript.
                    </Text>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    );
}

export default Timeline;
