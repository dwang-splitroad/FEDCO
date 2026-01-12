import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/mission")({
  component: MissionPage,
});

function MissionPage() {
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
            Our Mission
          </Heading>
        </Box>
        <Container maxW="3xl" p={0}>
          <Box p={{ base: 6, md: 12 }} maxW="3xl" mx="auto">
            <Heading as="h2" fontSize="2xl" color="#273776" mb={8} fontWeight="bold" letterSpacing="wide">
              Our Mission
            </Heading>
            <Text color="gray.700" fontSize="lg" lineHeight="tall">
              The Mission of Fulton Economic Development Corporation is to conduct such activities as may be necessary or desirable to achieve economic prosperity and growth throughout Fulton County, Indiana.
            </Text>
          </Box>
        </Container>
      </Container>
    </Box>
  );
} 