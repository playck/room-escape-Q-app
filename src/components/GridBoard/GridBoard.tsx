import { Grid, GridItem } from '@chakra-ui/react'
import { Board } from '.'
import { useRecoilState, useRecoilValue } from 'recoil'
import { activeBoardIdxState, gridArrayState } from '@/atoms/input/inputs'
import { useEffect } from 'react'
import { InputAnswerState } from '@/atoms/input/inputAnswer'

interface GridBoardProps {}

function GridBoard(props: GridBoardProps) {
  const [gridArray, setGridArray] = useRecoilState(gridArrayState)
  const idx = useRecoilValue(activeBoardIdxState)
  const [inputAnswer, setInputAnswer] = useRecoilState(InputAnswerState)
  const boardTextList = ['START', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'FINISH']

  useEffect(() => {
    setGridArray(Array.from({ length: 4 * 4 }, () => ''))
  }, [])

  useEffect(() => {
    if (idx === '') return

    let updatedGrid = [...gridArray]

    if (updatedGrid.includes(idx)) {
      updatedGrid[Number(idx) - 1] = ''
    } else {
      updatedGrid[Number(idx) - 1] = idx
    }
    setGridArray(updatedGrid)
    setInputAnswer(updatedGrid.join(''))
  }, [idx])

  useEffect(() => {
    if (idx != '16') return

    if (inputAnswer === '1216') {
      setTimeout(() => {
        alert('성공')
      }, 500)
    } else {
      setTimeout(() => {
        alert('실패')
        setGridArray(Array.from({ length: 4 * 4 }, () => ''))
      }, 500)
    }
  }, [inputAnswer])

  if (gridArray.length < 2) {
    return <></>
  }

  return (
    <>
      <Grid templateColumns={`repeat(${4}, 1fr)`} border="3px solid black">
        {gridArray.map((val, idx) => (
          <GridItem key={idx + 1}>
            <Board id={idx + 1} val={val} boardTextList={boardTextList} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default GridBoard
