import { Flex, Text, useToast } from '@chakra-ui/react'
import { getFontStyle } from '@/chakra/fonts'

interface BasicToastProps {
  text: string
}

function BasicToast({ text }: BasicToastProps) {
  const toast = useToast()
  return (
    <Flex
      onClick={() => toast.closeAll()}
      position="fixed"
      bottom="54px"
      left={0}
      right={0}
      width="fit-content"
      margin="0 auto"
      padding="14px 16px"
      borderRadius="6px"
      bg="gray.700"
    >
      <Text color="white" whiteSpace="nowrap" {...getFontStyle(14, 500, '20px')}>
        {text}
      </Text>
    </Flex>
  )
}

export default BasicToast
