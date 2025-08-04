import { Box, Heading, Text, Link as ChakraLink, SimpleGrid, VStack, HStack, Icon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/utilities")({
  component: UtilitiesPage,
});

function UtilitiesPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box maxW="7xl" mx="auto">
          <VStack gap={8} align="stretch">
            {/* Header Section */}
            <Box textAlign="center" mb={4}>
              <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} color="#232883" fontWeight="bold" mb={4}>
                Utilities & Infrastructure
              </Heading>
              <Text color="gray.700" fontSize="xl" maxW="3xl" mx="auto">
                Fulton County offers reliable utility services to support your business operations with competitive rates and excellent service.
              </Text>
            </Box>

            {/* Utilities Grid */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
              {/* Electric Service Card */}
              <Box bg="white" p={8} borderRadius="xl" boxShadow="md" border="1px solid" borderColor="gray.100">
                <VStack align="flex-start" gap={4}>
                  <HStack align="center" gap={3}>
                    <Box w="12px" h="12px" bg="#6bbf4e" borderRadius="full" />
                    <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold">
                      Electric Service
                    </Heading>
                  </HStack>
                  <Text color="gray.700" lineHeight="tall">
                    Fulton County is served by reliable electric cooperatives and municipal utilities that provide competitive rates for businesses of all sizes.
                  </Text>
                  <VStack align="flex-start" gap={2} w="100%">
                    <Text color="gray.700" fontWeight="medium">Service Providers:</Text>
                    <Box pl={4}>
                      <ChakraLink
                        href="https://www.nremc.com"
                        color="#6bbf4e"
                        fontWeight="bold"
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecoration: "underline", color: "#232883" }}
                        display="block"
                        mb={1}
                      >
                        • Northern Indiana Public Service Company (NIPSCO)
                      </ChakraLink>
                      <ChakraLink
                        href="https://www.nremc.com"
                        color="#6bbf4e"
                        fontWeight="bold"
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecoration: "underline", color: "#232883" }}
                        display="block"
                      >
                        • Noble REMC
                      </ChakraLink>
                    </Box>
                  </VStack>
                </VStack>
              </Box>

              {/* Natural Gas Card */}
              <Box bg="white" p={8} borderRadius="xl" boxShadow="md" border="1px solid" borderColor="gray.100">
                <VStack align="flex-start" gap={4}>
                  <HStack align="center" gap={3}>
                    <Box w="12px" h="12px" bg="#4299e1" borderRadius="full" />
                    <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold">
                      Natural Gas
                    </Heading>
                  </HStack>
                  <Text color="gray.700" lineHeight="tall">
                    Natural gas service is available throughout Fulton County for heating, manufacturing, and other business needs at competitive rates.
                  </Text>
                  <Box bg="gray.50" p={4} borderRadius="md" w="100%">
                    <Text fontSize="sm" color="gray.600" fontStyle="italic">
                      Available for heating, manufacturing, and industrial applications
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Telecommunications Card */}
              <Box bg="white" p={8} borderRadius="xl" boxShadow="md" border="1px solid" borderColor="gray.100">
                <VStack align="flex-start" gap={4}>
                  <HStack align="center" gap={3}>
                    <Box w="12px" h="12px" bg="#9f7aea" borderRadius="full" />
                    <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold">
                      Telecommunications
                    </Heading>
                  </HStack>
                  <Text color="gray.700" lineHeight="tall">
                    High-speed internet and telecommunications services are available from multiple providers, ensuring your business stays connected.
                  </Text>
                  <Box bg="gray.50" p={4} borderRadius="md" w="100%">
                    <Text fontSize="sm" color="gray.600" fontWeight="medium" mb={1}>
                      Available Services:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      • Fiber optic networks<br/>
                      • Broadband internet<br/>
                      • Business telecommunications
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>

            {/* Water & Sewer - Featured Section */}
            <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" border="1px solid" borderColor="gray.100">
              <VStack gap={6} align="stretch">
                <HStack align="center" gap={3} justify="center">
                  <Box w="12px" h="12px" bg="#38b2ac" borderRadius="full" />
                  <Heading as="h2" fontSize="2xl" color="#232883" fontWeight="bold" textAlign="center">
                    Water & Sewer Services
                  </Heading>
                </HStack>
                
                <Box display={{ base: "block", lg: "flex" }} alignItems="center" gap={8}>
                  <Box flex={1} order={{ base: 2, lg: 1 }}>
                    <VStack align="flex-start" gap={4}>
                      <Text color="gray.700" fontSize="lg" lineHeight="tall">
                        Municipal water and sewer services are available in incorporated areas, with well and septic options available for rural locations.
                      </Text>
                      <Text color="gray.700" lineHeight="tall">
                        The City of Rochester and other municipalities provide reliable water and wastewater treatment services to support business operations.
                      </Text>
                      <Box bg="gray.50" p={4} borderRadius="md" w="100%">
                        <Text fontSize="sm" color="gray.600" fontWeight="medium" mb={2}>
                          Service Areas:
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          • Municipal water & sewer in incorporated areas<br/>
                          • Well & septic options for rural locations<br/>
                          • Professional wastewater treatment facilities
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                  
                  <Box flexShrink={0} maxW={{ base: "100%", lg: "450px" }} order={{ base: 1, lg: 2 }} mb={{ base: 6, lg: 0 }}>
                    <Box position="relative" overflow="hidden" borderRadius="xl" boxShadow="lg">
                      <img
                        src="/images/cityPhotos/water_sewage.JPG"
                        alt="Rochester Water and Sewage Treatment Plant - Aerial view of modern water treatment facility"
                        style={{ 
                          width: "100%", 
                          height: "auto", 
                          display: "block",
                          aspectRatio: "16/10",
                          objectFit: "cover"
                        }}
                      />
                      <Box 
                        position="absolute" 
                        bottom={0} 
                        left={0} 
                        right={0} 
                        bg="linear-gradient(transparent, rgba(0,0,0,0.7))" 
                        p={4}
                      >
                        <Text color="white" fontSize="sm" fontWeight="medium">
                          Rochester Water & Sewage Treatment Plant
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
} 