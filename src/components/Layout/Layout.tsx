import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Navbar } from '../NavBar'

interface LayoutProps {
  children: ReactElement
}

function Layout({ children }: LayoutProps) {
  return (
    <Box position="relative" maxW="800px" margin="0 auto">
      <Box
        as="nav"
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        maxW="800px"
        width="100%"
        margin="0 auto"
      >
        <Navbar />
      </Box>
      <Box as="main" pt="54px" minH="100vh" background="linear-gradient(to bottom, #414345, #232526);">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
// bg="#fff8dc"
// background: #232526;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to bottom, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to bottom, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
