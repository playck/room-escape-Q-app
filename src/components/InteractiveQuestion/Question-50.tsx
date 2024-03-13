import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { Board } from '../GridBoard'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { activeBoardIdxState, gridArrayState } from '@/atoms/input/inputs'
import { useEffect, useState } from 'react'
import { isAnswerCorrectState } from '@/atoms/input/inputAnswer'
import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from 'next/router'
import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import AlertModal from '../Modal/AlertModal'
import { getFontStyle } from '@/chakra/fonts'

function Question50() {
  const [gridArray, setGridArray] = useRecoilState(gridArrayState)
  const idx = useRecoilValue(activeBoardIdxState)
  const setIsAnswerCorrect = useSetRecoilState(isAnswerCorrectState)
  const setModalProps = useSetRecoilState(ModalPropsState)
  const setModal = useSetRecoilState(ModalState)
  const onResetIdx = useResetRecoilState(activeBoardIdxState)
  const [solvedList, setSolvedList] = useLocalStorage<number[]>('solvedList', [])
  const [count, setCount] = useState<number>(5)
  const [isStart, setIsStart] = useState<boolean>(false)
  const [answer, setAnwer] = useState<number>(0)
  const [selectedArr, setSelectedArr] = useState<string[]>([])
  const router = useRouter()
  const { id } = router.query
  const arr = ['3', '7', '-', '2', '+', '8', '9', '12', '4', '÷', '1', 'x', '8', '10', '6', '5']
  const answerList = [10, 16, 5, 24, 108, 20, 21, 110, 12, 72, 90]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * answerList.length)
    setGridArray(Array.from({ length: 4 * 4 }, () => ''))
    setAnwer(answerList[randomIndex])

    return () => {
      setGridArray([''])
      onResetIdx()
    }
  }, [])

  useEffect(() => {
    if (count === 0) {
      setIsStart(true)
    }
    setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)
  }, [count])

  useEffect(() => {
    if (idx === '') return

    let updatedGrid = [...gridArray]

    if (updatedGrid.includes(idx)) {
      updatedGrid[Number(idx) - 1] = ''
    } else {
      updatedGrid[Number(idx) - 1] = idx
    }
    setGridArray(updatedGrid)
    setSelectedArr([...selectedArr, arr[Number(idx) - 1]])
  }, [idx])

  useEffect(() => {
    if (selectedArr.length < 3) return
    let result = 0

    if (selectedArr[1] === '+') {
      result = Number(selectedArr[0]) + Number(selectedArr[2])
    }

    if (selectedArr[1] === '-') {
      result = Number(selectedArr[0]) - Number(selectedArr[2])
    }

    if (selectedArr[1] === 'x') {
      result = Number(selectedArr[0]) * Number(selectedArr[2])
    }

    if (selectedArr[1] === '÷') {
      result = Number(selectedArr[0]) / Number(selectedArr[2])
    }

    if (result === answer) {
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
          content: <AlertModal msg="오답 입니다." />,
        })
        setModalProps({
          size: 'xs',
          isCentered: true,
        })
        setSelectedArr([])
        setGridArray(Array.from({ length: 4 * 4 }, () => ''))
      }, 500)
    }
  }, [selectedArr])

  return (
    <>
      <Grid
        templateColumns={`repeat(4, 1fr)`}
        border="3px solid black"
        pointerEvents={isStart ? 'auto' : 'none'}
        userSelect={isStart ? 'auto' : 'none'}
        sx={{
          span: {
            fontSize: '18px',
            color: isStart ? '#FFF' : 'black',
            transition: '.5s',
          },
        }}
      >
        {gridArray.map((val, idx) => (
          <GridItem key={idx + 1}>
            <Board id={idx + 1} val={val} boardTextList={arr} />
          </GridItem>
        ))}
      </Grid>
      <Center mt="20px" fontSize="30px">
        {isStart ? (
          <Center flexDirection="column" gap="4px">
            <Text {...getFontStyle(15, 500, '20px')}> 3개를 선택해서 아래의 숫자를 완성하세요</Text>
            <Text>{answer}</Text>
          </Center>
        ) : (
          <Center flexDirection="column" gap="4px">
            <Text {...getFontStyle(16, 500, '20px')}>
              문자들이{' '}
              <Text as="span" fontWeight="700">
                {count}
              </Text>
              초 뒤에 사라집니다.
            </Text>{' '}
            <Text opacity={isStart ? '1' : '0'}>{answer}</Text>
          </Center>
        )}
      </Center>
    </>
  )
}

export default Question50
