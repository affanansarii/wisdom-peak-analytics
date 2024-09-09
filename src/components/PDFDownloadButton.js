import React, { useRef, useState } from "react";
import { Button, Box, HStack, Flex } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import { CloseIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Portfolio from "./Portfolio";
import ProfilePicture from "./ProfilePicture";

const ResumeContent = React.forwardRef((props, ref) => (
    <Box ref={ref} p={4} borderWidth="1px" borderRadius="lg" shadow="md" w="100%" maxW="container.md" mt={4}>

        <Flex>
            <ProfilePicture />
            <Header />

        </Flex>

        <Box>
            <Experience />
        </Box>

        <Box>
            <Education />
        </Box>

        <Box>
            <Skills />
        </Box>

        <Box>
            <Hobbies />
        </Box>

        <Box>
            <Portfolio />
        </Box>

    </Box>
));

function DownloadPDF() {
    const [showResume, setShowResume] = useState(false);
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Resume - Affan Ansari",
        onAfterPrint: () => setShowResume(false),
    });

    const handleShowResume = () => {
        setShowResume(true);
    };

    const handleCloseResume = () => {
        setShowResume(false);
    };

    return (
        <>

            {!showResume && (
                <Button colorScheme="blue" onClick={handleShowResume} leftIcon={<ViewIcon />}>
                    View and Download Resume
                </Button>
            )}

            {showResume && (
                <>
                    <ResumeContent ref={componentRef} />

                    <HStack mt={4} spacing={4}>
                        <Button colorScheme="green" onClick={handlePrint} leftIcon={<DownloadIcon />}>
                            Download Resume as PDF
                        </Button>
                        <Button colorScheme="red" onClick={handleCloseResume} leftIcon={<CloseIcon />}>
                            Close
                        </Button>
                    </HStack>
                </>
            )}
        </>
    );
}

export default DownloadPDF;
