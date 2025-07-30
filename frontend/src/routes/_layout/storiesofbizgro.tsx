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
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Newby Services</Heading>
              {/* Header/Feature Image */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Newby+Services.png" alt="Newby Services Header" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
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
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Rochester Boat Company</Heading>
              {/* Rochester Boat Company logo/image right below date, full width */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Boat+Company.png" alt="Rochester Boat Company Logo" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12, background: '#fff' }} /></Box>
              <Text color="gray.700" mb={4}>After purchasing a home on beautiful Lake Manitou, Shane and Lisa Reffett quickly realized the lack of lakefront services available to the community. In 2008, they decided to start providing their own dock and lift service, eventually branching out to other friends and family. Fast forward to fourteen employees later, Rochester Boat Company was established, now offering a variety of services to the local lake community including dock & lift: sales, service, installation, winter storage, sales & service: pontoons & boats. They are a proud OEM dealership for Crest, Suzuki and ShoreSation.</Text>
              {/* First image (full width) */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9109.jpg" alt="Rochester Boat Company Building" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
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
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Kline Performance Equine</Heading>
              {/* Main header image */}
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Bagel_Kline+Performance+Equine_Blog+Header@300x.png" alt="Kline Performance Equine Header" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
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

            {/* Article 4: Rochester Bagel & Coffee (August 8, 2022) */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Stories of BizGro: Rochester Bagel & Coffee House</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/Rochester+Bagel_Rochester+Bagel_Blog+Header@300x.png" alt="Rochester Bagel & Coffee" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>When the original Rochester Bagel & Coffee House came up for sale, Pia Cannedy found herself in an unexpected business agreement with her three school-aged children. Begging her to buy the local business, Cannedy agreed as long as they would help put in the work.</Text>
              <Text color="gray.700" mb={4}>Driving through Rochester, Indiana’s main stretch, you’ll pass by Rochester Bagel & Coffee House, yearning to stop by and read a book under the charming red umbrellas sprinkled around their newly-built patio. Now offering something for everyone, Rochester Bagel & Coffee House serves homemade, fresh bagels and spreads, baked goods including cinnamon rolls and scones, breakfast and lunch items along with specialty coffee drinks and jet teas.</Text>
              <Text color="gray.700" mb={4}>After purchasing the business, one of the largest challenges and questions Cannedy faced was: How to pull revenue in to keep the doors open in a small town? It was then, when she turned to BizGro by FEDCO’s many resources to help overcome that challenge and other obstacles. By attending the NxLevel Business Planning & Management Course, Cannedy learned how to put together a business plan that allowed her dreams to become a reality.</Text>
              {/* Horizontal grid 1:1:1 */}
              <Flex gap={2} mb={4}>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8982.jpg" alt="Bagel Shop 1" style={{ width: "100%", height: "auto", maxHeight: 180, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8994.jpg" alt="Bagel Shop 2" style={{ width: "100%", height: "auto", maxHeight: 180, objectFit: "cover", borderRadius: 8 }} /></Box>
                <Box flex={1}><img src="/images/storiesofbizgro/article pictures/OBS_8996.jpg" alt="Bagel Shop 3" style={{ width: "100%", height: "auto", maxHeight: 180, objectFit: "cover", borderRadius: 8 }} /></Box>
              </Flex>
              <Text color="gray.700" mb={4}>Now making up a majority of the revenue, transitioning lunch into the business plan was one of the successful ideas that came out of the business planning portion of the course. “I actually got to bring lunch items for taste-testing to the class,” Cannedy excitedly shared when talking about her network of fellow entrepreneurs who took the course alongside her. “It was unique to have a table of professionals making up a variety of business owners in different seasons. You got to put your ideas out there. Everyone had an opinion and you could take it or leave it. You weren't left on your own.”</Text>
              <Text color="gray.700" mb={4}>Another value-added business decision Cannedy made with the help of the BizGro by FEDCO programming was the outdoor patio space. “The patio was out of my comfort zone but the  best decision that was ever made,” Cannedy said.</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_8962-2.jpg" alt="Bagel Shop Patio 1" style={{ width: "100%", height: "auto", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_8966-2.jpg" alt="Bagel Shop Patio 2" style={{ width: "100%", height: "auto", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Now, as Cannedy’s kids have gotten older and are starting to take more active roles in the business, she looks forward to putting them through the NxLevel course someday. “I just think it’s a very important program - it’s very vast for any business person. I grew up in California and I’ve never seen any program like it. I came in with a lot more confidence than I probably would have had on my own. Where else would you find that?”</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_9055.jpg" alt="Bagel Shop Family" style={{ width: "100%", height: "auto", maxHeight: 340, objectFit: "cover", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>When asked what advice she’d give a beginning entrepreneur, Cannedy stated:</Text>
              <Text color="gray.700" fontStyle="italic" mb={4}>
                “If you never take that chance, you will never find that success. You have to get over the fear and set it aside.”
              </Text>
              <Text color="gray.700" mb={2}>Stay up to date with what’s going on at Rochester Bagel & Coffee House!</Text>
              <Text color="gray.700" mb={1}><b>Like on Facebook:</b> <a href="https://www.facebook.com/RochesterBagel" style={{ color: "#6bbf4e", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">@RochesterBagel</a></Text>
              <Text color="gray.700" mb={1}><b>Follow on Instagram:</b> <a href="https://www.instagram.com/thebagelshoproc" style={{ color: "#6bbf4e", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">@thebagelshoproc</a></Text>
              <Text color="gray.700" mb={1}><b>Visit their website:</b> <a href="https://www.rochesterbagel.com" style={{ color: "#6bbf4e", fontWeight: "bold" }} target="_blank" rel="noopener noreferrer">www.rochesterbagel.com</a></Text>
              <Text color="gray.700" mb={1}><b>Call:</b> (574) 223-4100</Text>
            </Box>
                {/* Article 5: Hoffman Body Shop & Graphics */}
              <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Hoffman Body Shop & Graphics</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7591.jpg" alt="Left to right, Adam, Kim and Aaron Martin of Hoffman Body Shop and Graphics." style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.600" fontSize="sm" mb={4}>Left to right, Adam, Kim and Aaron Martin of Hoffman Body Shop and Graphics.</Text>
              <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="#232323" fontWeight="bold" mb={3}>He Does a (Car) Body Good</Heading>
              <Text color="gray.700" mb={4}>In 2012 Adam Martin gave life to the "graphics" part of Hoffman Body Shop and Graphics. Adam’s parents have owned Akron-based Hoffman Body Shop since 1997 and have grown it into a very successful small business.</Text>
              <Text color="gray.700" mb={4}>Adam wanted to make his own mark on the business and decided graphics was a good place to start. He carved out a small office space in the existing shop, bought a large format printer and cutter, and got to work! His services include graphic design and logo creation, graphics application for various products including ad specialties, clothing, and of course anything auto related; (think cool graphics on cars, motorcycles, race cars, trucks, trailers, semis, and even school buses!). Adam now has two printers, two employees and he occupies a much larger place in the shop. Working alongside his family, he serves customers all over Indiana.</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7551.jpg" alt="Adam at work in the shop" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Adam completed FEDCO's Business Planning Class and borrowed start up money from the low interest loan program. Adam proves there are always more opportunities out there and even successful existing businesses can identify new markets and expand their services.</Text>
            </Box>
            {/* Article 6: Jarrety’s Place */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Jarrety’s Place</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7511.jpg" alt="Jarrety’s Place" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Dawn Peterson opened Jarrety’s Gourmet Sandwiches and Catering in 2006. Located right in the heart of Downtown Rochester, Jarrety’s offers a coffee bar, sandwich shop and full-service catering.</Text>
              <Text color="gray.700" mb={4}>The restaurant quickly became THE place to go for food, outstanding customer service, and a positive atmosphere. Business was so good, in fact, they needed more space. In 2016, Dawn decided to double the size (and then some) of Jarrety’s, expanding it by 5800 square feet into the adjacent storefront and more than doubled the size of the kitchen. In addition to a larger kitchen for expanded catering, there is more restaurant space, a bar, and a large meeting area.</Text>
              <Text color="gray.700" mb={4}>Dawn has used FEDCO’s small business services along the way, including low interest loans, training funds, SBDC counseling, and she also completed FEDCO’s business planning class.</Text>
              <Text color="gray.700" mb={4}>Jarrety’s was also the winner of the 2014 FEDCO Business Plan Competition, as an existing business. We asked Dawn what advice she has for others who want to start a business….”When someone tells you no, keep going!” and she has.</Text>
            </Box>

            {/* Article 7: Manitou Marina */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Manitou Marina</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7256.jpg" alt="Mason and Aereka Heyde, owners of Manitou Marina" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.600" fontSize="sm" mb={4}>Mason and Aereka Heyde, owners of Manitou Marina</Text>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="#232323" fontWeight="bold" mb={3} textTransform="uppercase">They say one of the secrets of a successful business idea is to offer a product or service that solves a problem.</Heading>
              <Text color="gray.700" mb={4}>Mason and Aereka Heyde did just that. 660 homes sit along the banks of Lake Manitou in Rochester but there was no place on the lake to conveniently purchase gas for boats and watercraft. Mason had toyed with the idea for some time, then in spring of 2017, launched Manitou Marina.</Text>
              <Text color="gray.700" mb={4}>Located on Lake Manitou, Manitou Marina will be the only fueling station that is accessible by boat to lake dwellers. The first summer has proven to be a success with plans of expansion in the future.</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7215.jpg" alt="Manitou Marina" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Mason’s thoughts about the FEDCO program; “The business planning class was great; it really helped with cash flow and overall financials….and the loan program, you can’t really beat that!”, referring to the low interest loans. Mason and Aereka’s advice to new business owners “plan to spend more time than you think you will working on the business and working more hands on too.”</Text>
            </Box>

            {/* Article 8: Northern Traders */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Northern Traders</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7131.jpg" alt="Northern Traders owners, Alan and Sandra Bailey…and Roger." style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.600" fontSize="sm" mb={4}>Northern Traders owners, Alan and Sandra Bailey…and Roger.</Text>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="#232323" fontWeight="bold" mb={3} textTransform="uppercase">Treasures abound in this business.</Heading>
              <Text color="gray.700" mb={4}>Alan and Sandra Bailey transitioned a struggling furniture business into a bustling antique mall and flea market in 2013. Capitalizing on a love of antique treasure hunting, they set out offer Fulton County the finest in antique and flea market items….and they succeeded.</Text>
              <Text color="gray.700" mb={4}>Today Northern Traders has grown to accommodate over 100 vendor booths and they have a list of vendors waiting to get their products into the store. Through their vendors and their own finds, Northern Traders offers unique items (ask Sandra about camel saddles and a gold tooth some time) and attract customers from over 100 miles away. Their sweet dog, Roger has also become a part of the business and attracts his own fans to the store.</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7083.jpg" alt="Northern Traders" style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Sandra and Alan have utilized FEDCO’s resources of the NxLevel Business Planning Class and the loan fund along the way. “It’s difficult to say how much the FEDCO program has helped us, says Sandra. It saved our business and we wouldn’t be here today without the help from FEDCO. I’m so glad we did it.” When asked what advice she has for other business owners, Sandy emphasizes the importance of business planning. “The planning process really helped us decide where to spend our money and how to evaluate risks."</Text>
            </Box>

            {/* Article 9: Glitter Grooming */}
            <Box bg="gray.50" borderRadius="lg" boxShadow="md" p={{ base: 4, md: 8 }} mb={8} maxW="2xl">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="#e07a22" fontWeight="bold" mb={3}>Glitter Grooming</Heading>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7369.jpg" alt="Julie Zellers, owner of Glitter Grooming... and her 'assistant' Snoopy." style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.600" fontSize="sm" mb={4}>Julie Zellers, owner of Glitter Grooming... and her "assistant" Snoopy.</Text>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="#232323" fontWeight="bold" mb={3} textTransform="uppercase">Making Fulton County beautiful, one pooch at a time.</Heading>
              <Text color="gray.700" mb={4}>Julie Zellers, with support from her husband Jeff, started Glitter Grooming in 2014, offering “trendy” dog grooming services and pet products for pet owners in Fulton and surrounding counties.</Text>
              <Text color="gray.700" mb={4}>Glitter Grooming was a success from the start and Julie approached FEDCO to learn more about managing her growing business. She completed the NxLevel Business Planning Class, then became a loan client when Glitter Grooming needed to expand into a larger building and add more services including doggie daycare and dog boarding. Over 500 customers have used Glitter’s services and the list continues to grow.</Text>
              <Box mb={4}><img src="/images/storiesofbizgro/article pictures/OBS_7427.jpg" alt="Glitter Grooming" style={{ width: "100%", height: "auto", maxHeight: 600, objectFit: "contain", borderRadius: 12 }} /></Box>
              <Text color="gray.700" mb={4}>Julie describes the FEDCO business development program as “fantastic” and advises that small businesses “take advantage of everything FEDCO has to offer.” She especially values the counseling from the Small Business Development Center (SBDC). “Tracie Davis from the SBDC has been great. She has helped us through the expansion, where to start, requirements for retail sales; anything we needed.”</Text>
            </Box>


           
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 