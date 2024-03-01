import { Flex } from '@chakra-ui/react'
import { GridBoard } from '../GridBoard'
import { ImageBox } from '../Question'

interface Question44Props {}

function Question44(props: Question44Props) {
  return (
    <Flex direction="column" gap="20px">
      <GridBoard boardTextList={[]} gridRootNum={5} answer={''} finishIdx={''} />
      <ImageBox id={44} />
    </Flex>
  )
}

export default Question44
