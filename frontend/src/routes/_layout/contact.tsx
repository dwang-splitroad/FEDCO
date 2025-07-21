import { Box, Container, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { state } = useRouter();
  const currentPath = state.location.pathname;

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
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="flex-start">
              {/* Address Block */}
              <Box>
                <Heading as="h2" fontSize="xl" color="#232883" mb={2} fontWeight="bold" letterSpacing="wide">
                  OUR OFFICE
                </Heading>
                <Text color="#232323" fontSize="lg" fontWeight="bold" mb={2}>
                  Fulton Economic Development Corporation
                </Text>
                <Text color="#232323" fontSize="md" mb={1}>
                  822 Main Street
                </Text>
                <Text color="#232323" fontSize="md" mb={1}>
                  Rochester, Indiana, 46975
                </Text>
                <Text color="#232323" fontSize="md" mt={3}>
                  <b>Phone:</b> (574) 223-3326
                </Text>
              </Box>
              {/* Google Map Embed */}
              <Box borderRadius="xl" overflow="hidden" boxShadow="md" minH="300px">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.964964234624!2d-86.2151236846036!3d41.0651237792937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811e1e2e2e2e2e2%3A0x1234567890abcdef!2s822%20Main%20St%2C%20Rochester%2C%20IN%2046975!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </SimpleGrid>
            <Box mt={10}>
              <Heading as="h2" fontSize="2xl" color="#232883" mb={6} fontWeight="bold" letterSpacing="wide">
                CONTACT US
              </Heading>
              <Text color="#232323" fontSize="md" mb={4}>
                We look forward to hearing from you! Please email or call us and a staff person will be in touch with you as soon as possible. Please allow 48 hours for an emailed response.
              </Text>
              <Text color="#232323" fontSize="md">
                For urgent matters or emergencies, please call us <b>(574) 223-3326</b>.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 