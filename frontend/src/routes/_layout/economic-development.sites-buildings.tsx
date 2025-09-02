import { Box, Heading, Text, VStack, Link as ChakraLink, Container, SimpleGrid } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/economic-development/sites-buildings")({
  component: SitesBuildingsPage,
});

function SitesBuildingsPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" p={8} borderRadius="xl" boxShadow="xl">
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6}>
          Sites & Buildings
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Available Properties
            </Heading>
            <Text color="gray.700" mb={4}>
              Fulton County has a number of sites and buildings available for development. We are committed to helping you find the perfect location for your business.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box>
                <Text fontWeight="bold">Search Indiana Economic Development Corporation (IEDC) Database:</Text>
                <ChakraLink href="https://www.iedc.in.gov/relocation-expansion/site-selection/" color="#649b42" isExternal _hover={{ textDecoration: "underline", color: "#273776" }}>
                  Indiana Site & Building Database
                </ChakraLink>
              </Box>
              <Box>
                <Heading as="h3" fontSize="lg" color="#273776" fontWeight="bold" mb={3}>
                  For more information, contact:
                </Heading>
                <Text fontWeight="bold">Tiffany Phillips, Executive Director</Text>
                <ChakraLink href="mailto:tiffany@fultondevelopment.org" color="#649b42" _hover={{ textDecoration: "underline", color: "#273776" }}>tiffany@fultondevelopment.org</ChakraLink>
                <br />
                <ChakraLink href="tel:574-223-3326" color="#649b42" _hover={{ textDecoration: "underline", color: "#273776" }}>(574) 223-3326</ChakraLink>
              </Box>
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Major Employers
            </Heading>
            <Text color="gray.700" mb={4}>
              Fulton County is home to a number of major employers in a variety of industries, including manufacturing, healthcare, and education.
            </Text>
            <ChakraLink as={Link} to="/top-employers" color="#649b42" fontWeight="bold" _hover={{ textDecoration: "underline", color: "#273776" }}>
              View Top Employers in Fulton County
            </ChakraLink>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 