import { EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

function Contact() {

    return (

        <Box mb={6} id="contact">

            <Heading as="h2" size="lg" mb={4}>Contact</Heading>

            <Text mb={2}>Email: <EmailIcon /> <span style={{ color: "teal", cursor: "pointer" }}>affanansarii7860@gmail.com</span></Text>
            <Text mb={2}>Phone: <PhoneIcon /> <span style={{ color: "teal", cursor: "pointer" }}>+91 9021157687</span></Text>
            <Text>LinkedIn: <Link href="https://www.linkedin.com/in/affan-ansari-702110237/">Profile <LinkIcon /></Link></Text>

        </Box>

    )

}

export default Contact;