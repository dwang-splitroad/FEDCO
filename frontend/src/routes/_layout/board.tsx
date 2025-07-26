import { Box, Container, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/board")({
  component: BoardPage,
});

function BoardPage() {
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
          Board of Directors
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
          {/* Board Content in a single white box with padding */}
          <Box flex={1} bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
            {/* Executive Board Section */}
            <SectionHeading color="#232883">Executive Board</SectionHeading>
            <Stack direction="column" gap={6} mb={14}>
              <BoardMember name="Jason Grube" role="President" org="Rochester Iron & Metal" color="#e07a22" />
              <BoardMember name="Andrew Horstman" role="Vice President" org="Fulton County REMC" color="#e07a22" />
              <BoardMember name="Brian Johnson" role="Treasurer" org="Smith, Sawyer & Smith" color="#e07a22" />
              <BoardMember name="Kathy Rans" role="Secretary" org="Fulton County Chamber of Commerce" color="#e07a22" />
            </Stack>
            {/* Directors Section */}
            <SectionHeading color="#232883">Directors</SectionHeading>
            <Stack direction="column" gap={6} mb={14}>
              <BoardMember name="Lauren Adley" role="Board Attorney" org="Peterson Waggoner & Perkins LLP" color="#6bbf4e" />
              <BoardMember name="Rennell Finke" org="Akron" color="#6bbf4e" />
              <BoardMember name="Mike McCarter" org="Kewanna" color="#6bbf4e" />
              <BoardMember name="Mark McCall" org="Beacon Credit Union" color="#6bbf4e" />
              <BoardMember name="Randy Gundrum" org="Fulton County Council" color="#6bbf4e" />
            </Stack>
            {/* Ex Officio Section */}
            <SectionHeading color="#232883">Ex Officio</SectionHeading>
            <Stack direction="column" gap={6}>
              <BoardMember name="Brian Goodman" org="Modern Materials/Rochester City Council" color="#6bbf4e" />
              <BoardMember name="Randy Gundrum" org="Fulton County Council" color="#6bbf4e" />
              <BoardMember name="Mark McCall" org="Beacon Credit Union" color="#6bbf4e" />
            </Stack>
          </Box>
        </Flex>
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