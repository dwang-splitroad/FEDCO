import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";
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
          Our Staff
        </Heading>
      </Box>

      {/* Main Content */}
      <Container maxW="7xl" py={16}>
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

          {/* Staff Profile Card */}
          <Box flex={1} bg="white" borderRadius="xl" boxShadow="xl" overflow="hidden">
            <Flex direction={{ base: "column", lg: "row" }} minH="500px">
              {/* Image Section */}
              <Box 
                w={{ base: "100%", lg: "280px" }} 
                h={{ base: "220px", lg: "360px" }}
                position="relative"
                bg="gray.100"
              >
                <Image
                  src="/images/michaelladd.jpg"
                  alt="Michael C. Ladd"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  bg="linear-gradient(transparent, rgba(0,0,0,0.6))" 
                  p={6}
                >
                  <Text color="white" fontSize="sm" fontWeight="medium">
                    Director, Fulton Economic Development Corporation
                  </Text>
                </Box>
              </Box>

              {/* Content Section */}
              <Flex direction="column" flex={1} p={10} justify="space-between">
                <Box>
                  <Text fontSize="sm" color="#e07a22" fontWeight="bold" mb={3} letterSpacing="wide">
                    DIRECTOR
                  </Text>
                  <Heading as="h1" fontSize="3xl" color="#232883" fontWeight="bold" mb={8}>
                    MICHAEL C. LADD
                  </Heading>
                  
                  <Flex direction="column" gap={6}>
                    <Box>
                      <Heading as="h3" fontSize="lg" color="#232883" mb={3}>
                        About Michael
                      </Heading>
                      <Text color="gray.700" fontSize="lg" lineHeight="tall">
                        Michael C. Ladd began his tenure as director of the Fulton Development Corporation on February 1, 2023.
                      </Text>
                    </Box>

                    <Box>
                      <Heading as="h3" fontSize="lg" color="#232883" mb={3}>
                        Experience & Background
                      </Heading>
                      <Text color="gray.700" fontSize="lg" lineHeight="tall">
                        His background includes <Text as="span" fontWeight="bold" color="#e07a22">35+ years in nonprofit management</Text> in various positions. His experience is comprehensive, including chambers of commerce, Main Street and Urban Enterprise Zones. He brings with him extensive experience in legislative matters, coupled with an economic development background.
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                {/* Contact Section */}
                <Box mt={8} p={6} bg="gray.50" borderRadius="lg">
                  <Heading as="h3" fontSize="md" color="#232883" mb={3}>
                    Get in Touch
                  </Heading>
                  <Link 
                    href="mailto:director@fultondevelopment.org" 
                    color="#6bbf4e" 
                    fontWeight="medium" 
                    fontSize="lg"
                    _hover={{ color: "#5aa93e", textDecoration: "underline" }}
                    transition="all 0.2s"
                  >
                    director@fultondevelopment.org
                  </Link>
                  <Text color="gray.600" fontSize="sm" mt={2}>
                    Click to send Michael an email
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 