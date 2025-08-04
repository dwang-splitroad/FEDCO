import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink, HStack, Flex } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

function SectionDivider() {
  return <Box w="100%" h="1px" bg="gray.200" my={4} />;
}

// Simple bar chart component
function SimpleBarChart({ data, title }: { data: { label: string; value: number; color?: string }[]; title?: string }) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <Box p={4} bg="gray.50" borderRadius="md" w="100%">
      {title && <Text fontSize="sm" fontWeight="bold" mb={3} textAlign="center">{title}</Text>}
      <VStack gap={2} align="stretch">
        {data.map((item, index) => (
          <HStack key={index} gap={3}>
            <Text fontSize="sm" minW="100px" textAlign="right">{item.label}</Text>
            <Flex flex={1} align="center">
              <Box 
                bg={item.color || "#6bbf4e"} 
                h="20px" 
                borderRadius="sm"
                width={`${(item.value / maxValue) * 100}%`}
                minW="2px"
              />
              <Text fontSize="sm" ml={2} minW="50px">{item.value.toLocaleString()}</Text>
            </Flex>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

// Simple pie chart representation
function SimplePieChart({ data, title }: { data: { label: string; value: number; color: string }[]; title?: string }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Box p={4} bg="gray.50" borderRadius="md" w="100%">
      {title && <Text fontSize="sm" fontWeight="bold" mb={3} textAlign="center">{title}</Text>}
      <VStack gap={2}>
        <HStack gap={1} justify="center" mb={2}>
          {data.map((item, index) => (
            <Box
              key={index}
              w={`${(item.value / total) * 100}px`}
              h="20px"
              bg={item.color}
              borderRadius="sm"
              minW="10px"
            />
          ))}
        </HStack>
        <VStack gap={1} fontSize="sm">
          {data.map((item, index) => (
            <HStack key={index} gap={2}>
              <Box w="12px" h="12px" bg={item.color} borderRadius="sm" />
              <Text>{item.label}: {((item.value / total) * 100).toFixed(1)}%</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

function QuickFactsPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6} textAlign="center">
            FULTON COUNTY QUICK FACTS
          </Heading>
          <VStack align="flex-start" gap={6}>
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Demographics</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>Population:</b> 20,139</Text>
                    <Text><b>County Seat:</b> Rochester</Text>
                    <Text><b>Nearest Major Cities:</b> South Bend (45 mi), Fort Wayne (62 mi), Indianapolis (102 mi), Chicago (118 mi)</Text>
                    <Text><b>Townships:</b> Aubbeenaubbee, Henry, Liberty, Newcastle, Richland, Rochester, Union, Wayne</Text>
                  </SimpleGrid>
                </Box>
                <SimpleBarChart
                  title="Population by Township"
                  data={[
                    { label: "Rochester", value: 6200, color: "#232883" },
                    { label: "Wayne", value: 3100, color: "#6bbf4e" },
                    { label: "Henry", value: 2800, color: "#e07a22" },
                    { label: "Liberty", value: 2400, color: "#4299e1" },
                    { label: "Other", value: 5639, color: "#a0aec0" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Ages</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>Median Age:</b> 41.7</Text>
                    <Text><b>Persons under 18:</b> 4,849</Text>
                    <Text><b>Persons 19-63:</b> 11,573</Text>
                    <Text><b>Persons 65 & over:</b> 3,717</Text>
                  </SimpleGrid>
                </Box>
                <SimplePieChart
                  title="Age Distribution"
                  data={[
                    { label: "Under 18", value: 4849, color: "#4299e1" },
                    { label: "19-63", value: 11573, color: "#6bbf4e" },
                    { label: "65 & over", value: 3717, color: "#e07a22" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Income & Household Data</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>Per capita income:</b> $37,464</Text>
                    <Text><b>Households:</b> 7,963</Text>
                    <Text><b>Median household income:</b> $51,660</Text>
                    <Text><b>Persons/household:</b> 2.50</Text>
                  </SimpleGrid>
                </Box>
                <SimpleBarChart
                  title="Income Comparison"
                  data={[
                    { label: "Per Capita", value: 37464, color: "#6bbf4e" },
                    { label: "Median HH", value: 51660, color: "#232883" },
                    { label: "Median Family", value: 51660, color: "#e07a22" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Income & Family Data</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>Families:</b> 5,375</Text>
                    <Text><b>Median family income:</b> $51,660</Text>
                  </SimpleGrid>
                </Box>
                <SimpleBarChart
                  title="Families vs Households"
                  data={[
                    { label: "Total Households", value: 7963, color: "#4299e1" },
                    { label: "Family Households", value: 5375, color: "#6bbf4e" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Housing</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>Housing units (H.U.):</b> 9,663</Text>
                    <Text><b>Owner-occupied H.U.:</b> 6,127</Text>
                    <Text><b>Renter-occupied H.U.:</b> 1,836</Text>
                  </SimpleGrid>
                </Box>
                <SimplePieChart
                  title="Housing Occupancy"
                  data={[
                    { label: "Owner-occupied", value: 6127, color: "#6bbf4e" },
                    { label: "Renter-occupied", value: 1836, color: "#e07a22" },
                    { label: "Vacant", value: 1700, color: "#a0aec0" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Education</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} mb={4}>
                    <Text><b>With H.S. education:</b> 85.7%</Text>
                    <Text><b>Bachelors degree or higher:</b> 13.2%</Text>
                  </SimpleGrid>
                </Box>
                <SimpleBarChart
                  title="Education Levels"
                  data={[
                    { label: "High School", value: 85.7, color: "#6bbf4e" },
                    { label: "Bachelor's+", value: 13.2, color: "#232883" }
                  ]}
                />
              </SimpleGrid>
            </Box>
            <SectionDivider />
            
            <Box w="100%">
              <Heading as="h2" size="md" color="#e07a22" mb={4}>Transportation</Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                <Box>
                  <Text fontWeight="bold" mt={2}>Regional Airport</Text>
                  <Text>Fulton County Airport</Text>
                  <Text>545 N State Road 25, Rochester  (574) 223-5384</Text>
                  <Text fontWeight="bold" mt={4}>Nearest Major Airports</Text>
                  <VStack align="flex-start" gap={1} pl={2}>
                    <Text>South Bend International Airport, South Bend - 52 miles</Text>
                    <Text>Fort Wayne International Airport, Fort Wayne - 61 miles</Text>
                    <Text>Indianapolis International Airport, Indianapolis - 108 miles</Text>
                    <Text>Midway Airport, Chicago - 120 miles</Text>
                    <Text>O'Hare International Airport, Chicago - 142 miles</Text>
                  </VStack>
                  <Text fontWeight="bold" mt={4}>Highways Serving the Area</Text>
                  <Text>US Highways 31</Text>
                  <Text>State Roads 14, 17, 19, 25, 110, 114</Text>
                </Box>
                <SimpleBarChart
                  title="Distance to Major Airports (miles)"
                  data={[
                    { label: "South Bend", value: 52, color: "#6bbf4e" },
                    { label: "Fort Wayne", value: 61, color: "#4299e1" },
                    { label: "Indianapolis", value: 108, color: "#e07a22" },
                    { label: "Chicago Midway", value: 120, color: "#232883" },
                    { label: "Chicago O'Hare", value: 142, color: "#a0aec0" }
                  ]}
                />
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/quick-facts")({
  component: QuickFactsPage,
}); 