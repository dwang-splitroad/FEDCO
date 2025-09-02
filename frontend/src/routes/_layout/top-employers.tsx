import { Box, Container, Heading, Text, VStack, Flex } from "@chakra-ui/react";
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

const employers = [
  ["Rochester Metal Products", "Foundry - Gray & Ductile Iron Castings"],
  ["LAU", "Centrifugal Blower Wheels"],
  ["Acument Global Technologies", "Cold Formed Fasteners"],
  ["Winamac Coil Spring Inc", "Mechanical Coil Springs"],
  ["Pike Lumber Co Inc", "Hardwood Dimension - Flooring Mills"],
  ["Walmart Supercenter", "Retail"],
  ["Topp Industries", "Fiberglass & Polyethylene Sump & Sewage Basins & Lift Stations"],
  ["Life Care Center of Rochester", "Healthcare"],
  ["Kroger", "Retail"],
  ["Woodlawn Hospital", "Healthcare"],
  ["Rochester Community Schools", "School"],
  ["Caston School Corporation", "School"],
  ["Tippecanoe Valley School Corporation", "School"],
  ["Ad-Vance Magnetics Inc", "Shielding-magnetic Electrostatic"],
  ["Airvac Inc", "Vacuum Collection Systems"],
  ["Sonoco Products Co", "Spiral Wound Paper Tubes, Paper Packaging Products"],
  ["Rochester Rotational Molding", "Rotational Molding"],
  ["American Axle & Manufacturing", "Global Tier 1 Automotive Supplier"],
  ["E & B Paving Grading", "Concrete Paving, Asphalt Paving"],
  ["RapidView", "Inspection solutions to the nuclear, petrochemical, industrial and municipal sewer industries"],
  ["Rochester Homes Inc", "Custom Modular Homes"],
  ["Whitley Manufacturing", "Modular Buildings"],
  ["Northern Indiana Industrial Coatings", "Metal Coating, Engraving and Allied Services"],
  ["Jobsite Mobile Offices", "Mobile Office Trailers and Construction Field Offices"],
];

function TopEmployersPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="7xl" py={10}>
        <Flex direction={{ base: "column", lg: "row" }} gap={8}>
          <Sidebar current="Top Employers" />
          <Box flex="1">
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6} letterSpacing="wide">
              Top Employers
            </Heading>
            <VStack align="stretch" gap={2}>
              {employers.map(([name, desc]) => (
                <Text fontSize="md" color="gray.700">
                  <Box as="span" fontWeight="bold" color="#273776">{name}</Box>{desc ? <Box as="span" color="#232323"> {desc}</Box> : null}
                </Text>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/top-employers")({
  component: TopEmployersPage,
}); 