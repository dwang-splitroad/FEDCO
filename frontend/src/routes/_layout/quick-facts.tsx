import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

function SectionDivider() {
  return <Box w="100%" h="1px" bg="gray.200" my={4} />;
}

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

function QuickFactsPage() {
  const { state } = useRouter();
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Quick Facts"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6} textAlign="center">
              FULTON COUNTY QUICK FACTS
            </Heading>
            <VStack align="flex-start" gap={6}>
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Demographics</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>Population:</b> 20,139</Text>
                  <Text><b>County Seat:</b> Rochester</Text>
                  <Text><b>Nearest Major Cities:</b> South Bend (45 mi), Fort Wayne (62 mi), Indianapolis (102 mi), Chicago (118 mi)</Text>
                  <Text><b>Townships:</b> Aubbeenaubbee, Henry, Liberty, Newcastle, Richland, Rochester, Union, Wayne</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Ages</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>Median Age:</b> 41.7</Text>
                  <Text><b>Persons under 18:</b> 4,849</Text>
                  <Text><b>Persons 19-63:</b> 11,573</Text>
                  <Text><b>Persons 65 & over:</b> 3,717</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Income & Household Data</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>Per capita income:</b> $37,464</Text>
                  <Text><b>Households:</b> 7,963</Text>
                  <Text><b>Median household income:</b> $51,660</Text>
                  <Text><b>Persons/household:</b> 2.50</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Income & Family Data</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>Families:</b> 5,375</Text>
                  <Text><b>Median family income:</b> $51,660</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Housing</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>Housing units (H.U.):</b> 9,663</Text>
                  <Text><b>Owner-occupied H.U.:</b> 6,127</Text>
                  <Text><b>Renter-occupied H.U.:</b> 1,836</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Education</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                  <Text><b>With H.S. education:</b> 85.7%</Text>
                  <Text><b>Bachelors degree or higher:</b> 13.2%</Text>
                </SimpleGrid>
              </Box>
              <SectionDivider />
              <Box>
                <Heading as="h2" size="md" color="#e07a22" mb={2}>Transportation</Heading>
                <Text fontWeight="bold" mt={2}>Regional Airport</Text>
                <Text>Fulton County Airport</Text>
                <Text>545 N State Road 25, Rochester  (574) 223-5384</Text>
                <Text fontWeight="bold" mt={4}>Nearest Major Airports</Text>
                <VStack align="flex-start" gap={1} pl={2}>
                  <Text>South Bend International Airport, South Bend - 52 miles</Text>
                  <Text>Fort Wayne International Airport, Fort Wayne - 61 miles</Text>
                  <Text>Indianapolis International Airport, Indianapolis - 108 miles</Text>
                  <Text>Midway Airport, Chicago - 120 miles</Text>
                  <Text>O’Hare International Airport, Chicago - 142 miles</Text>
                </VStack>
                <Text fontWeight="bold" mt={4}>Highways Serving the Area</Text>
                <Text>US Highways 31</Text>
                <Text>State Roads 14, 17, 19, 25, 110, 114</Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/quick-facts")({
  component: QuickFactsPage,
}); 