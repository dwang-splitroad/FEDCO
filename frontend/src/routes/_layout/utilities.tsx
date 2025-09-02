import { Box, Heading, Text, Link as ChakraLink, SimpleGrid, VStack, HStack, Container, Flex } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/utilities")({
  component: UtilitiesPage,
});

function UtilitiesPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} color="#273776" fontWeight="bold" mb={4}>
          Utilities
        </Heading>
        <Text color="gray.700" mb={8}>
          Fulton County offers reliable utility services to support your business operations with competitive rates and excellent service.
        </Text>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold">
              <Flex align="center">
                <Box w="12px" h="12px" bg="#649b42" borderRadius="full" />
                <Text as="span" ml={3}>Electric</Text>
              </Flex>
            </Heading>
            <Text color="gray.700" lineHeight="tall">
              Fulton County is served by reliable electric cooperatives and municipal utilities that provide competitive rates for businesses of all sizes.
            </Text>
            <VStack align="flex-start" gap={2} w="100%" mt={4}>
              <Text color="gray.700" fontWeight="medium">Service Providers:</Text>
              <Box pl={4}>
                <Text>
                  <ChakraLink href="http://www.fultoncountymc.com/" color="#649b42" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "underline", color: "#273776" }}>
                    www.fultoncountymc.com
                  </ChakraLink>
                </Text>
                <Text>
                  <ChakraLink href="https://www.duke-energy.com/home" color="#649b42" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "underline", color: "#273776" }}>
                    www.duke-energy.com
                  </ChakraLink>
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold">
              <Flex align="center">
                <Box w="12px" h="12px" bg="#39A7D2" borderRadius="full" />
                <Text as="span" ml={3}>Natural Gas</Text>
              </Flex>
            </Heading>
            <Text color="gray.700" lineHeight="tall">
              Natural gas service is available throughout Fulton County for heating, manufacturing, and other business needs at competitive rates.
            </Text>
            <Box bg="gray.50" p={4} borderRadius="md" w="100%" mt={4}>
              <Text fontSize="sm" color="gray.600" fontStyle="italic">
                Available for heating, manufacturing, and industrial applications
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold">
              <Flex align="center">
                <Box w="12px" h="12px" bg="#9FA3A6" borderRadius="full" />
                <Text as="span" ml={3}>Water/Sewer</Text>
              </Flex>
            </Heading>
            <Text color="gray.700" lineHeight="tall">
              High-speed internet and telecommunications services are available from multiple providers, ensuring your business stays connected.
            </Text>
            <Box bg="gray.50" p={4} borderRadius="md" w="100%" mt={4}>
              <Text fontSize="sm" color="gray.600" fontWeight="medium" mb={1}>
                Available Services:
              </Text>
              <Text fontSize="sm" color="gray.600">
                • Fiber optic networks<br/>
                • Broadband internet<br/>
                • Business telecommunications
              </Text>
            </Box>
          </Box>
        </VStack>
        <Box textAlign="center" mt={12}>
          <Heading as="h2" fontSize="2xl" color="#273776" fontWeight="bold" textAlign="center">
            Ready to build or expand in Fulton County?
          </Heading>
          <Text color="gray.700" mt={2} mb={4}>
            Contact our team to learn more about utility services and how we can help you establish your business in Fulton County.
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 