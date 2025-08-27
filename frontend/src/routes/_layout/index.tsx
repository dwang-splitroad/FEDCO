import { 
  Box, 
  Text, 
  Heading,
  HStack,
  Button,
  
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

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
        py={0}
        px={8}
        textAlign="center"
        position="relative"
        overflow="hidden"
        style={{
          backgroundImage: 'url(/images/lake.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overlay for readability */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(255,255,255,0.3)"
          zIndex={0}
        />
        <Box maxW="6xl" position="relative" zIndex={1}>
          <HStack gap={4} justify="center">
            <Link to="/business-assistance">
            <Button 
              size="lg" 
              bg="green.600" 
              color="white" 
              fontWeight="bold"
              boxShadow="md"
              _hover={{ bg: "green.700", boxShadow: "lg" }}
              px={10}
              py={7}
            >
              How We Help Small Business
            </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              borderColor="blue.600" 
              color="blue.700"
              bg="white"
              fontWeight="bold"
              _hover={{ bg: "blue.50", borderColor: "blue.700", color: "blue.800" }}
              px={10}
              py={7}
            >
              Learn About Our Community
            </Button>
          </HStack>
        </Box>
      </Box>

      {/* Heading below header image */}
      <Box bg="gray.100" color="gray.800" py={8} textAlign="center">
        <Heading
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          letterSpacing="wide"
          color="gray.800"
        >
          IN THE MIDDLE OF EVERYWHERE
        </Heading>
      </Box>

      {/* Body Section below header */}
      <Box bg="gray.100" color="gray.800" py={12} px={8} textAlign="center">
        <Box maxW="4xl">
          <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall" color="gray.700" mb={4}>
            <Text as="span" fontWeight="bold">Fulton County</Text> is centrally located between Chicago and Indianapolis. 
            The region boasts a dedicated workforce, a vibrant agriculture industry and strong manufacturing base. 
            Known for a friendly environment, outdoor recreational opportunities and rich history, Fulton County is ready to grow.
          </Text>
          <Text fontSize="lg" color="gray.700" mb={8}>
            Interested in relocating your business? Starting a business or expanding a business? 
            FEDCO works closely with city/county government, schools, and local businesses to create an environment that supports success. 
            We look forward to working with you!
          </Text>
        </Box>
      </Box>
    </>
  )
}
