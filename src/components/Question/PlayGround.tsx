import { Box, Center } from '@chakra-ui/react'
import { Flex, Grid, GridItem } from '@chakra-ui/react'

interface PlayGroundProps {
  styleProps?: any
  children: React.ReactNode
}

function PlayGround({ styleProps, children }: PlayGroundProps) {
  return (
    <Box p="30px 20px" bg="gray.100" width="90%" borderRadius="10px" {...styleProps}>
      {children}
    </Box>
  )
}

export default PlayGround
