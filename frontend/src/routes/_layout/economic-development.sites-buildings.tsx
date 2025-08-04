import { Box, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/economic-development/sites-buildings")({
  component: SitesBuildingsPage,
});

function SitesBuildingsPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
            Sites & Buildings
          </Heading>
          <Text color="gray.700" mb={6} fontSize="lg">
            Explore available commercial and industrial properties in Fulton County, Indiana. Find the perfect location for your business with our comprehensive property search tool.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Property Search
          </Heading>
          <Text color="gray.700" mb={6}>
            Use the interactive map and listings below to search for available sites and buildings. You can filter by property type, size, location, and other criteria to find properties that meet your specific business needs.
          </Text>

          {/* ZoomProspector iframe - Full page width */}
          <Box 
            mb={6}
            overflow="hidden"
            minH="1000px"
            bg="white"
            position="relative"
            w="100%"
          >
            <iframe
              src="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
              width="100%"
              height="1000"
              style={{ border: 0, width: "100%", height: "1000px" }}
              allowFullScreen
              loading="lazy"
              title="ZoomProspector Property Search for Fulton County, Indiana"
            />
          </Box>

          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Need Assistance?
          </Heading>
          <Text color="gray.700" mb={4}>
            Our economic development team is here to help you find the right property for your business. We can provide additional information about available sites, zoning requirements, utilities, and incentive programs.
          </Text>
          <Text color="gray.700" mb={6}>
            For personalized assistance with your site selection, please{" "}
            <ChakraLink
              href="/contact"
              color="#6bbf4e"
              fontWeight="bold"
              _hover={{ textDecoration: "underline", color: "#232883" }}
            >
              contact our team
            </ChakraLink>
            {" "}or browse our full property database using the link below.
          </Text>

          <Box bg="gray.50" p={6} borderRadius="lg" mb={6}>
            <Heading as="h3" fontSize="lg" color="#232883" fontWeight="bold" mb={3}>
              Additional Resources
            </Heading>
            <VStack align="flex-start" gap={2}>
              <ChakraLink
                href="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
                target="_blank"
                rel="noopener noreferrer"
                color="#6bbf4e"
                fontWeight="bold"
                _hover={{ textDecoration: "underline", color: "#232883" }}
              >
                View Full Property Database →
              </ChakraLink>
              <ChakraLink
                href="/economic-development/wage-survey"
                color="#6bbf4e"
                fontWeight="bold"
                _hover={{ textDecoration: "underline", color: "#232883" }}
              >
                Wage & Labor Market Data →
              </ChakraLink>
              <ChakraLink
                href="https://www.hoosierdata.in.gov"
                target="_blank"
                rel="noopener noreferrer"
                color="#6bbf4e"
                fontWeight="bold"
                _hover={{ textDecoration: "underline", color: "#232883" }}
              >
                Indiana Labor Statistics →
              </ChakraLink>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 