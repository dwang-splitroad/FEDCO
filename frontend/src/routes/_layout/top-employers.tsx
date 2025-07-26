import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
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
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current={"Top Employers"} />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6} letterSpacing="wide">
              Top Employers in Fulton County
            </Heading>
            <VStack align="stretch" spacing={2}>
              {employers.map(([name, desc]) => (
                <Text key={name} fontSize="md" mb={1}>
                  <Box as="span" fontWeight="bold" color="#232883">{name}</Box>{desc ? <Box as="span" color="#232323"> {desc}</Box> : null}
                </Text>
              ))}
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export const Route = createFileRoute("/_layout/top-employers")({
  component: TopEmployersPage,
}); 