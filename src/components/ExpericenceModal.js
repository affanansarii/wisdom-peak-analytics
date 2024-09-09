import { CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

function ExperienceModal({ job }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} variant="link" colorScheme="teal" leftIcon={<ViewIcon />}>{job.title}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{job.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text><strong>Company:</strong> {job.company}</Text>
                        <Text><strong>Duration:</strong> {job.dates}</Text>
                        <Text mt={4}><strong>Responsibilities:</strong></Text>
                        <Text>{job.responsibilities}</Text>
                        <Text mt={4}><strong>Achievements:</strong></Text>
                        <Text>{job.achievements}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} colorScheme="red" leftIcon={<CloseIcon />}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ExperienceModal;
