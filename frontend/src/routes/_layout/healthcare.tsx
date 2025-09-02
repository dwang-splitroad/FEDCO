import { Box, Heading, Text, Link as ChakraLink, Container, VStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/healthcare")({
  component: HealthcarePage,
});

function HealthcarePage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" p={8} borderRadius="xl" boxShadow="xl">
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6}>
          Healthcare in Fulton County
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Woodlawn Hospital
            </Heading>
            <Text color="gray.700" mb={2}>
              Woodlawn Hospital has been serving the residents of Fulton County and surrounding areas since 1905. It is a critical access hospital that provides a wide range of services, including emergency care, surgery, and obstetrics.
            </Text>
            <ChakraLink href="https://www.woodlawnhealth.com/" color="#649b42" isExternal _hover={{ textDecoration: "underline", color: "#273776" }}>
              Visit Woodlawn Hospital Website
            </ChakraLink>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Other Healthcare Providers
            </Heading>
            <Text color="gray.700">
              In addition to Woodlawn Hospital, Fulton County is home to a number of other healthcare providers, including primary care physicians, dentists, and specialists.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Fulton County Health Department
            </Heading>
            <Text color="gray.700">
              The Fulton County Health Department provides a wide range of public health services, including immunizations, food safety inspections, and disease prevention programs.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
              Mental Health Services
            </Heading>
            <Text color="gray.700">
              Fulton County offers a variety of mental health services, including counseling, therapy, and support groups.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 