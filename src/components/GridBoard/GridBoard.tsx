import { Grid, GridItem } from '@chakra-ui/react'
import { Board } from '.'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { activeBoardIdxState, gridArrayState } from '@/atoms/input/inputs'
import { useEffect } from 'react'
import { InputAnswerState, isAnswerCorrectState } from '@/atoms/input/inputAnswer'

interface GridBoardProps {
  boardTextList: string[]
  gridRootNum: number
  answer: string
  finishIdx: string
}

function GridBoard({ boardTextList, gridRootNum, answer, finishIdx }: GridBoardProps) {
  const [gridArray, setGridArray] = useRecoilState(gridArrayState)
  const [inputAnswer, setInputAnswer] = useRecoilState(InputAnswerState)
  const idx = useRecoilValue(activeBoardIdxState)
  const onResetIdx = useResetRecoilState(activeBoardIdxState)
  const setIsAnswerCorrect = useSetRecoilState(isAnswerCorrectState)

  useEffect(() => {
    setGridArray(Array.from({ length: gridRootNum * gridRootNum }, () => ''))
    return () => {
      setGridArray([''])
      setInputAnswer('')
      onResetIdx()
    }
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
    if (idx != finishIdx) return

    if (inputAnswer === answer) {
      setTimeout(() => {
        setIsAnswerCorrect(true)
        alert('성공')
      }, 500)
    } else {
      setTimeout(() => {
        alert('오답입니다.')
        setGridArray(Array.from({ length: gridRootNum * gridRootNum }, () => ''))
      }, 500)
    }
  }, [inputAnswer])

  if (gridArray.length < 2) {
    return <></>
  }

  return (
    <>
      <Grid templateColumns={`repeat(${gridRootNum}, 1fr)`} border="3px solid black">
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
