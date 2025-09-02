import { Box, Container, Heading, Text, Image, Flex, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/staff")({
  component: StaffPage,
});

function StaffPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="7xl" py={10}>
        <Box
          bg="#273776"
          color="white"
          py={{ base: 8, md: 12 }}
          boxShadow="md"
          borderRadius="xl"
          mb={{ base: 8, md: 10 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
            Our Staff
          </Heading>
        </Box>
        <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
          <VStack gap={8} align="stretch">
            <Box>
              <Text fontSize="sm" color="#ffc107" fontWeight="bold" mb={3} letterSpacing="wide">
                HELPING FULTON COUNTY GROW
              </Text>
              <Heading as="h1" fontSize="3xl" color="#273776" fontWeight="bold" mb={8}>
                Meet Our Staff
              </Heading>
              {/* Michael C. Ladd - Only visible profile */}
              <Flex direction={{ base: "column", md: "row" }} align="flex-start" gap={6}>
                <Box flexShrink={0} w={{ base: "100%", md: "280px" }}>
                  <Image
                    src="/images/michaelladd.jpg"
                    alt="Michael C. Ladd"
                    w="100%"
                    h={{ base: "220px", md: "360px" }}
                    objectFit="cover"
                    borderRadius="lg"
                    boxShadow="md"
                  />
                </Box>
                <Box flex={1}>
                  <Heading as="h3" fontSize="lg" color="#273776" mb={3}>
                    MICHAEL C. LADD
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    His background includes <Text as="span" fontWeight="bold" color="#ffc107">35+ years in nonprofit management</Text> in various positions. His experience is comprehensive, including chambers of commerce, Main Street and Urban Enterprise Zones. He brings with him extensive experience in organizational development, downtown revitalization, economic development, fundraising and grant writing. Contact Mike if you have a special project that needs a kick start!
                  </Text>
                </Box>
              </Flex>
            </Box>
            {/* Contact Section */}
            <Box mt={8} p={6} bg="gray.50" borderRadius="lg">
              <Heading as="h3" fontSize="md" color="#273776" mb={3}>
                Get in Touch
              </Heading>
              <ChakraLink href="mailto:director@fultondevelopment.org">
                <Text
                  color="#649b42"
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ color: "#5a8a3a", textDecoration: "underline" }}
                  transition="all 0.2s"
                >
                  director@fultondevelopment.org
                </Text>
              </ChakraLink>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
} 