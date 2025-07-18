import { Flex } from "@chakra-ui/react"
import { Outlet, createFileRoute } from "@tanstack/react-router"

import Navbar from "@/components/Common/Navbar"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  // Removed authentication requirement for public website
})

function Layout() {
  return (
    <Flex direction="column" minH="100vh" bg="gray.50">
      <Navbar />
      <Flex flex="1" direction="column">
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default Layout
