import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { Box, Center, Flex } from '@chakra-ui/react'
import _ from 'lodash'
import { IoIosArrowUp, IoMdArrowDropleft, IoMdArrowDropright, IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { FcApproval } from 'react-icons/fc'
import { useRecoilState } from 'recoil'
import { directedValueArrState } from '@/atoms/input/inputAnswer'

interface DirectionLockButtonProps {
  isCorrect: boolean
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>
  answer: any
}

function DirectionLockButton({ isCorrect, answer, setIsCorrect }: DirectionLockButtonProps) {
  const initialX = 0 // 초기 X 좌표
  const initialY = 0 // 초기 Y 좌표
  const [lastDragX, setLastDragX] = useState(initialX) // 마지막으로 드래그한 X 좌표 상태 변수
  const [lastDragY, setLastDragY] = useState(initialY) // 마지막으로 드래그한 Y 좌표 상태 변수
  const x = useMotionValue(initialX) // X 좌표를 관리하는 변수
  const y = useMotionValue(initialY) // Y 좌표를 관리하는 변수
  const resetX = useTransform(x, [0, 1], [initialX, 0]) // X 좌표를 초기 값으로 되돌리기 위한 변환 함수
  const resetY = useTransform(y, [0, 1], [initialY, 0]) // Y 좌표를 초기 값으로 되돌리기 위한 변환 함수
  const [directedValueArr, setDirectedValueArr] = useRecoilState(directedValueArrState) // 좌,우,상,하

  const handleDragEnd = () => {
    // 드래그 종료 시 마지막 좌표값 저장 및 원래 위치로 되돌리기
    setLastDragX(x.get()) // 마지막으로 드래그한 X 좌표 저장
    setLastDragY(y.get()) // 마지막으로 드래그한 Y 좌표 저장
    x.stop() // 애니메이션 중지
    y.stop() // 애니메이션 중지
    x.set(resetX.get()) // X 좌표를 초기 값으로 설정
    y.set(resetY.get()) // Y 좌표를 초기 값으로 설정
  }

  useEffect(() => {
    onHandleDirectionValue()
  }, [lastDragX, lastDragY])

  const onHandleDirectionValue = () => {
    if (lastDragX <= -22) {
      const counted = directedValueArr + '좌'
      setDirectedValueArr(counted)
      return
    } else if (lastDragX >= 22) {
      const counted = directedValueArr + '우'
      setDirectedValueArr(counted)
      return
    } else if (lastDragY <= -22) {
      const counted = directedValueArr + '상'
      setDirectedValueArr(counted)
      return
    } else if (lastDragY >= 22) {
      const counted = directedValueArr + '하'
      setDirectedValueArr(counted)
      return
    }
  }

  const onCheckAnswer = () => {
    if (directedValueArr === answer) {
      setIsCorrect(true)
    }
  }

  return (
    <Flex direction="column" position="relative" mt="100px" mb="35px">
      <Box onClick={() => onCheckAnswer()}>
        <Box position="absolute" top="-90px" left="50px">
          <IoIosArrowUp size={20} color="white" />
        </Box>
        <Box position="absolute" top="-96px" left="50px">
          <IoIosArrowUp size={20} color="white" />
        </Box>
      </Box>
      <Box
        position="absolute"
        top="-60px"
        left="10px"
        w="100px"
        h="90px"
        borderTop="10px solid #c0c0c0"
        borderRight="10px solid #c0c0c0"
        borderLeft="10px solid #c0c0c0"
        borderBottom="none"
        borderRadius="50% 50% 0 0 / 50% 50% 0 0"
        backgroundColor="transparent"
        zIndex="1"
      />
      <Box
        position="absolute"
        top="-32px"
        left={`${isCorrect ? '48px' : '42px'}  `}
        zIndex="2"
        cursor="pointer"
        color="white"
        onClick={() => setDirectedValueArr('')}
      >
        {isCorrect ? <FcApproval size={25} /> : <></>}
      </Box>
      <AnimatePresence>
        <Center
          position="relative"
          zIndex="3"
          width="120px"
          height="120px"
          border="1px solid #4b6cb7"
          borderRadius="50%"
          bg="#4b6cb7"
          boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
        >
          <Box position="absolute" left="2px">
            <IoMdArrowDropleft size={22} />
          </Box>
          <Box position="absolute" right="2px">
            <IoMdArrowDropright size={22} />
          </Box>
          <Box position="absolute" top="2px">
            <IoMdArrowDropup size={22} />
          </Box>
          <Box position="absolute" bottom="2px">
            <IoMdArrowDropdown size={22} />
          </Box>
          <motion.div
            drag // 드래그 가능하도록 설정
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // 드래그 범위 제한
            style={{ x, y }}
            onDragEnd={handleDragEnd}
            exit={{ x: lastDragX, y: lastDragY, opacity: 0, transition: { duration: 1 } }} // 원래 위치로 돌아갈 때 애니메이션 설정
          >
            {/* 드래그할 요소 */}
            <Box
              width="70px"
              height="70px"
              background="#FFF"
              borderRadius="50%"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
              cursor="pointer"
            />
          </motion.div>
        </Center>
      </AnimatePresence>
    </Flex>
  )
}

export default DirectionLockButton
