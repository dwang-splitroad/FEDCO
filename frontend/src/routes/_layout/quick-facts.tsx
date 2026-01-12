import { Box, Heading, Text, VStack, SimpleGrid, HStack, Container } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

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
      <Container maxW="6xl" bg="white" p={8} borderRadius="xl" boxShadow="xl">
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6} textAlign="center">
          Quick Facts about Fulton County
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Demographics</Heading>
            <SimplePieChart data={[
              { label: "Total Population", value: 20478, color: "#94C973" },
              { label: "Rochester", value: 6200, color: "#273776" },
              { label: "Wayne", value: 3100, color: "#649b42" },
              { label: "Henry", value: 2800, color: "#ffc107" },
              { label: "Liberty", value: 2300, color: "#5F9EA0" },
              { label: "Newcastle", value: 1400, color: "#ADD8E6" },
              { label: "Aubbeenaubbee", value: 1300, color: "#B0C4DE" },
              { label: "Union", value: 1200, color: "#E6E6FA" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Ages</Heading>
            <SimplePieChart data={[
              { label: "Under 18", value: 4891, color: "#94C973" },
              { label: "19-63", value: 11573, color: "#649b42" },
              { label: "65 & over", value: 3717, color: "#ffc107" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Income & Household Data</Heading>
            <SimplePieChart data={[
              { label: "Households", value: 7963, color: "#94C973" },
              { label: "Median HH", value: 51660, color: "#273776" },
              { label: "Per Capita", value: 37464, color: "#649b42" },
              { label: "Median Family", value: 51660, color: "#ffc107" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Income & Family Data</Heading>
            <SimplePieChart data={[
              { label: "Families", value: 5375, color: "#94C973" },
              { label: "Family Households", value: 5375, color: "#649b42" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Housing</Heading>
            <SimplePieChart data={[
              { label: "Housing Units", value: 9214, color: "#94C973" },
              { label: "Owner-occupied", value: 6127, color: "#649b42" },
              { label: "Renter-occupied", value: 1836, color: "#ffc107" },
              { label: "Vacant", value: 1251, color: "#D3D3D3" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Education</Heading>
            <SimplePieChart data={[
              { label: "High School", value: 85.7, color: "#649b42" },
              { label: "Bachelor's+", value: 13.2, color: "#273776" }
            ]} />
          </Box>
          <Box>
            <Heading as="h2" size="md" color="#ffc107" mb={4}>Transportation</Heading>
            <SimplePieChart data={[
              { label: "Mean Travel Time", value: 22.1, color: "#94C973" },
              { label: "Fort Wayne", value: 52, color: "#D3D3D3" },
              { label: "South Bend", value: 52, color: "#649b42" },
              { label: "Indianapolis", value: 108, color: "#ffc107" },
              { label: "Chicago Midway", value: 120, color: "#273776" },
            ]} title="Drive time from Rochester (minutes) to:" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/quick-facts")({
  component: QuickFactsPage,
}); 