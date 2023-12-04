import { getFontStyle } from '@/chakra/fonts'
import { Question } from '@/lib/constant/questions'
import { Box, Text } from '@chakra-ui/react'

interface TextBoxProps {
  questionDesc: Question['questionDesc']
}

function TextBox({ questionDesc }: TextBoxProps) {
  return (
    <Box>
      <Text as="p" px="4px" wordBreak="keep-all" whiteSpace="pre-wrap" {...getFontStyle(16, 500, '24px')}>
        {questionDesc}
      </Text>
    </Box>
  )
}

export default TextBox
