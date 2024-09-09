import { Button, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Flex
            justify={["center"]}
            align="center"
            mb={4}
            as="nav"
            bg="white"
            backdropFilter={scrolled ? "blur(10px)" : "none"}
            color="white"
            py={[2, 4]}
            px={[4, 8]}
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            width="96%"
            margin="auto"
            cursor="pointer"
            flexWrap={["wrap", "wrap", "nowrap"]}
        >
            {/* Mobile Hamburger Icon */}
            <IconButton
                display={["flex", "none"]}
                icon={<HamburgerIcon />}
                onClick={onOpen}
                variant="outline"
                aria-label="Open Menu"
                color="black"
            />

            {/* Nav buttons for larger screens */}
            <Flex
                display={["none", "flex"]}
                justify="center"
                align="center"
                gap={[2, 4]} // Adjust gap between buttons for mobile and desktop
            >
                <Button bg="none" color="black" as={Link} to="header" smooth>Header</Button>
                <Button bg="none" color="black" as={Link} to="experience" smooth>Experience</Button>
                <Button bg="none" color="black" as={Link} to="education" smooth>Education</Button>
                <Button bg="none" color="black" as={Link} to="skills" smooth>Skills</Button>
                <Button bg="none" color="black" as={Link} to="hobbies" smooth>Hobbies</Button>
                <Button bg="none" color="black" as={Link} to="contact" smooth>Contact</Button>
            </Flex>

            {/* Drawer for mobile screens */}
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex flexDirection="column" align="center" mt={10}>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="header" smooth>Header</Button>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="experience" smooth>Experience</Button>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="education" smooth>Education</Button>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="skills" smooth>Skills</Button>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="hobbies" smooth>Hobbies</Button>
                            <Button onClick={onClose} bg="none" color="black" as={Link} to="contact" smooth>Contact</Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
