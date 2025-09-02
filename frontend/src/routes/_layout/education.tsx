import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

const lifeInFultonLinks = [
  { label: "Quick Facts", to: "/quick-facts" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Education", to: "/education" },
  { label: "Utilities", to: "/utilities" },
  { label: "Things to Do", href: "https://fultoncountyindiana.com/" },
];

function Sidebar({ current }: { current: string }) {
  return (
    <VStack align="flex-start" gap={2} minW="220px" mt={2} mb={8}>
      <Text fontWeight="bold" fontSize="sm" color="#273776" letterSpacing="wider" mb={2}>
        LIFE IN FULTON COUNTY
      </Text>
      {lifeInFultonLinks.map((link) =>
        link.to ? (
          <Link to={link.to} key={link.to} style={{ width: "100%" }}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="wider"
              color={link.label === current ? "#ffc107" : "#649b42"}
              _hover={{ color: link.label === current ? "#ffc107" : "#273776" }}
              textTransform="uppercase"
              transition="color 0.2s"
              py={0.5}
            >
              {link.label}
            </Text>
          </Link>
        ) : (
          <ChakraLink
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%" }}
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="wider"
              color="#649b42"
              _hover={{ color: "#273776" }}
              textTransform="uppercase"
              transition="color 0.2s"
              py={0.5}
            >
              {link.label}
            </Text>
          </ChakraLink>
        )
      )}
    </VStack>
  );
}

function EducationPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current="Education" />
          </Box>
          {/* Main Content */}
          <Box flex="1">
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6}>
              Education
            </Heading>
            <VStack spacing={8} align="stretch">
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
            </VStack>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6} mt={10}>
              Higher Education
            </Heading>
            <Text color="#273776" fontWeight="bold" mt={4} mb={2}>Within 50 miles of Fulton County</Text>
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  Purdue University
                </Heading>
                <Text color="gray.700">
                  Purdue University is a public research university in West Lafayette, Indiana, and the flagship campus of the Purdue University system.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  University of Notre Dame
                </Heading>
                <Text color="gray.700">
                  University of Notre Dame is a private research university in South Bend, Indiana.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  Indiana University
                </Heading>
                <Text color="gray.700">
                  Indiana University is a public research university in Bloomington, Indiana.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  Indiana Tech
                </Heading>
                <Text color="gray.700">
                  Indiana Tech is a private university in Fort Wayne, Indiana.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  Bethel University
                </Heading>
                <Text color="gray.700">
                  Bethel University is a private Christian university in Mishawaka, Indiana.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" fontSize="md" color="#ffc107" fontWeight="bold" mb={1} mt={4}>
                  Grace College
                </Heading>
                <Text color="gray.700">
                  Grace College is a private Christian university in Winona Lake, Indiana.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/education")({
  component: EducationPage,
}); 