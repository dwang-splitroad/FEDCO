import { Box, Container, Heading, Text, Flex, VStack, SimpleGrid } from "@chakra-ui/react";
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
      {/* Hero Section */}
      <Box
        h="200px"
        bg="linear-gradient(135deg, #273776 0%, #1a1f5c 100%)"
        position="relative"
      >
        <Container maxW="7xl" h="100%">
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center" color="white">
            Contact Us
          </Heading>
        </Container>
      </Box>
      <Container maxW="7xl" py={0}>
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 16 }} align="flex-start">
          {/* Sidebar Navigation */}
          <Box 
            minW={{ lg: "280px" }} 
            w={{ base: "100%", lg: "280px" }}
            bg="white" 
            p={8} 
            borderRadius="xl" 
            boxShadow="lg" 
            h="fit-content"
            mb={{ base: 6, lg: 0 }}
          >
            <Heading as="h2" fontSize="xl" color="#273776" mb={6} fontWeight="bold">
              ABOUT
            </Heading>
            <VStack align="stretch" spacing={4} fontWeight="bold" fontSize="1.1rem">
              <Link to="/staff">
                <Text color={currentPath === "/staff" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Staff</Text>
              </Link>
              <Link to="/board">
                <Text color={currentPath === "/board" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Board of Directors</Text>
              </Link>
              <Link to="/mission">
                <Text color={currentPath === "/mission" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Mission</Text>
              </Link>
              <Link to="/contact">
                <Text color={currentPath === "/contact" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Contact</Text>
              </Link>
            </VStack>
          </Box>

          {/* Contact Content */}
          <Box flex="1" ml={{ lg: 8 }} mt={{ base: 8, lg: 0 }}>
            <Box bg="white" borderRadius="xl" boxShadow="xl" p={8}>
              <Heading as="h2" fontSize="xl" color="#273776" mb={6} fontWeight="bold">
                About Our Team
              </Heading>
              <VStack align="stretch" spacing={4}>
                <Link to="/staff">
                  <Text color={currentPath === "/staff" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Staff</Text>
                </Link>
                <Link to="/board">
                  <Text color={currentPath === "/board" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Board of Directors</Text>
                </Link>
                <Link to="/mission">
                  <Text color={currentPath === "/mission" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Mission</Text>
                </Link>
                <Link to="/contact">
                  <Text color={currentPath === "/contact" ? "#ffc107" : "#649b42"} _hover={{ textDecoration: "underline" }}>Contact</Text>
                </Link>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
      {/* Main Content */}
      <Container maxW="7xl" py={10}>
        <VStack spacing={12} align="stretch">
          <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
            <Heading as="h2" fontSize="2xl" color="#273776" mb={6} fontWeight="bold" letterSpacing="wide">
              Contact Information
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <GridItem>
                <Heading as="h2" fontSize="2xl" color="#273776" mb={6} fontWeight="bold" letterSpacing="wide">
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.0000000000005!2d-86.2169444!3d41.0486111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816c210d1b2bf2d%3A0x8e8b2b5f7e7f7e9b!2sFulton%20Economic%20Development%20Corporation!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps Location for FEDCO"
                  ></iframe>
                </Box>
              </GridItem>
            </SimpleGrid>
          </Box>
          <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
            <Heading as="h2" fontSize="2xl" color="#273776" mb={6} fontWeight="bold" letterSpacing="wide">
              Send Us a Message
            </Heading>
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
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 