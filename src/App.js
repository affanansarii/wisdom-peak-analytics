import './App.css';
import { Box, Flex, VStack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import PDFDownloadButton from './components/PDFDownloadButton';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import 'animate.css';
import References from './components/References';

function App() {

  return (

    <Box bg="white.100" p={4} textAlign="center">

      <Box m={4} width="98%" mb={10}>
        <Navbar />
      </Box>

      <VStack spacing={8}>

        <Flex mt={10} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%" flexDirection={{ base: "column", md: "row" }} display={{ base: "row", md: "flex" }}>
          <Box className="animate__animated animate__fadeInLeft">
            <ProfilePicture />
          </Box>
          <Box className="animate__animated animate__fadeInDown">
            <Header />
          </Box>
        </Flex>

        <Box bg="gray.100" className="animate__animated animate__fadeInRight" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Timeline />
        </Box>

        <Box className="animate__animated animate__fadeInLeft" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Experience />
        </Box>

        <Box className="animate__animated animate__fadeInRight" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Education />
        </Box>

        <Box className="animate__animated animate__fadeInLeft" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Skills />
        </Box>

        <Box className="animate__animated animate__fadeInDown" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Portfolio />
        </Box>

        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Hobbies />
        </Box>

        <Box width="98%">
          <References />
        </Box>

        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <Contact />
        </Box>

        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <ContactForm />
        </Box>

        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <PDFDownloadButton />
        </Box>

        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} p={8} borderRadius="10px" width="98%">
          <LocationMap />
        </Box>

      </VStack>

    </Box>

  );

}

export default App;
