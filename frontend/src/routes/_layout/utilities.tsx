import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/utilities")({
  component: UtilitiesPage,
});

function UtilitiesPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
            Utilities
          </Heading>
          <Text color="gray.700" mb={6} fontSize="lg">
            Fulton County offers reliable utility services to support your business operations with competitive rates and excellent service.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Electric Service
          </Heading>
          <Text color="gray.700" mb={4}>
            Fulton County is served by reliable electric cooperatives and municipal utilities that provide competitive rates for businesses of all sizes.
          </Text>
          <Text color="gray.700" mb={6}>
            <ChakraLink
              href="https://www.nremc.com"
              color="#6bbf4e"
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "underline", color: "#232883" }}
            >
              Northern Indiana Public Service Company (NIPSCO)
            </ChakraLink>{' '}
            and{' '}
            <ChakraLink
              href="https://www.nremc.com"
              color="#6bbf4e"
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "underline", color: "#232883" }}
            >
              Noble REMC
            </ChakraLink>{' '}
            serve the area with dependable power infrastructure.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Natural Gas
          </Heading>
          <Text color="gray.700" mb={6}>
            Natural gas service is available throughout Fulton County for heating, manufacturing, and other business needs at competitive rates.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Water & Sewer
          </Heading>
          <Text color="gray.700" mb={4}>
            Municipal water and sewer services are available in incorporated areas, with well and septic options available for rural locations.
          </Text>
          <Text color="gray.700" mb={6}>
            The City of Rochester and other municipalities provide reliable water and wastewater treatment services to support business operations.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Telecommunications
          </Heading>
          <Text color="gray.700" mb={4}>
            High-speed internet and telecommunications services are available from multiple providers, ensuring your business stays connected.
          </Text>
          <Text color="gray.700" mb={0}>
            Fiber optic networks and broadband services provide the connectivity needed for modern business operations in Fulton County.
          </Text>
        </Box>
      </Box>
    </Box>
  );
} 