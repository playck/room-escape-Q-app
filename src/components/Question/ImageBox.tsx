import { Center, Image } from '@chakra-ui/react'

interface ImageBoxProps {
  id: number
}

function ImageBox({ id }: ImageBoxProps) {
  return (
    <Center
      p="12px"
      bg="white"
      maxW="500px"
      borderRadius="12px"
      width="fit-content"
      boxShadow="0px 3px 5px rgba(0, 0, 0, 0.1)"
    >
      <Image width="100%" height="100%" objectFit="cover" src={`/images/questions/q-${id}.png`} alt="question-img" />
    </Center>
  )
}

export default ImageBox
