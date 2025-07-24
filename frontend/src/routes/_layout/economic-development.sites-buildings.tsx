import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_layout/economic-development/sites-buildings")({
  component: SitesBuildingsPage,
});

const economicDevLinks = [
  { label: "Sites & Buildings", to: "/economic-development/sites-buildings" },
  { label: "Wage Survey", to: "/economic-development/wage-survey" },
];

function Sidebar({ current }: { current: string }) {
  return (
    <VStack align="flex-start" gap={2} minW="220px" mt={2} mb={8}>
      <Text fontWeight="bold" fontSize="sm" color="#232883" letterSpacing="wider" mb={2}>
        ECONOMIC DEVELOPMENT
      </Text>
      {economicDevLinks.map((link) => (
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
      ))}
      <Box mt={4}>
        <ChakraLink
          href="https://www.hoosierdata.in.gov"
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
            Labor Statistics
          </Text>
        </ChakraLink>
      </Box>
    </VStack>
  );
}

function SitesBuildingsPage() {
  useEffect(() => {
    console.log('SitesBuildingsPage: Component mounted');
    
    // Add custom styles for the iframe
    const style = document.createElement('style');
    style.textContent = `
      #zoomprospector-container iframe {
        width: 100% !important;
        height: 600px !important;
        border: none !important;
      }
    `;
    document.head.appendChild(style);

    // Load the ZoomProspector iframe directly for now
    const container = document.getElementById('zoomprospector-container');
    if (container) {
      console.log('SitesBuildingsPage: Container found, loading iframe');
      container.innerHTML = `
        <iframe 
          src="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
          width="100%" 
          height="600" 
          frameborder="0"
          style="border: none; width: 100%; height: 600px;"
          title="ZoomProspector Property Search for Fulton County, Indiana"
          onload="console.log('ZoomProspector iframe loaded successfully')"
          onerror="console.error('ZoomProspector iframe failed to load')"
        ></iframe>
      `;
    } else {
      console.error('SitesBuildingsPage: Container not found');
    }

    // Cleanup function to remove script and styles when component unmounts
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current="Sites & Buildings" />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
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

            {/* ZoomProspector iframe container */}
            <Box 
              mb={6}
              borderRadius="lg"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
              minH="600px"
              bg="white"
              position="relative"
            >
              {/* The ZoomProspector script will inject content here */}
              <Box 
                id="zoomprospector-container" 
                minH="600px" 
                w="100%"
              >
                {/* Loading indicator */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  minH="600px"
                  color="gray.500"
                  fontSize="lg"
                  flexDirection="column"
                  gap={4}
                >
                  <Text>Loading property search...</Text>
                  <Text fontSize="sm" color="gray.400">
                    If the map doesn't load, you can{" "}
                    <ChakraLink
                      href="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#6bbf4e"
                      textDecoration="underline"
                    >
                      view properties directly on ZoomProspector
                    </ChakraLink>
                  </Text>
                </Box>
              </Box>
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
      </Container>
    </Box>
  );
} 