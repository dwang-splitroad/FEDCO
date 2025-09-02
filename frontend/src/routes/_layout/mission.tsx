import { Box, Container, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/mission")({
  component: MissionPage,
});

function MissionPage() {
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
          Our Mission
        </Heading>
      </Box>
      <Container maxW="7xl" py={10}>
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

          {/* Mission Content */}
          <Box flex="1" ml={{ lg: 8 }} mt={{ base: 8, lg: 0 }}>
            <Box bg="white" borderRadius="xl" boxShadow="xl" p={8}>
              <Heading as="h2" fontSize="2xl" color="#273776" mb={8} fontWeight="bold" letterSpacing="wide">
                Our Mission
              </Heading>
              <Text color="gray.700" fontSize="lg" lineHeight="tall">
                The Mission of Fulton Economic Development Corporation is to conduct such activities as may be necessary or desirable to achieve economic prosperity and growth throughout Fulton County, Indiana.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 