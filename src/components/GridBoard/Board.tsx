import { activeBoardIdxState } from '@/atoms/input/inputs'
import { Box, Center, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'

interface BoardProps {
  id: number
  val: string
  boardTextList: any[]
}

function Board({ id, val, boardTextList }: BoardProps) {
  const setActiveBoardIdx = useSetRecoilState(activeBoardIdxState)

  return (
    <Center
      position="relative"
      aspectRatio="1 / 1"
      width="100%"
      minH="50px"
      height="100%"
      border="1px solid black"
      bg={val ? 'lightgray' : '#FFF'}
      cursor="pointer"
      fontWeight="500"
      fontSize={['16px', '24px', '32px']}
      lineHeight="20px"
      color={val ? '#FFF' : '#191919'}
      onClick={() => setActiveBoardIdx(String(id))}
    >
      <Text>{boardTextList[id - 1]}</Text>
    </Center>
  )
}

export default Board
