import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Image, 
  Link as ChakraLink 
} from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/bizgro-skills")({
  component: BizgroSkillsPage,
});

function BizgroSkillsPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Image
            src="/images/bizgro.jpeg"
            alt="Sharpen Skills with BizGro"
            mb={8}
            w="33%"
            maxH="106px"
            objectFit="contain"
            mx="auto"
          />
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
            Sharpen Your Biz Skills
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            FEDCO offers a variety of ways for you to increase your business knowledge.
          </Text>
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            NxLevel Business Planning & Management Course
          </Heading>
          <Text color="gray.700" mb={4}>
            The Course for building your business
          </Text>
          <Text color="gray.700" mb={6}>
            Offered spring and fall each year. This in-depth course exposes students to best practices of business management and business planning. Topics include: developing your business plan (you will complete one in this class), marketing, financial statements, financing your business and much more.
          </Text>
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Business Counseling
          </Heading>
          <Text color="gray.700" mb={4}>
            FREE, monthly, one on one business counseling with an experienced counselor from the Indiana Small Business Development Center. The counselors offer expert advice on a wide range of topics to new or existing business owners. Meetings by appointment only.
          </Text>
          <Text mb={6} display="block">
            <span style={{ fontStyle: 'italic' }}>
              To schedule your appointment with the Indiana Small Business Development Center visit the
            </span>{' '}
            <a href="https://www.isbdc.org/locations/north-central-indiana-sbdc" target="_blank" rel="noopener noreferrer" style={{ color: '#6bbf4e', textDecoration: 'underline' }}>ISBDC website</a>. Click on, <span style={{ color: 'black', textDecoration: 'none', fontStyle: 'normal' }}>Let's Work Together</span> on the top right or call (574) 520-4126.
          </Text>
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Local Seminars
          </Heading>
          <Text color="gray.700" mb={2}>
            FEDCO regularly offers seminars on business related topics. Past topics have included QuickBooks, customer service, marketing, retail development, restaurant management, and social media.
          </Text>
          <Text color="gray.700" mb={6}>
            <Link to="/events" className="main-link">
              Check out upcoming biz events for current seminars.
            </Link>
          </Text>
          <Heading as="h2" fontSize="lg" color="#232883" fontWeight="bold" mb={2} mt={8}>
            CONTACT
          </Heading>
          <Text color="gray.700" mb={1}>
            For more information about any of FEDCO's resources for small business, please contact Amy Beechy, Director of Entrepreneurial Programs:
          </Text>
          <Box color="gray.700" fontSize="md" mb={2}>
            <Text><b>Phone:</b> (574) 709-7955</Text>
            <Text><b>Email:</b> <a href="mailto:amy@projectmattersllc.com" style={{ color: "#232883", fontWeight: "bold", textDecoration: "underline" }}>amy@projectmattersllc.com</a></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 