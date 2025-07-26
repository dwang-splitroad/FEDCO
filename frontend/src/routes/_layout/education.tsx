import React from "react";
import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

const lifeInFultonLinks = [
  { label: "Quick Facts", to: "/quick-facts" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Education", to: "/education" },
  { label: "Utilities", to: "/utilities" },
  { label: "Things to Do", href: "https://fultoncountyindiana.com/" },
];

function Sidebar({ current }: { current: string }) {
  return (
    <VStack align="flex-start" gap={2} minW="220px" mt={2} mb={8}>
      <Text fontWeight="bold" fontSize="sm" color="#232883" letterSpacing="wider" mb={2}>
        LIFE IN FULTON COUNTY
      </Text>
      {lifeInFultonLinks.map((link) =>
        link.to ? (
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
        ) : (
          <ChakraLink
            href={link.href}
            key={link.label}
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
              {link.label}
            </Text>
          </ChakraLink>
        )
      )}
    </VStack>
  );
}

function EducationPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Education"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
              Primary Education
            </Heading>
            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={1} mt={4}>
              Caston School Corporation
            </Heading>
            <Text mb={0}>
              Offerings: Ag/FFA, PLTW Engineering & Biomedical Sciences and Governor’s Work Ethic Certificate
            </Text>
            <ChakraLink href="https://www.caston.k12.in.us/" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.caston.k12.in.us</ChakraLink>
            <Text mb={0}>PO Box 8, Fulton, IN 46931</Text>
            <Text mb={4}>574-857-3500</Text>

            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={1} mt={4}>
              Rochester School Corporation
            </Heading>
            <Text mb={0}>
              Offerings: CTE, JAG, Agriculture, PLTW Engineering, Biomedical Sciences & Computer Science, Governor’s Work Ethic Certificate and Future McBright Program
            </Text>
            <ChakraLink href="https://www.rochesterschools.com/" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.rochesterschools.com</ChakraLink>
            <Text mb={0}>800 Pontiac St., Rochester, IN 46975</Text>
            <Text mb={4}>574-223-2176</Text>

            <Heading as="h2" fontSize="lg" color="#e07a22" fontWeight="bold" mb={1} mt={4}>
              Tippecanoe Valley School Corporation
            </Heading>
            <Text mb={0}>
              Offerings: CTE, JAG, Agriculture, Animal Sciences, Building Trades, Precision Machine Technology, Welding, PLTW Engineering/Biomedical Sciences & Computer Science and Governor’s Work Ethic Certificate
            </Text>
            <ChakraLink href="https://tippecanoevalleyschools.com/" color="#6bbf4e" target="_blank" rel="noopener noreferrer">www.tippecanoevalleyschools.com</ChakraLink>
            <Text mb={0}>8343 South State Road 19, Akron, IN 46910</Text>
            <Text mb={4}>574-598-2765</Text>

            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6} mt={10}>
              Higher Education
            </Heading>
            <Text color="#232883" fontWeight="bold" mt={4} mb={2}>Within 50 miles of Fulton County</Text>
            <Heading as="h2" fontSize="md" color="#e07a22" fontWeight="bold" mb={1} mt={4}>
              2 Year/Associate Degrees
            </Heading>
            <Text mb={0}>Ivy Tech Community College</Text>
            <Text mb={0}>Branches in Logansport, Kokomo, Peru, South Bend, Warsaw, IN</Text>
            <Text mb={0}>Ancilla College</Text>
            <Text mb={4}>Plymouth, IN</Text>
            <Heading as="h2" fontSize="md" color="#e07a22" fontWeight="bold" mb={1} mt={4}>
              4 Year/Undergraduate Degrees
            </Heading>
            <Text mb={0}>University of Notre Dame</Text>
            <Text mb={0}>Indiana University</Text>
            <Text mb={0}>Fort Wayne, Warsaw, IN</Text>
            <Text mb={0}>Indiana Tech</Text>
            <Text mb={0}>Fort Wayne, IN</Text>
            <Text mb={0}>Bethel University</Text>
            <Text mb={0}>Holy Cross College</Text>
            <Text mb={0}>Saint Mary’s College</Text>
            <Text mb={0}>South Bend, IN</Text>
            <Text mb={0}>Indiana Wesleyan University</Text>
            <Text mb={0}>Marion, IN</Text>
            <Text mb={0}>Manchester University</Text>
            <Text mb={0}>North Manchester, IN</Text>
            <Text mb={0}>Huntington University</Text>
            <Text mb={0}>Huntington, IN</Text>
            <Text mb={0}>Grace College</Text>
            <Text mb={0}>Winona Lake, IN</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/education")({
  component: EducationPage,
}); 