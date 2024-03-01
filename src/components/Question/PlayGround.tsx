import { Box } from '@chakra-ui/react'

interface PlayGroundProps {
  styleProps?: any
  children: React.ReactNode
}

function PlayGround({ styleProps, children }: PlayGroundProps) {
  return (
    <Box p="16px" bg="gray.100" width="90%" borderRadius="10px" overflow="hidden" {...styleProps}>
      {children}
    </Box>
  )
}

export default PlayGround
