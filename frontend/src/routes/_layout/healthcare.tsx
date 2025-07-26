import React from "react";
import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

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
      <Text fontWeight="bold" fontSize="sm" color="#232883" letterSpacing="wider" mb={2}>
        LIFE IN FULTON COUNTY
      </Text>
      {lifeInFultonLinks.map((link) =>
        link.to ? (
          <Link to={link.to} key={link.to} style={{ width: "100%" }}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="wider"
              color={link.label === current ? "#e07a22" : "#6bbf4e"}
              _hover={{ color: link.label === current ? "#e07a22" : "#232883" }}
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
              color="#6bbf4e"
              _hover={{ color: "#232883" }}
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

function HealthcarePage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Healthcare"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
              Healthcare in Fulton County
            </Heading>
            <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={2} mt={4}>
              Woodlawn Hospital
            </Heading>
            <Text fontWeight="bold">1400 E 9th Street, Rochester, IN 46975</Text>
            <Text mb={2}>(574) 223-3141</Text>
            <Text mb={4}>
              <ChakraLink href="https://woodlawnhospital.org" color="#6bbf4e" target="_blank" rel="noopener noreferrer">Woodlawn Hospital</ChakraLink> is a not-for-profit community-owned Critical Access Hospital healthcare system located in Rochester, Indiana. The system has one main hospital campus, with 25 beds and 42 physicians that represent more than 14 medical specialties. The hospital employs a staff of over 250. Hospital services include, but are not limited to, emergency and critical care services, cardiovascular services, cancer center, occupational medicine program, sleep disorder center, joint replacement program, maternity services, and pain management services. The system also includes five primary care practice locations.
            </Text>
            <Heading as="h3" fontSize="lg" color="#e07a22" fontWeight="bold" mb={2} mt={6}>
              Nearby Trauma Centers
            </Heading>
            <VStack align="flex-start" gap={1} mb={4}>
              <ChakraLink href="https://locations.beaconhealthsystem.org/in/south-bend/memorial-hospital" color="#6bbf4e" target="_blank" rel="noopener noreferrer">Memorial Hospital of South Bend</ChakraLink>
              <ChakraLink href="https://www.parkview.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">Parkview Regional Medical Center</ChakraLink>
            </VStack>
            <Heading as="h3" fontSize="lg" color="#e07a22" fontWeight="bold" mb={2} mt={6}>
              Nearby Children’s Hospital/NICU
            </Heading>
            <VStack align="flex-start" gap={1}>
              <ChakraLink href="https://www.beaconhealthsystem.org/beacon-childrens-hospital" color="#6bbf4e" target="_blank" rel="noopener noreferrer">Beacon Children’s Hospital of South Bend</ChakraLink>
              <ChakraLink href="https://www.rileychildrens.org" color="#6bbf4e" target="_blank" rel="noopener noreferrer">Riley Children’s Health of Indianapolis</ChakraLink>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/healthcare")({
  component: HealthcarePage,
}); 