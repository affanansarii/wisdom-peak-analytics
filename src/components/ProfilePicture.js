import { Box, Image } from "@chakra-ui/react";
import profile from "../assets/profile.jpg";

function ProfilePicture() {

    return (

        <Box textAlign="center" mb={6}>

            <Image borderRadius="full" boxSize={["100px", "120px", "150px"]} src={profile} alt="Profile Picture" mx="auto" />

        </Box>

    )

}

export default ProfilePicture;