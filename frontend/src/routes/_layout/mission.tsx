import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
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
          Our Mission
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

          {/* Mission Content */}
          <Box flex={1} bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
            <Heading as="h2" fontSize="2xl" color="#232883" mb={8} fontWeight="bold" letterSpacing="wide">
              OUR MISSION
            </Heading>
            <Text color="#232323" fontSize="lg" lineHeight="tall">
              The Mission of Fulton Economic Development Corporation is to conduct such activities as may be necessary or desirable to achieve economic prosperity and growth throughout Fulton County, Indiana.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 