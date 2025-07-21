import { 
  Flex, 
  useBreakpointValue,
  HStack,
  Text,
  Box,
  Menu,
  Portal,
  Container,
  Heading
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
      color="white"
      align="center"
      bg="blue.800"
      w="100%"
      top={0}
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
            HOME
          </Text>
        </Link>

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
              <Text>ABOUT</Text>
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
              <Text>SMALL BIZ</Text>
              <FiChevronDown size={14} />
            </Flex>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content bg="white" borderColor="blue.200" minW="250px">
                <Menu.Item value="bizgro-skills">
                  <Link to="/small-biz/bizgro-skills">
                    <Text color="gray.800">Sharpen Skills with BizGro</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="funding">
                  <Link to="/small-biz/funding">
                    <Text color="gray.800">Money for your Biz</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="events">
                  <Link to="/small-biz/events">
                    <Text color="gray.800">Upcoming Biz Events</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="success-stories">
                  <Link to="/small-biz/success-stories">
                    <Text color="gray.800">Stories of BizGro</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="updates">
                  <Link to="/small-biz/updates">
                    <Text color="gray.800">Sign Up for Small Biz Updates</Text>
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        {/* Workone (Simple Link) */}
        <Link to="/workone">
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
        </Link>

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
              <Text>LIFE IN FULTON COUNTY</Text>
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
                  <Link to="/life/things-to-do">
                    <Text color="gray.800">Things to Do</Text>
                  </Link>
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
              <Text>WHY FULTON COUNTY?</Text>
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
                  <Link to="/partners/rochester">
                    <Text color="gray.800">Rochester</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="fulton-county">
                  <Link to="/partners/fulton-county">
                    <Text color="gray.800">Fulton County</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="arkon">
                  <Link to="/partners/arkon">
                    <Text color="gray.800">Arkon</Text>
                  </Link>
                </Menu.Item>
                <Menu.Item value="argos">
                  <Link to="/partners/argos">
                    <Text color="gray.800">Argos</Text>
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
