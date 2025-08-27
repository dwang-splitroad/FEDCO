import { 
  Flex, 
  useBreakpointValue,
  HStack,
  Text,
  Box,
  Menu,
  Portal,
  Button,
  Flex as ChakraFlex,
  IconButton,
  VStack,
  useDisclosure
} from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi"
import { useState, useRef } from "react";

function Navbar() {
  // Show navbar on all devices, but change layout
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { open: isMobileMenuOpen, onToggle: toggleMobileMenu } = useDisclosure()
  
  // Add open state for each dropdown
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Add refs for close timeouts
  const closeTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  // Helper to open menu and clear close timeout
  const handleMenuOpen = (menu: string) => {
    if (closeTimeoutRef.current[menu]) {
      clearTimeout(closeTimeoutRef.current[menu]!);
      closeTimeoutRef.current[menu] = null;
    }
    setOpenMenu(menu);
  };

  // Helper to close menu with delay
  const handleMenuClose = (menu: string) => {
    closeTimeoutRef.current[menu] = setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current));
    }, 250);
  };

  // Mobile Menu Items Component
  const MobileMenuItems = () => (
    <VStack gap={4} align="stretch" p={4} bg="blue.800">
      <Link to="/mission" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Mission</Text>
      </Link>
      <Link to="/staff" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Staff</Text>
      </Link>
      <Link to="/board" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Board</Text>
      </Link>
      <Link to="/contact" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Contact</Text>
      </Link>
      <Link to="/business-assistance" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Business Assistance</Text>
      </Link>
      <Link to="/storiesofbizgro" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Stories of BizGro</Text>
      </Link>
      <Link to="/education" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Education</Text>
      </Link>
      <Link to="/workforce" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Workforce</Text>
      </Link>
      <Link to="/utilities" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Utilities</Text>
      </Link>
      <Link to="/quick-facts" onClick={toggleMobileMenu}>
        <Text color="white" fontSize="lg" py={2}>Quick Facts</Text>
      </Link>
    </VStack>
  );

  return (
    <Box>
      <Flex
        justify="space-between"
        position="sticky"
        top={0}
        zIndex={1000}
        color="white"
        align="center"
        bg="blue.800"
        w="100%"
        px={{ base: 4, md: 8 }}
        py={4}
        boxShadow="md"
      >
        {/* Logo/Brand */}
        <Link to="/">
          <Box>
            <img
              src="/images/storiesofbizgro/article pictures/FEDCO+Logo_White@300x-8.png"
              alt="FEDCO - Fulton Economic Development Corp Logo"
              style={{ 
                height: '64px', 
                maxHeight: '64px',
                width: 'auto', 
                maxWidth: '280px',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Link>

        {/* Desktop Menu */}
        {isDesktop && (
          <HStack gap={6}>
            {/* HOME */}
            <Link to="/">
              <Button variant="ghost" bg="transparent" _hover={{ bg: "transparent", color: "blue.200" }} px={3} py={2} fontSize="sm" fontWeight="medium" color="white">
                Home
              </Button>
            </Link>

            {/* Economic Development Dropdown */}
            <Menu.Root open={openMenu === "economic-development"} onOpenChange={(open) => setOpenMenu(open ? "economic-development" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("economic-development")}
                  onMouseLeave={() => handleMenuClose("economic-development")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>Economic Development</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("economic-development")}
                  onMouseLeave={() => handleMenuClose("economic-development")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                    <Menu.Item value="sites-buildings" asChild>
                      <Link to="/economic-development/sites-buildings" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Sites & Buildings</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="wage-survey" asChild>
                      <a href="https://www.bls.gov/regions/midwest/news-release/countyemploymentandwages_indiana.htm" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Wage Survey</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="labor-statistics" asChild>
                      <a href="https://www.hoosierdata.in.gov" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Labor Statistics</Text>
                      </a>
                    </Menu.Item>
                    {/* Add Employment Rates below Labor Statistics */}
                    <Menu.Item value="employment-rates" asChild>
                      <a href="https://www.in.gov/dwd/newsroom/employment-reports" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Employment Rates</Text>
                      </a>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* SMALL BIZ Dropdown */}
            <Menu.Root open={openMenu === "small-biz"} onOpenChange={(open) => setOpenMenu(open ? "small-biz" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("small-biz")}
                  onMouseLeave={() => handleMenuClose("small-biz")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>Small Biz</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("small-biz")}
                  onMouseLeave={() => handleMenuClose("small-biz")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="250px">
                                     <Menu.Item value="business-assistance" asChild>
                   <Link to="/business-assistance" style={{ cursor: 'pointer' }}>
                     <Text color="gray.800">Business Assistance</Text>
                   </Link>
                 </Menu.Item>
                    <Menu.Item value="biz-events" asChild>
                      <a href="https://www.facebook.com/fedco46975#" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Upcoming Biz Events</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="storiesofbizgro" asChild>
                      <Link to="/storiesofbizgro" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Stories of BizGro</Text>
                      </Link>
                    </Menu.Item>
                                     <Menu.Item value="updates" asChild>
                   <Link to="/business-assistance" style={{ cursor: 'pointer' }}>
                     <Text color="gray.800">Small Biz Updates</Text>
                   </Link>
                 </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* Workone (External Link) */}
            <a
              href="https://www.in.gov/dwd/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="ghost"
                bg="transparent"
                fontSize="sm"
                fontWeight="medium"
                color="white"
                _hover={{ bg: "transparent", color: "blue.200" }}
                px={3}
                py={2}
              >
                Workone
              </Button>
            </a>

            {/* LIFE IN FULTON COUNTY Dropdown */}
            <Menu.Root open={openMenu === "life-in-fulton"} onOpenChange={(open) => setOpenMenu(open ? "life-in-fulton" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("life-in-fulton")}
                  onMouseLeave={() => handleMenuClose("life-in-fulton")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>Life In Fulton County</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("life-in-fulton")}
                  onMouseLeave={() => handleMenuClose("life-in-fulton")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                    <Menu.Item value="quick-facts" asChild>
                      <Link to="/quick-facts" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Quick Facts</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="healthcare" asChild>
                      <Link to="/healthcare" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Healthcare</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="education" asChild>
                      <Link to="/education" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Education</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="utilities" asChild>
                      <Link to="/utilities" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Utilities</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="things-to-do" asChild>
                      <a href="https://fultoncountyindiana.com/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Things to Do</Text>
                      </a>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* WHY FULTON COUNTY? Dropdown */}
            <Menu.Root open={openMenu === "why-fulton"} onOpenChange={(open) => setOpenMenu(open ? "why-fulton" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("why-fulton")}
                  onMouseLeave={() => handleMenuClose("why-fulton")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>Fulton County</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("why-fulton")}
                  onMouseLeave={() => handleMenuClose("why-fulton")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                    <Menu.Item value="workforce" asChild>
                      <Link to="/workforce" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Workforce</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="top-employers" asChild>
                      <Link to="/top-employers" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Top Employers</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="utilities" asChild>
                      <Link to="/utilities" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Utilities</Text>
                      </Link>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* Partners Dropdown */}
            <Menu.Root open={openMenu === "partners"} onOpenChange={(open) => setOpenMenu(open ? "partners" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("partners")}
                  onMouseLeave={() => handleMenuClose("partners")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>Partners</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("partners")}
                  onMouseLeave={() => handleMenuClose("partners")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                    <Menu.Item value="rochester" asChild>
                      <a href="https://rochester.in.us/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Rochester</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="fulton-county" asChild>
                      <a href="https://www.co.fulton.in.us/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Fulton County</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="akron" asChild>
                      <a href="https://akronindiana.com/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Akron</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="kewanna" asChild>
                      <a href="https://www.facebook.com/share/1CNHgtB9Vj" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Kewanna</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="ieda" asChild>
                      <a href="https://ieda.org" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">IEDA</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="iedc" asChild>
                      <a href="https://iedc.in.gov" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">IEDC</Text>
                      </a>
                    </Menu.Item>
                    <Menu.Item value="ncirpc" asChild>
                      <a href="https://www.iar.cc/north-central-indiana-regional-palnning-council" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">NCIRPC</Text>
                      </a>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            {/* ABOUT Dropdown */}
            <Menu.Root open={openMenu === "about"} onOpenChange={(open) => setOpenMenu(open ? "about" : null)}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  bg="transparent"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ bg: "transparent", color: "blue.200" }}
                  px={3}
                  py={2}
                  onMouseEnter={() => handleMenuOpen("about")}
                  onMouseLeave={() => handleMenuClose("about")}
                >
                  <ChakraFlex align="center" gap={1}>
                    <Text>About</Text>
                    <FiChevronDown size={14} />
                  </ChakraFlex>
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner
                  onMouseEnter={() => handleMenuOpen("about")}
                  onMouseLeave={() => handleMenuClose("about")}
                >
                  <Menu.Content bg="white" borderColor="blue.200" minW="200px">
                    <Menu.Item value="staff" asChild>
                      <Link to="/staff" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Staff</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="board" asChild>
                      <Link to="/board" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Board of Directors</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="mission" asChild>
                      <Link to="/mission" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Mission</Text>
                      </Link>
                    </Menu.Item>
                    <Menu.Item value="contact" asChild>
                      <Link to="/contact" style={{ cursor: 'pointer' }}>
                        <Text color="gray.800">Contact</Text>
                      </Link>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </HStack>
        )}

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          color="white"
          display={{ lg: "none" }}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </IconButton>
      </Flex>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Box
          bg="blue.800"
          w="100%"
          position="absolute"
          top="100%"
          left={0}
          zIndex={999}
          borderBottom="1px"
          borderColor="blue.700"
          display={{ lg: "none" }}
        >
          <MobileMenuItems />
        </Box>
      )}
    </Box>
  )
}

export default Navbar
