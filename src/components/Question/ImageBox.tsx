import { Box, Center, Image } from '@chakra-ui/react'

interface ImageBoxProps {}

function ImageBox(props: ImageBoxProps) {
  return (
    <Center p="12px" bg="white" borderRadius="12px" width="fit-content">
      <Image objectFit="contain" src="/images/q2.png" alt="question-img" />
    </Center>
  )
}

export default ImageBox
