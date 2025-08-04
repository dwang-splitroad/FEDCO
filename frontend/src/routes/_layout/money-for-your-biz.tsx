import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/money-for-your-biz")({
  component: MoneyForYourBizPage,
});

function MoneyForYourBizPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box bg="gray.50" p={{ base: 6, md: 12 }}>
        {/* Main Content - Full Width */}
        <Box>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
            Money For Your Biz
          </Heading>
          <Text color="gray.700" mb={6}>
            You have options; <b>especially</b> in Fulton County.
          </Text>
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
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
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            SBA Loans
          </Heading>
          <Text color="gray.700" mb={4}>
            Small Business Administration supported loans. SBA does not actually make direct loans; instead, it provides loan guarantees to entrepreneurs, promising the bank/lender to pay back a certain percentage of your loan if you are unable to. Banks participate in the SBA program as regular, certified or preferred lenders.{' '}
            <ChakraLink
              href="https://www.sba.gov/funding-programs/loans/lender-match-connects-you-lenders"
              color="#6bbf4e"
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: "underline", color: "#232883" }}
            >
              Click here to find the best lender for your needs.
            </ChakraLink>
          </Text>
          <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>
            Training Funds
          </Heading>
          <Text color="gray.700" mb={4}>
            Listen up! This is unique money available to business owners in Fulton County.
          </Text>
          <Text color="gray.700" mb={4}>
            Through a grant from the USDA, FEDCO can pay for training needs of our small businesses with less than 50 employees and less than $1 million in gross annual sales. This money does not have to be repaid.
          </Text>
          <Text color="gray.700" mb={0}>
            Eligible Activities for training funds: Market research, consulting services, service training, education, related trade show associations, conferences. Clients have used these funds for various training, including QuickBooks, industry certifications, and learning more about using social media.
          </Text>
        </Box>
      </Box>
    </Box>
  );
} 