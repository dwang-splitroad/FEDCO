import { Box, Container, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

const whyFultonLinks = [
  { label: "Workforce", to: "/workforce" },
  { label: "Top Employers", to: "/top-employers" },
  { label: "Utilities", to: "/utilities" },
];

function Sidebar({ current }: { current: string }) {
  return (
    <VStack align="flex-start" gap={2} minW="220px" mt={2} mb={8}>
      <Text fontWeight="bold" fontSize="sm" color="#273776" letterSpacing="wider" mb={2}>
        FULTON COUNTY
      </Text>
      {whyFultonLinks.map((link) => (
        <Link to={link.to} key={link.to} style={{ width: "100%" }}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wider"
            color={link.label === current ? "#ffc107" : "#649b42"}
            _hover={{ color: link.label === current ? "#ffc107" : "#273776" }}
            textTransform="uppercase"
            transition="color 0.2s"
            py={0.5}
          >
            {link.label}
          </Text>
        </Link>
      ))}
    </VStack>
  );
}

function WorkforcePage() {
  const headers = [
    "County",
    "Labor Force",
    "Employed",
    "Unemployed",
    "Unemployment Rate",
    "Rate 1 Yr Ago",
  ];
  const data = [
    ["Starke", "10,173", "9,728", "445", "4.40%", "4.20%"],
    ["Marshall", "24,098", "23,284", "814", "3.40%", "3.20%"],
    ["Kosciusko", "44,015", "42,608", "1,407", "3.20%", "2.80%"],
    ["Pulaski", "6,889", "6,670", "219", "3.20%", "3.20%"],
    ["Fulton", "10,344", "10,031", "313", "3.00%", "3.30%"],
    ["Cass", "18,024", "17,391", "633", "3.50%", "3.60%"],
    ["Miami", "16,076", "15,424", "652", "4.10%", "3.70%"],
    ["Wabash", "14,945", "14,432", "513", "3.40%", "3.60%"],
    ["REGION", "144,564", "139,568", "4,996", "3.50%", "3.30%"],
  ];
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="7xl" py={10}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Workforce"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6}>
              Workforce
            </Heading>
            <Text color="gray.700" mb={6}>
              <ChakraLink href="https://www.in.gov/dwd/files/Indiana-LMA-June+2019+Labor+Market+Review.pdf" color="#649b42" target="_blank" rel="noopener noreferrer">
                Click here for a full Labor Market Review
              </ChakraLink> by Indiana Workforce Development
            </Text>
            <Box overflowX="auto" bg="white" p={4} borderRadius="md" boxShadow="md">
              <Box
                display="grid"
                gridTemplateColumns="repeat(6, 1fr)"
                borderRadius="md"
                border="1px solid #d9d9d9"
                minW="700px"
              >
                {/* Header Row */}
                {headers.map((header, i) => (
                  <Box
                    key={header}
                    bg="#ffc107"
                    color="white"
                    fontWeight="bold"
                    fontSize="md"
                    px={4}
                    py={3}
                    borderRight={i < headers.length - 1 ? "1px solid #fff" : undefined}
                    borderBottom="1px solid #fff"
                    textAlign="left"
                  >
                    {header}
                  </Box>
                ))}
                {/* Data Rows */}
                {data.map((row, rowIdx) =>
                  row.map((cell, colIdx) => (
                    <Box
                      key={rowIdx + cell}
                      bg={colIdx === 0 ? "#649b42" : "white"}
                      color={colIdx === 0 ? "white" : "gray.800"}
                      fontWeight={colIdx === 0 ? "bold" : "normal"}
                      px={4}
                      py={3}
                      borderRight={colIdx < headers.length - 1 ? "1px solid #d9d9d9" : undefined}
                      borderBottom={rowIdx < data.length - 1 ? "1px solid #d9d9d9" : undefined}
                      textAlign={colIdx === 0 ? "left" : "right"}
                    >
                      {cell}
                    </Box>
                  ))
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/workforce")({
  component: WorkforcePage,
}); 