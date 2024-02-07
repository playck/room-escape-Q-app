import { Grid, GridItem } from '@chakra-ui/react'
import { Board } from '.'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { activeBoardIdxState, gridArrayState } from '@/atoms/input/inputs'
import { useEffect } from 'react'
import { InputAnswerState, isAnswerCorrectState } from '@/atoms/input/inputAnswer'
import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import AlertModal from '../Modal/AlertModal'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'

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
  const setModal = useSetRecoilState(ModalState)
  const setModalProps = useSetRecoilState(ModalPropsState)
  const [solvedList, setSolvedList] = useLocalStorage<number[]>('solvedList', [])
  const router = useRouter()
  const { id } = router.query

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
    if (!inputAnswer) return

    if (inputAnswer === answer) {
      setTimeout(() => {
        setIsAnswerCorrect(true)
        if (!solvedList.includes(Number(id))) {
          setSolvedList([...solvedList, Number(id)])
        }
      }, 500)
    } else {
      setTimeout(() => {
        setModal({
          isOpen: true,
          content: <AlertModal msg="잘못된 경로입니다." />,
        })
        setModalProps({
          size: 'xs',
          isCentered: true,
        })
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
