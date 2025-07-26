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
      <Text fontWeight="bold" fontSize="sm" color="#232883" letterSpacing="wider" mb={2}>
        FULTON COUNTY
      </Text>
      {whyFultonLinks.map((link) => (
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
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Workforce"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
              Fulton County Labor Force
            </Heading>
            <Text mb={4}>
              <ChakraLink href="https://static1.squarespace.com/static/5947df59e3df28301b274b0b/t/5d653da33e77300001818457/1566916005424/June+2019+Labor+Market+Review.pdf" color="#6bbf4e" target="_blank" rel="noopener noreferrer">
                Click here for a full Labor Market Review
              </ChakraLink> by Indiana Workforce Development
            </Text>
            <Box overflowX="auto" mb={8}>
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
                    bg="#e07a22"
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
                      bg={colIdx === 0 ? "#6bbf4e" : "white"}
                      color={colIdx === 0 ? "white" : "#232323"}
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