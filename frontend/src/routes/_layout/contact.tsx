import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form"
import { Button, Input, Textarea, Grid, GridItem } from "@chakra-ui/react"

export const Route = createFileRoute("/_layout/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { state } = useRouter();
  const currentPath = state.location.pathname;
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  const onSubmit = async (data: any) => {
    try {
      // Create FormData object for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your actual key
      formData.append("from_name", `${data.firstName} ${data.lastName}`);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", `FEDCO Website Contact: ${data.subject}`);
      formData.append("message", `
New contact form submission from FEDCO website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from the FEDCO website contact form.
Please forward to director@fultondevelopment.org
      `);
      
      // Optional: Add honeypot for spam protection
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      
      if (result.success) {
        reset();
        alert("Thank you for contacting us! We will be in touch soon.");
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Sorry, there was an error sending your message. Please try again or call us directly at 574 223 0701.");
    }
  }

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Hero Section - compact, centered, with shadow */}
      <Box
        bg="linear-gradient(135deg, #232883 0%, #1a1f5c 100%)"
        color="white"
        py={6}
        boxShadow="md"
        borderRadius="xl"
        maxW="900px"
        mx="auto"
        mt={{ base: 6, md: 8 }}
        mb={{ base: 8, md: 10 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
          Contact Us
        </Heading>
      </Box>
      <Container maxW="7xl" py={0}>
        <Flex gap={16} align="flex-start">
          {/* Sidebar Navigation */}
          <Box minW="280px" bg="white" p={8} borderRadius="xl" boxShadow="lg" h="fit-content">
            <Heading as="h2" fontSize="xl" color="#232883" mb={6} fontWeight="bold">
              ABOUT
            </Heading>
            <Flex direction="column" gap={4} fontWeight="bold" fontSize="1.1rem">
              <Link to="/staff">
                <Text color={currentPath === "/staff" ? "#e07a22" : "#6bbf4e"} _hover={{ textDecoration: "underline" }}>STAFF</Text>
              </Link>
              <Link to="/board">
                <Text color={currentPath === "/board" ? "#e07a22" : "#6bbf4e"} _hover={{ textDecoration: "underline" }}>BOARD OF DIRECTORS</Text>
              </Link>
              <Link to="/mission">
                <Text color={currentPath === "/mission" ? "#e07a22" : "#6bbf4e"} _hover={{ textDecoration: "underline" }}>MISSION</Text>
              </Link>
              <Link to="/contact">
                <Text color={currentPath === "/contact" ? "#e07a22" : "#6bbf4e"} _hover={{ textDecoration: "underline" }}>CONTACT</Text>
              </Link>
            </Flex>
          </Box>

          {/* Contact Content */}
          <Box flex={1} bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
            {/* Top: Office Info and Map side by side, 1:1 ratio */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={12}>
              <GridItem>
                <Heading as="h2" fontSize="2xl" color="#232883" mb={6} fontWeight="bold" letterSpacing="wide">
                  OUR OFFICE
                </Heading>
                <Text color="#232323" fontSize="md" mb={2}>
                  <b>Fulton Economic Development Corporation</b><br />
                  822 Main Street<br />
                  Rochester, Indiana, 46975
                </Text>
                <Text color="#232323" fontSize="md" mb={0}>
                  Phone: <b>574 223 0701</b>
                </Text>
              </GridItem>
              <GridItem>
                <Box borderRadius="xl" overflow="hidden" boxShadow="md" minH="300px" height="100%">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.964964234624!2d-86.2151236846036!3d41.0651237792937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811e1e2e2e2e2e2%3A0x1234567890abcdef!2s822%20Main%20St%2C%20Rochester%2C%20IN%2046975!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </GridItem>
            </Grid>
            {/* Bottom: Contact Us and Form side by side */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              <GridItem>
                <Heading as="h2" fontSize="2xl" color="#232883" mb={6} fontWeight="bold" letterSpacing="wide">
                  CONTACT US
                </Heading>
                <Text color="#232323" fontSize="md" mb={4}>
                  We look forward to hearing from you! Please fill out the form and a staff person will be in touch with you as soon as possible. Please allow 48 hours for an emailed response.
                </Text>
                <Text color="#232323" fontSize="md">
                  For urgent matters or emergencies, please call us <b>574 223 0701</b>.
                </Text>
              </GridItem>
              <GridItem>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={4}>
                    <GridItem>
                      <Text fontSize="sm" fontWeight="bold">First Name</Text>
                      <Input {...register("firstName", { required: true })} placeholder="First Name" />
                    </GridItem>
                    <GridItem>
                      <Text fontSize="sm" fontWeight="bold">Last Name</Text>
                      <Input {...register("lastName", { required: true })} placeholder="Last Name" />
                    </GridItem>
                  </Grid>
                  <Text fontSize="sm" fontWeight="bold">Email Address</Text>
                  <Input {...register("email", { required: true })} placeholder="Email Address" mb={4} />
                  <Text fontSize="sm" fontWeight="bold">Phone</Text>
                  <Input {...register("phone", { required: true })} placeholder="Phone" mb={4} />
                  <Text fontSize="sm" fontWeight="bold">Subject</Text>
                  <Input {...register("subject", { required: true })} placeholder="Subject" mb={4} />
                  <Text fontSize="sm" fontWeight="bold">Message</Text>
                  <Textarea {...register("message", { required: true })} placeholder="Message" mb={4} />
                  <Button type="submit" colorScheme="orange" w="40" loading={isSubmitting}>SUBMIT</Button>
                </form>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 