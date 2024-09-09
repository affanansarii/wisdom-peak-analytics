import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {

    return (

        <Box textAlign="center" m={8} id="header">

            <Heading as="h1" size={["lg", "xl", "2xl"]} mb={2}>Affan Ansari</Heading>

            <Text fontSize={["md", "lg", "xl"]} mb={2}>Full Stack Developer</Text>
            <Text fontSize={["sm", "md"]}>Email: <EmailIcon /> <span style={{ color: "teal", cursor: "pointer" }}>affanansarii7860@gmail.com</span> | Phone: <PhoneIcon /> <span style={{ color: "teal", cursor: "pointer" }}>+91 9021157687</span></Text>

        </Box>

    )

}

export default Header;