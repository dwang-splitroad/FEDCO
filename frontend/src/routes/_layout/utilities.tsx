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

function UtilitiesPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Utilities"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
              Utilities
            </Heading>
            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={2} mt={4}>
              Water & Sewer
            </Heading>
            <Text fontWeight="bold" mt={2}>Rochester Water Department</Text>
            <ChakraLink href="https://www.rochester.in.us" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.rochester.in.us</ChakraLink>
            <Text mb={0}>320 Main Street, Rochester, IN 46975</Text>
            <Text mb={4}>574-223-3412</Text>
            <Text fontWeight="bold" mt={2}>Henry Township Water Department</Text>
            <Text mb={0}>322 N Virgil, Akron, IN 46910</Text>
            <Text mb={4}>(574) 893-4174</Text>

            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={2} mt={6}>
              Gas/Electric
            </Heading>
            <Text fontWeight="bold" mt={2}>Fulton County REMC</Text>
            <ChakraLink href="https://www.fultoncountyremc.coop" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.fultoncountyremc.coop</ChakraLink>
            <Text mb={0}>1448 W State Road 14</Text>
            <Text mb={0}>Rochester, IN 46975</Text>
            <Text mb={4}>574-223-3156</Text>
            <Text fontWeight="bold" mt={2}>NIPSCO</Text>
            <ChakraLink href="https://www.nipsco.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.nipsco.com</ChakraLink>
            <Text mb={0}>801 E 86th Ave</Text>
            <Text mb={0}>Merrillville, IN 46410</Text>
            <Text mb={4}>800-4-NIPSCO</Text>
            <Text fontWeight="bold" mt={2}>Duke Energy</Text>
            <ChakraLink href="https://www.duke-energy.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.duke-energy.com</ChakraLink>
            <Text mb={0}>1000 E Main St</Text>
            <Text mb={4}>Plainfield, IN 46168</Text>
            <Text mb={4}>800-521-2232</Text>

            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={2} mt={6}>
              Fiber/Satellite
            </Heading>
            <Text fontWeight="bold" mt={2}>RTC Communications</Text>
            <ChakraLink href="https://www.rtc1.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.rtc1.com</ChakraLink>
            <Text mb={0}>117 W 8th St</Text>
            <Text mb={0}>Rochester, IN 46975</Text>
            <Text mb={4}>574-223-2191</Text>
            <Text fontWeight="bold" mt={2}>Comcast</Text>
            <ChakraLink href="https://business.comcast.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.business.comcast.com</ChakraLink>
            <Text mb={4}>866-647-6516</Text>
            <Text fontWeight="bold" mt={2}>Frontier Communications</Text>
            <ChakraLink href="https://www.frontier.com" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.frontier.com</ChakraLink>
            <Text mb={4}>877-334-8257</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/utilities")({
  component: UtilitiesPage,
}); 