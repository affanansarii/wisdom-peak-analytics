import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, Textarea, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import sendMessage from "../assets/sendMessage.png"

function ContactForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const toast = useToast();

    const onSubmit = async (data) => {

        const res = await fetch('https://formspree.io/f/mkgwepkz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            toast({
                title: "Message sent successfully!",
                description: "We've received your message. Thank you!",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            reset();
        } else {
            toast({
                title: "Failed to sent message!",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }

    }

    return (

        <Box mb={6}>

            <Heading as='h2' size="lg" mb={4}>Contact Me</Heading>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={errors.name} mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input {...register("name", { required: "Name is required." })} placeholder="Your Name" />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email} mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input {...register("email", { required: "Email is required." })} placeholder="Your Email" />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.message} mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea {...register("message", { required: "Message is required." })} placeholder="Your Message" />
                    <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="blue">Send Message <Image src={sendMessage} width='20px' ml={2} /></Button>

            </form>

        </Box>

    )

}

export default ContactForm;