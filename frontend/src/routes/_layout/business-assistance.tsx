import { 
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link as ChakraLink,
  Grid,
  GridItem,
  Button,
  Input,
  Container
} from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/_layout/business-assistance")({
  component: BusinessAssistancePage,
});

function BusinessAssistancePage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const onSubmit = () => {
    reset();
    alert("Thank you for signing up! You'll receive updates soon.");
  };

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      {/* Full Width Container for Sidebar + Centered Content */}
      <Container maxW="7xl" py={0}>
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 8 }} align="flex-start" justify="center">
          
          {/* Centered Content Area (Hero + Main Content) */}
          <Box flex={1} maxW="900px" w="100%" mx="auto">
            {/* Hero */}
            <Box
              bg="#273776"
              color="white"
              py={{ base: 8, md: 12 }}
              boxShadow="md"
              borderRadius="xl"
              mb={{ base: 8, md: 10 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center">
                We Help New and Existing Businesses
              </Heading>
            </Box>

            {/* Main Content */}
            <Box bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
              
              {/* Section: Education & Counseling (from BizGro Skills) */}
              <Box id="courses">
                <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
                  NxLevel Business Planning & Management Course
                </Heading>
                <Text color="gray.700" mb={4}>
                  The Course for building your business
                </Text>
                <Text color="gray.700" mb={6}>
                  Offered spring and fall each year. This in-depth course exposes students to best practices of business management and business planning. Topics include: developing your business plan (you will complete one in this class), marketing, financial statements, financing your business and much more.
                </Text>
              </Box>

              <Box id="counseling">
                <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
                  Business Counseling
                </Heading>
                <Text color="gray.700" mb={4}>
                  FREE, monthly, one on one business counseling with an experienced counselor from the Indiana Small Business Development Center. The counselors offer expert advice on a wide range of topics to new or existing business owners. Meetings by appointment only.
                </Text>
                <Text mb={6} display="block">
                  <span style={{ fontStyle: 'italic' }}>
                    To schedule your appointment with the Indiana Small Business Development Center visit the
                  </span>{' '}
                  <a href="https://www.isbdc.org/locations/north-central-indiana-sbdc" target="_blank" rel="noopener noreferrer" style={{ color: '#649b42', textDecoration: 'underline' }}>ISBDC website</a>. Click on, <span style={{ color: 'black', textDecoration: 'none', fontStyle: 'normal' }}>Let's Work Together</span> on the top right or call (574) 520-4126.
                </Text>

                <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
                  Local Seminars
                </Heading>
                <Text color="gray.700" mb={2}>
                  FEDCO regularly offers seminars on business related topics. Past topics have included QuickBooks, customer service, marketing, retail development, restaurant management, and social media.
                </Text>
                <Text color="gray.700" mb={6}>
                  <Link to="/events" className="main-link" style={{ color: '#649b42' }}>
                    Check out upcoming biz events for current seminars.
                  </Link>
                </Text>
              </Box>

              {/* Section: Funding (from Money For Your Biz) */}
              <Box id="funding">
                <Heading as="h2" fontSize="xl" color="#ffc107" fontWeight="bold" mb={3}>
                  Funding and Financial Support
                </Heading>
                <Text color="gray.700" mb={4}>
                  You have options; <b>especially</b> in Fulton County.
                </Text>

                <Heading as="h3" fontSize="lg" color="#273776" fontWeight="bold" mb={2}>
                  FEDCO's Loan Program
                </Heading>
                <Text color="gray.700" mb={4}>
                  Thanks to funding from the USDA, FEDCO has a low interest revolving loan pool for businesses with less than 50 employees and less than $1 million in gross annual sales located in Fulton County. Funds can be used for a variety of business-related expenses.
                </Text>
                <Text color="gray.700" mb={4}>
                  Start up businesses (less than 2 years old) are strongly encouraged to complete FEDCO's NxLevel Business Planning and Management course and complete a business plan from the course or you may submit an approved business plan to apply.
                </Text>
                <Text color="gray.700" mb={6}>
                  Existing business (2 years or older) may apply directly.
                </Text>

                <Heading as="h3" fontSize="lg" color="#273776" fontWeight="bold" mb={2}>
                  SBA Loans
                </Heading>
                <Text color="gray.700" mb={4}>
                  Small Business Administration supported loans. SBA does not actually make direct loans; instead, it provides loan guarantees to entrepreneurs, promising the bank/lender to pay back a certain percentage of your loan if you are unable to. Banks participate in the SBA program as regular, certified or preferred lenders.{' '}
                  <ChakraLink
                    href="https://www.sba.gov/funding-programs/loans/lender-match-connects-you-lenders"
                    color="#649b42"
                    fontWeight="bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "underline", color: "#273776" }}
                  >
                    Click here to find the best lender for your needs.
                  </ChakraLink>
                </Text>

                <Heading as="h3" fontSize="lg" color="#273776" fontWeight="bold" mb={2}>
                  Training Funds
                </Heading>
                <Text color="gray.700" mb={4}>
                  Through a grant from the USDA, FEDCO can pay for training needs of our small businesses with less than 50 employees and less than $1 million in gross annual sales. This money does not have to be repaid.
                </Text>
                <Text color="gray.700" mb={6}>
                  Eligible activities for training funds include market research, consulting services, service training, education, related trade show associations, and conferences. Clients have used these funds for various training, including QuickBooks, industry certifications, and social media.
                </Text>
              </Box>

              {/* Contact */}
              <Heading as="h2" fontSize="lg" color="#273776" fontWeight="bold" mb={2} mt={8}>
                Contact
              </Heading>
              <Flex 
                direction={{ base: "column", md: "row" }} 
                align={{ base: "center", md: "flex-start" }} 
                gap={6} 
                mt={4}
                mb={8}
              >
                <Image
                  src="/images/Amyheadshothead2Red2023.jpg"
                  alt="Amy Beechy, Director of Entrepreneurial Programs"
                  w={{ base: "220px", md: "200px" }}
                  h={{ base: "220px", md: "200px" }}
                  borderRadius="full"
                  objectFit="cover"
                  boxShadow="lg"
                  flexShrink={0}
                />
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                  <Text color="gray.700" mb={3} fontSize="md">
                    For more information about small business assistance, please contact Amy Beechy, Director of Entrepreneurial Programs:
                  </Text>
                  <Box color="gray.700" fontSize="md" mb={2}>
                    <Text mb={1}><b>Phone:</b> (574) 709-7955</Text>
                    <Text><b>Email:</b> <a href="mailto:amy@projectmattersllc.com" style={{ color: "#273776", fontWeight: "bold", textDecoration: "underline" }}>amy@projectmattersllc.com</a></Text>
                  </Box>
                </Box>
              </Flex>
            </Box>

            {/* Signup: Sign up for Updates - Centered Below Main Content */}
            <Box id="signup" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 10 }} mt={8}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" textAlign="center" mb={2}>
                Sign up for Updates
              </Heading>
              <Text color="gray.700" textAlign="center" mb={8}>
                Receive updates about the latest resources for small businesses.
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Text fontWeight="bold" mb={1}>
                  Name <Text as="span" fontWeight="normal" fontSize="sm">(required)</Text>
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={4}>
                  <GridItem>
                    <Text fontSize="xs" mb={1}>First Name</Text>
                    <Input {...register("firstName", { required: true })} placeholder="First Name" />
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs" mb={1}>Last Name</Text>
                    <Input {...register("lastName", { required: true })} placeholder="Last Name" />
                  </GridItem>
                </Grid>
                <Text fontWeight="bold" mb={1}>
                  Email Address <Text as="span" fontWeight="normal" fontSize="sm">(required)</Text>
                </Text>
                <Input {...register("email", { required: true })} placeholder="Email Address" mb={4} />
                <Text fontWeight="bold" mb={1}>
                  Cell #
                </Text>
                <Input {...register("cell", { required: false })} placeholder="Cell #" mb={8} />
                <Flex justify="flex-start">
                  <Button type="submit" bg="#649b42" color="white" _hover={{ bg: "#5a8a3a" }} size="lg" w="56" loading={isSubmitting} fontWeight="normal" letterSpacing={2}>
                    SIGN ME UP!
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 