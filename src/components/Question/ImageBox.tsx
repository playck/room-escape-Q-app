import { Center } from '@chakra-ui/react'
import { NextImage } from '../Image'

interface ImageBoxProps {
  id: number
}

function ImageBox({ id = 0 }: ImageBoxProps) {
  const noPaddingStyleIdList = [2]

  return (
    <Center
      p={noPaddingStyleIdList.includes(id) ? '0px' : '12px'}
      bg="white"
      maxW="500px"
      borderRadius="12px"
      width="fit-content"
      boxShadow="0px 3px 5px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
    >
      <NextImage w="500" h="500" src={`/images/questions/q-${id}.png`} alt="question-img" />
    </Center>
  )
}

export default ImageBox
