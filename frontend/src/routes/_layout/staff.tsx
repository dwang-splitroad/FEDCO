import { Box, Container, Heading, Text, Image, Flex, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/staff")({
  component: StaffPage,
});

function StaffPage() {
  const { state } = useRouter();
  const currentPath = state.location.pathname;

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Hero Section - compact, centered, with shadow */}
      <Box
        h="200px"
        bg="linear-gradient(135deg, #273776 0%, #1a1f5c 100%)"
        position="relative"
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center" color="white">
          Our Staff
        </Heading>
      </Box>
      <Container maxW="7xl" py={10}>
        <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Text fontSize="sm" color="#ffc107" fontWeight="bold" mb={3} letterSpacing="wide">
                HELPING FULTON COUNTY GROW
              </Text>
              <Heading as="h1" fontSize="3xl" color="#273776" fontWeight="bold" mb={8}>
                Meet Our Staff
              </Heading>
              <VStack spacing={8} align="stretch">
                <Box>
                  <Heading as="h3" fontSize="lg" color="#273776" mb={3}>
                    Tiffany R. Phillips - Executive Director
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    Tiffany R. Phillips is the Executive Director of the Fulton Development Corporation. She brings a wealth of experience in community development, economic growth, and strategic planning. Tiffany is dedicated to fostering a vibrant and thriving community in Fulton County.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h3" fontSize="lg" color="#273776" mb={3}>
                    Michael Ladd - Director of Special Projects
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    His background includes <Text as="span" fontWeight="bold" color="#ffc107">35+ years in nonprofit management</Text> in various positions. His experience is comprehensive, including chambers of commerce, Main Street and Urban Enterprise Zones. He brings with him extensive experience in organizational development, downtown revitalization, economic development, fundraising and grant writing. Contact Mike if you have a special project that needs a kick start!
                  </Text>
                </Box>
                <Box>
                  <Heading as="h3" fontSize="md" color="#273776" mb={3}>
                    Amy Beechy - Director of Entreprenurial Programs
                  </Heading>
                  <Text color="gray.700">
                    With a background in small business ownership, marketing and community development, Amy provides expertise in entrepreneurial programs. Contact Amy for information on the Business Plan Course or for small business assistance. She can be reached at (574) 835-0348 or by email.
                  </Text>
                  <Text color="gray.700" mt={2}>
                    Email: <ChakraLink href="mailto:amy@projectmattersllc.com" color="#649b42" fontWeight="bold">amy@projectmattersllc.com</ChakraLink>
                  </Text>
                </Box>
              </VStack>
            </Box>
            {/* Contact Section */}
            <Box mt={8} p={6} bg="gray.50" borderRadius="lg">
              <Heading as="h3" fontSize="md" color="#232883" mb={3}>
                Get in Touch
              </Heading>
              <Link 
                href="mailto:director@fultondevelopment.org"
              >
                <Text
                  color="#6bbf4e"
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ color: "#5aa93e", textDecoration: "underline" }}
                  transition="all 0.2s"
                >
                  director@fultondevelopment.org
                </Text>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
} 