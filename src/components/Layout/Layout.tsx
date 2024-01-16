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
      <Box
        as="main"
        pt="54px"
        pb="10px"
        minH="100vh"
        backgroundColor="hsl(0,0%,18%)"
        sx={{
          WebkitBackgroundSize: '2.5px 2.5px',
          backgroundImage:
            '-webkit-linear-gradient( 0deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 3px), -webkit-linear-gradient( 90deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 5px)',
        }}
      >
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
