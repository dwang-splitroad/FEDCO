import { 
  Flex, 
  useBreakpointValue,
  HStack,
  Text,
  Box,
  Menu,
  Portal
} from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { FiChevronDown } from "react-icons/fi"

function Navbar() {
  const display = useBreakpointValue({ base: "none", lg: "flex" })

  return (
    <Flex
      display={display}
      justify="space-between"
      position="sticky"
      top={0}
      zIndex={1000}
      color="white"
      align="center"
      bg="blue.800"
      w="100%"
      px={8}
      py={2}
      boxShadow="md"
    >
      {/* Logo Section */}
      <Link to="/">
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="white">
            FEDCO
          </Text>
          <Text fontSize="sm" color="blue.100">
            Fulton Economic Development
          </Text>
        </Box>
      </Link>

      {/* Navigation Menu */}
      <HStack gap={6} align="center">
        {/* HOME */}
        <Link to="/">
          <Text 
            fontSize="sm" 
            fontWeight="medium" 
            color="white" 
            _hover={{ color: "blue.200" }}
            px={3}
            py={2}
          >
            Home
          </Text>
        </Link>

        {/* Economic Development Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>Economic Development</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                <Menu.Item value="sites-buildings">
                  <Link to="/economic-development/sites-buildings">
                    <Text color="gray.800">Sites & Buildings</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="wage-survey">
                  <Link to="/economic-development/wage-survey">
                    <Text color="gray.800">Wage Survey</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="labor-statistics">
                  <a href="https://www.hoosierdata.in.gov" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Labor Statistics</Text>
                  </a>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* SMALL BIZ Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>Small Biz</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="250px">
                <Menu.Item value="bizgro-skills">
                  <Link to="/bizgro-skills">
                    <Text color="gray.800">Sharpen Skills with BizGro</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="money-for-your-biz">
                  <Link to="/money-for-your-biz">
                    <Text color="gray.800">Money for your Biz</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="events">
                  <Link to="/events">
                    <Text color="gray.800">Upcoming Biz Events</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="storiesofbizgro">
                  <Link to="/storiesofbizgro">
                    <Text color="gray.800">Stories of BizGro</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="updates">
                  <Link to="/updates">
                    <Text color="gray.800">Sign Up for Small Biz Updates</Text>
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* Workone (External Link) */}
        <a href="https://www.in.gov/dwd/" target="_blank" rel="noopener noreferrer">
          <Text 
            fontSize="sm" 
            fontWeight="medium" 
            color="white" 
            _hover={{ color: "blue.200" }}
            px={3}
            py={2}
          >
            Workone
          </Text>
        </a>

        {/* LIFE IN FULTON COUNTY Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>Life In Fulton County</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                <Menu.Item value="quick-facts">
                  <Link to="/life/quick-facts">
                    <Text color="gray.800">Quick Facts</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="healthcare">
                  <Link to="/life/healthcare">
                    <Text color="gray.800">Healthcare</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="education">
                  <Link to="/life/education">
                    <Text color="gray.800">Education</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="utilities">
                  <Link to="/life/utilities">
                    <Text color="gray.800">Utilities</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="things-to-do">
                  <a href="https://fultoncountyindiana.com/" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Things to Do</Text>
                  </a>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* WHY FULTON COUNTY? Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>Why Fulton County?</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                <Menu.Item value="workforce">
                  <Link to="/why/workforce">
                    <Text color="gray.800">Workforce</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="top-employers">
                  <Link to="/why/top-employers">
                    <Text color="gray.800">Top Employers</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="utilities">
                  <Link to="/why/utilities">
                    <Text color="gray.800">Utilities</Text>
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* Partners Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>Partners</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                <Menu.Item value="rochester">
                  <a href="https://rochester.in.us/" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Rochester</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="fulton-county">
                  <a href="https://www.co.fulton.in.us/" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Fulton County</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="arkon">
                  <a href="https://akronindiana.com/" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Arkon</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="ieda">
                  <a href="https://ieda.org" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">IEDA</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="iedc">
                  <a href="https://iedc.in.gov" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">IEDC</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="ncirpc">
                  <a href="https://www.iar.cc/north-central-indiana-regional-palnning-council" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">NCIRPC</Text>
                  </a>
                </Menu.Item>
                <Menu.Item value="kewanna">
                  <a href="https://www.facebook.com/share/1CNHgtB9Vj" target="_blank" rel="noopener noreferrer">
                    <Text color="gray.800">Kewanna</Text>
                  </a>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* ABOUT Dropdown */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Flex
              align="center"
              gap={1}
              bg="transparent"
              color="white"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "blue.200" }}
              px={3}
              py={2}
              cursor="pointer"
            >
              <Text>About</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                <Menu.Item value="staff">
                  <Link to="/staff">
                    <Text color="gray.800">Staff</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="board">
                  <Link to="/board">
                    <Text color="gray.800">Board of Directors</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="mission">
                  <Link to="/mission">
                    <Text color="gray.800">Mission</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="contact">
                  <Link to="/contact">
                    <Text color="gray.800">Contact</Text>
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </Flex>
  )
}

export default Navbar
