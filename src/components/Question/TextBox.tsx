import { Box, Text } from '@chakra-ui/react'

interface TextBoxProps {}

function TextBox(props: TextBoxProps) {
  return (
    <Box>
      <Text as="p" px="4px" wordBreak="keep-all">
        정답은 무엇일까요?
      </Text>
    </Box>
  )
}

export default TextBox
