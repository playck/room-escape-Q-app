import { activeBoardIdxState } from '@/atoms/input/inputs'
import { getFontStyle } from '@/chakra/fonts'
import { Box, Center } from '@chakra-ui/react'
import { useEffect } from 'react'
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
      {...getFontStyle(32, 500, '20px')}
      color={val ? '#FFF' : '#191919'}
      onClick={() => setActiveBoardIdx(String(id))}
    >
      {boardTextList[id - 1]}
    </Center>
  )
}

export default Board
