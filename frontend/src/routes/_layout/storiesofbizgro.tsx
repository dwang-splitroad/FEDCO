import { Box, Container, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/storiesofbizgro")({
  component: StoriesOfBizgroPage,
});

const smallBizLinks = [
  { label: "Sharpen Skills with BizGro", to: "/bizgro-skills" },
  { label: "Money for Your Biz", to: "/money-for-your-biz" },
  { label: "Stories of BizGro", to: "/storiesofbizgro" },
];

function Sidebar({ current }: { current: string }) {
  return (
    <VStack align="flex-start" gap={2} minW="220px" mt={2} mb={8}>
      <Text fontWeight="bold" fontSize="sm" color="#232883" letterSpacing="wider" mb={2}>
        SMALL BIZ
      </Text>
      {smallBizLinks.map((link) => (
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

function StoriesOfBizgroPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl" bg="white" borderRadius="xl" boxShadow="xl" p={{ base: 6, md: 12 }}>
        <Box display={{ md: "flex" }}>
          {/* Sidebar */}
          <Box minW="220px" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
            <Sidebar current="Stories of BizGro" />
          </Box>
          {/* Main Content */}
          <Box flex={1}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="#232883" fontWeight="bold" mb={6}>
              Stories of BizGro
            </Heading>

            {/* Article 1: Newby Services */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">August 29, 2022</Text></Box>
              {/* Header/Feature Image */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Newby+Services.png" alt="Newby Services Header" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Having the work experience and valuable skill sets in an industrial trade makes a person very valuable and marketable in today’s society. After spending years working for a commercial electrical cooperative and feeling the desire to build something that gave him pride and ownership, Rusty Newby “jumped” into an entrepreneurial endeavor he never thought was possible. Newby Services offers repairs, new installs and upgrades for commercial and agricultural clients, service & repair to private power lines, underground trenching and electrical contracting.</Text>
              {/* Portrait Image (Full Width) */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9213.jpg" alt="Rusty Newby Portrait" style={{ width: "100%", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Newby knew that running a business was going to take more than just being a skilled tradesman. Prior to owning his business, Newby claims,</Text>
              <Text color="gray.700" fontStyle="italic" mb={4}>
                “I just knew how to work. I showed up to work and someone else did the behind the scenes things. Now, it’s all me.”
              </Text>
              {/* Three Images in a Row */}
              <Flex gap={2} mb={4}>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_9185.jpg" alt="Newby Services Truck 1" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_9186.jpg" alt="Newby Services Truck 2" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_9225.jpg" alt="Newby Services Truck 3" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
              </Flex>
              <Text color="gray.700" mb={4}>Before getting engaged with BizGro by FEDCO’s programming and resources, Newby stated he knew nothing about running a business. By taking the NxLevel Business Planning and Management Course, not only was Newby taught the basics of running a business and time management, the course provided him with the confidence that he had many, very marketable, unique skill sets. Knowing he could achieve more, Newby was challenged by the course contents to reevaluate his worth and what he could offer which shifted the direction of his business.</Text>
              <Text color="gray.700" mb={4}>Being an entrepreneur is risky business. However, through the NxLevel class, Newby found security in learning how to write a business plan that included a backup plan, setting up a business banking account, finding a good accountant and having peers in which he could network with and explore ideas.</Text>
              {/* Final Wide Image */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9205.jpg" alt="Newby Services Wide Shot" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>When asked what advice he’d give to a new entrepreneur, Newby replied,</Text>
              <Text color="gray.700" fontStyle="italic" mb={4}>“They need to have confidence. If they are on the fence, they need to just jump.”</Text>
              <Text color="gray.700" mb={4}>To find out more about Newby Services follow them on <a href="https://www.facebook.com/profile.php?id=100063733353729#" style={{ color: "#6bbf4e", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">Facebook!</a></Text>
              <Text color="gray.700" fontWeight="bold">Give them a call at (574) 930-6316</Text>
            </Box>
            {/* Info & Sponsor Section */}
            <Box mt={8} mb={12} maxW="2xl">
              <Text color="gray.700" fontSize="md" mb={3}>
                If you were inspired by Rusty’s story and would like more information on BizGro’s resources, visit{' '}
                <a href="/bizgro-skills" style={{ color: '#6bbf4e', textDecoration: 'underline' }}>BizGro by FEDCO’s Website</a>.
              </Text>
              <Text color="gray.700" fontSize="md" mb={3}>
                To sign up or find out details for the NxLevel Business Planning & Management Course, contact Amy Beechy at 574-709-7955 or{' '}
                <a href="mailto:amy@projectmattersllc.com" style={{ color: '#6bbf4e', textDecoration: 'underline' }}>amy@projectmattersllc.com</a>
              </Text>
              <Text color="gray.800" fontWeight="bold" mt={6}>
                Thank you to{' '}
                <a href="https://www.flagstar.com" style={{ color: '#6bbf4e', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Flagstar® Bank</a>{' '}
                for sponsoring the Stories of BizGro!
              </Text>
            </Box>

            {/* Article 2: Rochester Boat Company */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">August 22, 2022</Text></Box>
              {/* Rochester Boat Company logo/image right below date, full width */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Boat+Company.png" alt="Rochester Boat Company Logo" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12, background: '#fff' }} /></Box>
              <Text color="gray.700" mb={4}>After purchasing a home on beautiful Lake Manitou, Shane and Lisa Reffett quickly realized the lack of lakefront services available to the community. In 2008, they decided to start providing their own dock and lift service, eventually branching out to other friends and family. Fast forward to fourteen employees later, Rochester Boat Company was established, now offering a variety of services to the local lake community including dock & lift: sales, service, installation, winter storage, sales & service: pontoons & boats. They are a proud OEM dealership for Crest, Suzuki and ShoreSation.</Text>
              {/* First image (full width) */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9109.jpg" alt="Rochester Boat Company Building" style={{ width: "100%", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Like most successful businesses starting out, Rochester Boat Company experienced their own set of unique challenges from learning how the backend of a business worked, finding & keeping good help along with growing pains. The Reffetts turned to BizGro by FEDCO’s BizGro business resources for help. Shane is a graduate of the NxLevel Business Planning and Management Course, a [now] five week program offered each fall and spring. Sharing about the class, Reffett stated, <i>“The NxLevel class definitely opened my eyes that there is a lot more to running a business than going out and just doing the work. There are financials, insurance, and a credit to establish, etc.”</i> The Reffetts credit the BizGro program with learning that their business had a unique set of insurance challenges and needs beyond the first business package the average insurance agency will sell.</Text>
              <Text color="gray.700" mb={4}>In addition, while taking the class, the Reffetts also learned how to receive a line of credit and received support and encouragement while expanding into a Suzuki and Crest Dealership. Shane really enjoyed how the business planning portion of the class helped him organize all aspects of the business. <i>“You can’t do it on your own. You need help. Each week of [The NxLevel class] builds off the other. It’s all put together in the end and gives you a clear path.”</i></Text>
              {/* OBS_9093.jpg now here */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9093.jpg" alt="Rochester Boat Company Owners" style={{ width: "100%", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>When asked what was one of the most important things the Reffetts learned from the NxLevel Business Planning and Management Course, they stated, <i>“To not grow past your ability to serve customers.”</i></Text>
              <Text color="gray.700" mb={4}>With the customer service tools and knowledge learned from the NxLevel class, Rochester Boat Company were winners of the <b>2021 Marine Industry Dealer Award from Crest</b>. This special award is only given to twenty dealerships across the country and the Reffetts attribute the BizGro program to this success.</Text>
              <Text color="gray.700" mb={4}>With their education and experience, the Reffetts are now a wealth of advice and knowledge to any beginning entrepreneur. When asked what advice they’d give to someone thinking about starting their own business, they said,</Text>
              <Text color="gray.700" fontStyle="italic" mb={4}>“Do a lot of research and be prepared to commit a lot of hours. Be sure to know when to get help. Make sure it’s something you enjoy doing. Not one person can run an entire business. Save your own money. Establish a critical foundation with a CPA, attorney and a banking institution. Be prepared to put in the time and effort.”</Text>
              <Text color="gray.700" mb={4}>To find out more about Rochester Boat Company, visit their website at <a href="https://rochesterboatcompany.com" style={{ color: "#6bbf4e", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">rochesterboatcompany.com</a>. Follow them on <a href="https://www.facebook.com/profile.php?id=100027126236870#" style={{ color: '#6bbf4e', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Facebook</a>! Give them a call at (574) 223-2675</Text>
              {/* OBS_9172.jpg now at the end */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9172.jpg" alt="Rochester Boat Company Shop" style={{ width: "100%", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
            </Box>

            {/* Article 3: Kline Performance Equine */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">August 15, 2022</Text></Box>
              {/* Main header image */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Bagel_Kline+Performance+Equine_Blog+Header@300x.png" alt="Kline Performance Equine Header" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Kline Performance Equine</Heading>
              <Text color="gray.700" mb={4}>Growing up with Tim’s Body Shop literally in her backyard, Lanae Kline was destined to be a successful entrepreneur like her dad. Horses have also been a huge part of Kline’s life. If you want to see her eyes sparkle, just ask her about them. With an interest in a unique service within the livestock industry, Kline put herself through training and certification in hand massage and Pulsed Electro-Magnetic Field (PEMF) therapy. Through word of mouth within the community and her strong customer service abilities, Kline found herself picking up more and more clients which led to the start of Kline Performance Equine. Now, Kline has combined her love for livestock and people, traveling all over to farms and livestock shows, delivering a non-invasive therapy that enhances metabolism, reduces stress, increases blood flow, improves overall health and aids in overcoming injuries. These benefits have proven to be a valuable asset to livestock in the show and performance industry.</Text>
              {/* OBS_8874.jpg (full width) */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_8874.jpg" alt="Kline Performance Equine" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>In the beginning, Kline struggled with confidence and believing in herself as an entrepreneur. With FEDCO’s BizGro programming, she was able to find support and resources to help her overcome the challenges many beginning entrepreneurs and small business owners face. With the support of the BizGro programming, Kline started using a variety of resources offered including the Small Business Administration’s (SBA) free business counseling program. Kline proudly stated, “Tracy with SBA was huge in making my dreams and ideas realistic.” Together, they were able to put together an existing cash flow and projection sheet that helped bring a clearer picture of the current success and the potential Kline’s business had. This boosted her confidence and allowed her to see her potential on paper.</Text>
              <Text color="gray.700" mb={4}>In addition to working on horses, Kline Performance Equine has branched out into other niches including showstock cattle, swine, sheep and goats. Through the tools of the BizGro’s NxLevel Business Planning and Management Course, a [now] five week course typically offered in the fall and spring, Kline was able to find her target audience and find ways to break into different niches such as show cattle. Feeling alone at times in her very niche line of work, Kline loved taking the Business Planning and Management class alongside other entrepreneurs who also had unique businesses or ideas. “Just the class itself really makes you feel supported,”  Kline shared.</Text>
              {/* Three images in a row */}
              <Flex gap={2} mb={4}>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8944.jpg" alt="Kline Performance Equine 1" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8868.jpg" alt="Kline Performance Equine 2" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8879.jpg" alt="Kline Performance Equine 3" style={{ width: "100%", maxHeight: 120, objectFit: "cover", borderRadius: 8 }} /></Box>
              </Flex>
              <Text color="gray.700" mb={4}>Not only did Kline utilize the business counseling program and the business planning class, she also took advantage of some of BizGro’s financial resources including the small business loan. Kline offers, “I never would have been able to go out and get a business loan from a bank because it would have been so much harder. I attribute my success and how far I have come with the support of FEDCO.”</Text>
              <Text color="gray.700" mb={4}>Like many small businesses during the Covid-19 pandemic, Kline faced a new set of challenges. Through BizGro’s resources, she felt like she was able to go through the unique, challenging time without being alone and she felt supported along the way. Kline feels that, “Everyone should be taking advantage of BizGro’s resources. The resources and options are endless and there is support out there.”</Text>
              {/* OBS_8926-2.jpg (full width) */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_8926-2.jpg" alt="Kline Performance Equine 4" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" fontStyle="italic" mb={4}>“Start small and keep it simple. Don’t get caught up in all the details. Don’t stress over the little things.”</Text>
              <Text color="gray.700" mb={4}>Follow Lanae on <a href="https://www.facebook.com/profile.php?id=100064651963883" style={{ color: '#6bbf4e', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Facebook</a> and meet some of the livestock animals she works on!</Text>
              <Text color="gray.700" fontWeight="bold">If you are interested in utilizing her services, call or text: (574) 551-0077</Text>
            </Box>

            {/* Article 4: Rochester Bagel & Coffee */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">August 8, 2022</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Bagel_Rochester+Bagel_Blog+Header@300x.png" alt="Rochester Bagel & Coffee" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Rochester Bagel & Coffee</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 5: Jarrety’s Gourmet Sandwiches and Catering */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7511.jpg" alt="Jarrety’s Gourmet Sandwiches and Catering" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Jarrety’s Gourmet Sandwiches and Catering</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 6: Manitou Marina */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7215.jpg" alt="Manitou Marina" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Manitou Marina</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 7: Miss Pamela’s – The Plus-Size Bridal Salon */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7369.jpg" alt="Miss Pamela’s – The Plus-Size Bridal Salon" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Miss Pamela’s – The Plus-Size Bridal Salon</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 8: Northern Traders */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7083.jpg" alt="Northern Traders" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Northern Traders</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 9: Glitter Grooming */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7427.jpg" alt="Glitter Grooming" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Glitter Grooming</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>

            {/* Article 10: Enid’s Cleaning Service */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Box mb={2}><Text fontSize="sm" color="gray.500">2017</Text></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/DSC08531-Edit.jpg" alt="Enid’s Cleaning Service" style={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Heading as="h2" fontSize="xl" color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Enid’s Cleaning Service</Heading>
              <Text color="gray.700" mb={4}>[Add full story content here based on the website. Placeholder for now.]</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 