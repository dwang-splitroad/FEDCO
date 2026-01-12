import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

function EducationPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="3xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6} textAlign="center">
          Education
        </Heading>
        <VStack gap={8} align="stretch">
          <Box>
            <Heading as="h2" fontSize="lg" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
              Caston School Corporation
            </Heading>
            <Text color="gray.700" mb={2}>
              Caston School Corporation is a public school district in Fulton County, Indiana. It serves the towns of Grass Creek and Fulton.
            </Text>
            <ChakraLink href="https://www.caston.k12.in.us/" color="#649b42" target="_blank" rel="noopener noreferrer">www.caston.k12.in.us</ChakraLink>
          </Box>
          <Box>
            <Heading as="h2" fontSize="lg" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
              Rochester Community School Corporation
            </Heading>
            <Text color="gray.700" mb={2}>
              Rochester Community School Corporation is a public school district in Fulton County, Indiana. It serves the city of Rochester and surrounding areas.
            </Text>
            <ChakraLink href="https://www.rochesterschools.com/" color="#649b42" target="_blank" rel="noopener noreferrer">www.rochesterschools.com</ChakraLink>
          </Box>
          <Box>
            <Heading as="h2" fontSize="lg" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
              Tippecanoe Valley School Corporation
            </Heading>
            <Text color="gray.700" mb={2}>
              Tippecanoe Valley School Corporation is a public school district that serves parts of Fulton, Kosciusko, and Marshall counties in Indiana.
            </Text>
            <ChakraLink href="https://tippecanoevalleyschools.com/" color="#649b42" target="_blank" rel="noopener noreferrer">www.tippecanoevalleyschools.com</ChakraLink>
          </Box>

          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={2} mt={6}>
            Higher Education
          </Heading>
          <Text color="#273776" fontWeight="bold" mt={0} mb={2} textAlign="center">Within 50 miles of Fulton County</Text>
          <VStack gap={4} align="stretch">
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                Purdue University
              </Heading>
              <Text color="gray.700">
                Purdue University is a public research university in West Lafayette, Indiana, and the flagship campus of the Purdue University system.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                University of Notre Dame
              </Heading>
              <Text color="gray.700">
                University of Notre Dame is a private research university in South Bend, Indiana.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                Indiana University
              </Heading>
              <Text color="gray.700">
                Indiana University is a public research university in Bloomington, Indiana.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                Indiana Tech
              </Heading>
              <Text color="gray.700">
                Indiana Tech is a private university in Fort Wayne, Indiana.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                Bethel University
              </Heading>
              <Text color="gray.700">
                Bethel University is a private Christian university in Mishawaka, Indiana.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={2}>
                Grace College
              </Heading>
              <Text color="gray.700">
                Grace College is a private Christian university in Winona Lake, Indiana.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/education")({
  component: EducationPage,
}); 