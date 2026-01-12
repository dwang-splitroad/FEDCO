import { Box, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/board")({
  component: BoardPage,
});

function BoardPage() {
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
            Board of Directors
          </Heading>
        </Box>
        <Box p={{ base: 6, md: 12 }} maxW="3xl" mx="auto">
          <VStack gap={12} align="stretch">
            <Box>
              <SectionHeading color="#273776">Executive Board</SectionHeading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                <BoardMember name="Jason Grube" role="President" org="Rochester Iron & Metal" color="#ffc107" />
                <BoardMember name="Andrew Horstman" role="Vice President" org="Fulton County REMC" color="#ffc107" />
                <BoardMember name="Brian Johnson" role="Treasurer" org="Smith, Sawyer & Smith" color="#ffc107" />
                <BoardMember name="Kathy Rans" role="Secretary" org="Fulton County Chamber of Commerce" color="#ffc107" />
              </SimpleGrid>
            </Box>
            <Box>
              <SectionHeading color="#273776">Directors</SectionHeading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                <BoardMember name="Lauren Adley" role="Board Attorney" org="Peterson Waggoner & Perkins LLP" color="#649b42" />
                <BoardMember name="Rennell Finke" org="Akron" color="#649b42" />
                <BoardMember name="Mike McCarter" org="Kewanna" color="#649b42" />
                <BoardMember name="Mark McCall" org="Beacon Credit Union" color="#649b42" />
                <BoardMember name="Randy Gundrum" org="Fulton County Council" color="#649b42" />
              </SimpleGrid>
            </Box>
            <Box>
              <SectionHeading color="#273776">Ex Officio</SectionHeading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                <BoardMember name="Brian Goodman" org="Modern Materials/Rochester City Council" color="#649b42" />
                <BoardMember name="Randy Gundrum" org="Fulton County Council" color="#649b42" />
                <BoardMember name="Mark McCall" org="Beacon Credit Union" color="#649b42" />
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

function SectionHeading({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <Heading as="h2" fontSize="2xl" color={color} mb={8} fontWeight="bold" letterSpacing="wide" textTransform="uppercase">
      {children}
    </Heading>
  );
}

function BoardMember({ name, role, org, color }: { name: string; role?: string; org: string; color: string }) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="lg" color={color}>
        {name}{role ? `, ${role}` : ""}
      </Text>
      <Text as="span" color="gray.600" fontStyle="italic" fontSize="md">
        {org}
      </Text>
    </Box>
  );
} 