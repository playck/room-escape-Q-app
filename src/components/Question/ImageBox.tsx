import { Box, Center, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface ImageBoxProps {}

function ImageBox(props: ImageBoxProps) {
  const router = useRouter()
  const { id } = router.query

  return (
    <Center
      p="12px"
      bg="white"
      maxW="500px"
      borderRadius="12px"
      width="fit-content"
      boxShadow="0px 3px 5px rgba(0, 0, 0, 0.1)"
    >
      <Image width="100%" height="100%" objectFit="cover" src={`/images/q-${id}.png`} alt="question-img" />
    </Center>
  )
}

export default ImageBox
