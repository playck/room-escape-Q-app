import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Navbar } from '../NavBar'

interface LayoutProps {
  children: ReactElement
}

function Layout({ children }: LayoutProps) {
  return (
    <Box position="relative" maxW="800px" margin="0 auto">
      <Box as="nav" position="fixed" top={0} left={0} right={0} zIndex={100} maxW="800px" width="100%" margin="0 auto">
        <Navbar />
      </Box>
      <Box as="main" pt="54px" minH="100vh" bg="#fff8dc">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
