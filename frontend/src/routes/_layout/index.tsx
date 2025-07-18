import { 
  Box, 
  Container, 
  Text, 
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  HStack,
  Button,
  Image
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: Homepage,
})

function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        bg="gray.100"
        color="gray.800"
        py={20}
        px={8}
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="6xl">
          <VStack gap={6}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              letterSpacing="wide"
              color="gray.800"
            >
              IN THE MIDDLE OF EVERYWHERE
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="4xl" lineHeight="tall" color="gray.700">
              <Text as="span" fontWeight="bold">Fulton County</Text> is centrally located between Chicago and Indianapolis. 
              The region boasts a dedicated workforce, a vibrant agriculture industry and strong manufacturing base. 
              Known for a friendly environment, outdoor recreational opportunities and rich history, Fulton County is ready to grow.
            </Text>
            <Text fontSize="lg" mt={4} color="gray.700">
              Interested in relocating your business? Starting a business or expanding a business? 
              FEDCO works closely with city/county government, schools, and local businesses to create an environment that supports success. 
              We look forward to working with you!
            </Text>
            <HStack gap={4} mt={8}>
              <Button 
                size="lg" 
                bg="green.500" 
                color="white" 
                _hover={{ bg: "green.600" }}
                px={8}
              >
                Start Your Business Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                borderColor="blue.600" 
                color="blue.600"
                _hover={{ bg: "blue.50" }}
                px={8}
              >
                Learn About Our Community
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Quick Facts Section */}
      <Box py={16} bg="white">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12} fontSize="3xl" color="gray.800">
            QUICK FACTS
          </Heading>
          <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
            gap={8}
          >
            <GridItem>
              <VStack 
                p={6} 
                bg="blue.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="blue.600" fontWeight="bold">
                  HEALTHCARE
                </Text>
                <Text fontSize="2xl" color="blue.800" fontWeight="bold">
                  Woodlawn Hospital
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack 
                p={6} 
                bg="green.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="green.600" fontWeight="bold">
                  MEDIAN AGE
                </Text>
                <Text fontSize="3xl" color="green.800" fontWeight="bold">
                  41.7
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack 
                p={6} 
                bg="purple.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="purple.600" fontWeight="bold">
                  MAJOR HIGHWAYS
                </Text>
                <Text fontSize="lg" color="purple.800" fontWeight="bold">
                  US 31 & SR 14, 17, 19, 25, 110, 114
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack 
                p={6} 
                bg="orange.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="orange.600" fontWeight="bold">
                  POPULATION
                </Text>
                <Text fontSize="3xl" color="orange.800" fontWeight="bold">
                  20,139
                </Text>
              </VStack>
            </GridItem>
          </Grid>

          {/* Additional Quick Facts Row */}
          <Grid 
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} 
            gap={8}
            mt={8}
            maxW="4xl"
            mx="auto"
          >
            <GridItem>
              <VStack 
                p={6} 
                bg="teal.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="teal.600" fontWeight="bold">
                  MEDIAN FAMILY INCOME
                </Text>
                <Text fontSize="2xl" color="teal.800" fontWeight="bold">
                  $51,660
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack 
                p={6} 
                bg="red.50" 
                borderRadius="lg" 
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
                gap={3}
              >
                <Text fontSize="sm" color="red.600" fontWeight="bold">
                  REGIONAL AIRPORT
                </Text>
                <Text fontSize="xl" color="red.800" fontWeight="bold">
                  Fulton County Airport
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* News Section Preview */}
      <Box py={16} bg="gray.50">
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" mb={8}>
            <Heading fontSize="3xl" color="gray.800">
              FEDGro NOW!
            </Heading>
            <Button variant="outline" colorScheme="blue">
              View All News
            </Button>
          </Flex>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {/* Sample news items */}
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Text fontSize="sm" color="gray.500" mb={2}>Sep 9, 2022</Text>
              <Heading fontSize="lg" mb={3} color="blue.800">
                FEDCO Announces Development at Blacketor Industrial Park
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Exciting new developments are coming to Blacketor Industrial Park as FEDCO continues to support business growth in Fulton County...
              </Text>
              <Button size="sm" variant="plain" colorScheme="blue" mt={3}>
                Read More →
              </Button>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Text fontSize="sm" color="gray.500" mb={2}>May 12, 2022</Text>
              <Heading fontSize="lg" mb={3} color="blue.800">
                FEDCO Celebrates 2022 Economic Development Week
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Join us in celebrating the achievements and continued growth of economic development initiatives throughout Fulton County...
              </Text>
              <Button size="sm" variant="plain" colorScheme="blue" mt={3}>
                Read More →
              </Button>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Text fontSize="sm" color="gray.500" mb={2}>Mar 11, 2022</Text>
              <Heading fontSize="lg" mb={3} color="blue.800">
                FEDCO is hosting a Community Conversation
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Community input is vital to our planning process. Join us for an important conversation about the future of economic development...
              </Text>
              <Button size="sm" variant="plain" colorScheme="blue" mt={3}>
                Read More →
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
