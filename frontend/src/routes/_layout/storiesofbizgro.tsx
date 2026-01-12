import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/storiesofbizgro")({
  component: StoriesOfBizGroPage,
});

function StoriesOfBizGroPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#273776" fontWeight="bold" mb={6}>
            Stories of BizGro
          </Heading>

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Stories of BizGro: Newby Services</Heading>
          <Text color="gray.700" mb={4}>
            Newby Services is a locally owned heating and cooling business located in Rochester, IN. Owner, Andy Newby, got his start working with his father-in-law, who taught him how to work on heating and cooling systems. After about a year of working with family, Andy decided he wanted to branch out and start his own business. The only problem was he didn't know how to start a business.
          </Text>
          <Text color="gray.700" mb={4}>
            "I attended the NxLevel Business Planning and Management Course offered in the spring of 2021. After completing that course, I felt I had the tools I needed to go into business." - Andy Newby
          </Text>
          <Text color="gray.700" mb={4}>
            Andy launched his business in the summer of 2021 and has been growing a steady clientele since. You can find him on <a href="https://www.facebook.com/profile.php?id=100063733353729#" style={{ color: "#649b42", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">Facebook!</a>
            </Text>
          <Text color="gray.700" mb={4}>
            Small business classes and counseling are part of the <a href="/business-assistance" style={{ color: '#649b42', textDecoration: 'underline' }}>Business Assistance at FEDCO</a>.
            </Text>
          <Text color="gray.700" mb={4}>
            To learn more about business assistance, please contact Amy Beechy at <a href="mailto:amy@projectmattersllc.com" style={{ color: '#649b42', textDecoration: 'underline' }}>amy@projectmattersllc.com</a>.
            </Text>
          <Text color="gray.700" mb={4}>
            BizGro is funded in part by a grant from{' '}
            <a href="https://www.flagstar.com" style={{ color: '#649b42', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Flagstar® Bank</a>{' '}
            and the USDA.
            </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Stories of BizGro: Rochester Boat Company</Heading>
          <Text color="gray.700" mb={4}>
            Rochester Boat Company is a locally owned business that does marine repair and sales. It is owned and operated by Michael and Ashley Ladd. Michael has been a marine mechanic since 2003. When the opportunity arose to purchase the business from the previous owner, Michael and Ashley jumped on it.
          </Text>
          <Text color="gray.700" mb={4}>
            The Ladds were able to utilize FEDCO's low-interest loan program to purchase the business. "It was a simple process that helped us get our business started." - Ashley Ladd
          </Text>
          <Text color="gray.700" mb={4}>
            Rochester Boat has since expanded to a larger building and has brought on another mechanic. Visit their website for sales and services at <a href="https://www.rochesterboatcompany.com" style={{ color: "#649b42", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">rochesterboatcompany.com</a>. Follow them on <a href="https://www.facebook.com/profile.php?id=100027126236870#" style={{ color: '#649b42', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Facebook</a>! Give them a call at (574) 223-2675
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Stories of BizGro: Kline Performance Equine</Heading>
          <Text color="gray.700" mb={4}>
            Dr. Audrey Kline knew from a young age that she wanted to work on animals. While in college, she worked for an equine veterinarian and realized she wanted to work on large animals and specifically, horses.
          </Text>
          <Text color="gray.700" mb={4}>
            After completing vet school at Purdue, Dr. Kline moved back to the area and decided to start her own practice. Dr. Kline offers ambulatory services for a variety of livestock animals.
          </Text>
          <Text color="gray.700" mb={4}>
            "I knew I wanted to start my own business, but I didn't know how to write a business plan." - Dr. Audrey Kline
          </Text>
          <Text color="gray.700" mb={4}>
            Dr. Kline attended the NxLevel course in the fall of 2021. After completing the class, she launched her business. She said, "the class gave me the tools to write a business plan and I still refer back to it." She also took advantage of the free business counseling offered through the Indiana Small Business Development Center.
          </Text>
          <Text color="gray.700" mb={4}>
            Visit her on <a href="https://www.facebook.com/profile.php?id=100064651963883" style={{ color: '#649b42', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Facebook</a> and meet some of the livestock animals she works on!
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Stories of BizGro: Rochester Bagel & Coffee House</Heading>
          <Text color="gray.700" mb={4}>
            Rochester Bagel and Coffee House is a family-owned and run business located in the heart of Rochester. Owned and operated by Amy and Michael Roe. Amy has been working in the food industry since she was a teenager. After working in various establishments, she knew she wanted to own her own restaurant.
          </Text>
          <Text color="gray.700" mb={4}>
            "We were able to use the low-interest loan program through FEDCO to get the funding we needed to start our business. Without it, we wouldn't have been able to make our dreams a reality." - Amy Roe
          </Text>
          <Text color="gray.700" mb={4}>
            Rochester Bagel opened in 2017 and is still going strong. They are a beloved restaurant in the community.
            </Text>
          <Text color="gray.700" mb={1}><b>Like on Facebook:</b> <a href="https://www.facebook.com/RochesterBagel" style={{ color: "#649b42", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">@RochesterBagel</a></Text>
          <Text color="gray.700" mb={1}><b>Follow on Instagram:</b> <a href="https://www.instagram.com/thebagelshoproc" style={{ color: "#649b42", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">@thebagelshoproc</a></Text>
          <Text color="gray.700" mb={1}><b>Visit their website:</b> <a href="https://www.rochesterbagel.com" style={{ color: "#649b42", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">www.rochesterbagel.com</a></Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Hoffman Body Shop & Graphics</Heading>
          <Text color="gray.700" mb={4}>
            In 2021, Hoffman Body Shop celebrated its 50th Anniversary of serving Fulton County's residents. The family-owned business opened in 1971. In 2021, Hoffman's received a low-interest loan through FEDCO to update equipment and purchase a new state-of-the-art paint booth.
          </Text>
          <Text color="gray.700" mb={4}>
            The new equipment has helped the business expand its services, hire one new employee, and become more energy efficient.
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Jarrety's Place</Heading>
          <Text color="gray.700" mb={4}>
            After the local watering hole, Jarrety's Place, closed, the town of Akron was missing a place for the community to come together.
          </Text>
          <Text color="gray.700" mb={4}>
            Two local couples purchased the business and, with the help of a low-interest loan from FEDCO, remodeled the building, purchased new equipment, and reopened the restaurant.
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Manitou Marina</Heading>
          <Text color="gray.700" mb={4}>
            Manitou Marina is a full-service marina located on beautiful Lake Manitou in Rochester.
          </Text>
          <Text color="gray.700" mb={4}>
            Through the years, the marina has had several owners. In 2017, the marina received a low-interest loan from FEDCO to help with renovations and working capital. The loan helped the business get back on its feet and continue to be a staple in the community.
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Northern Traders</Heading>
          <Text color="gray.700" mb={4}>
            Northern Traders is a buyer and seller of goods such as tools, automotive parts, and household items. The business is located just north of Rochester.
          </Text>
          <Text color="gray.700" mb={4}>
            In 2017, the business received a low-interest loan to help with the purchase of the building and inventory.
          </Text>
          </Box>

        <Box as="hr" borderBottomWidth="1px" borderColor="gray.200" my={8} />

        <Box>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#ffc107" fontWeight="bold" mb={3}>Glitter Grooming</Heading>
          <Text color="gray.700" mb={4}>
            Glitter Grooming is a locally-owned pet grooming business in Rochester. In 2022, Glitter Grooming took advantage of our training funds to send one of their employees to grooming school.
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 