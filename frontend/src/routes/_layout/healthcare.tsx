import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/healthcare")({
  component: HealthcarePage,
});

function HealthcarePage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
            Healthcare
          </Heading>
          <Text color="gray.700" mb={6} fontSize="lg">
            Fulton County provides access to quality healthcare services for residents and businesses, ensuring a healthy workforce and community.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Primary Healthcare
          </Heading>
          <Text color="gray.700" mb={4}>
            <ChakraLink
              href="https://www.woodlawnhospital.com"
              color="#6bbf4e"
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "underline", color: "#232883" }}
            >
              Woodlawn Hospital
            </ChakraLink>{' '}
            serves as the primary healthcare facility for Fulton County, providing comprehensive medical services including emergency care, surgical services, and specialized care.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Specialty Services
          </Heading>
          <Text color="gray.700" mb={4}>
            The county offers access to specialized healthcare services including cardiology, orthopedics, and other specialty care through local providers and regional partnerships.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Emergency Services
          </Heading>
          <Text color="gray.700" mb={4}>
            24/7 emergency medical services are available throughout Fulton County, ensuring rapid response and quality care when needed.
          </Text>
          
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Wellness Programs
          </Heading>
          <Text color="gray.700" mb={0}>
            Community wellness programs and preventive care services help maintain a healthy population and workforce in Fulton County.
          </Text>
        </Box>
      </Box>
    </Box>
  );
} 