import { ModalState } from '@/atoms/etc/modal'
import { InputAnswerState } from '@/atoms/input/inputAnswer'
import { getFontStyle } from '@/chakra/fonts'
import { Question } from '@/lib/constant/questions'
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

interface HintModalProps {
  hint: Question['hint']
  answer: Question['answer']
  interativeAnswer?: Question['interativeAnswer']
}

function HintModal({ hint = '', answer, interativeAnswer }: HintModalProps) {
  const resetModalInfo = useResetRecoilState(ModalState)
  const setInputAnswer = useSetRecoilState(InputAnswerState)
  const [isAnswerCheck, setIsAnswerCheck] = useState<boolean>(false)

  const onCheckAnswer = () => {
    setIsAnswerCheck(true)
  }

  const onCloseModal = () => {
    resetModalInfo()
    if (isAnswerCheck) {
      setTimeout(() => {
        setInputAnswer(answer)
      }, 0)
    }
  }

  return (
    <Center
      position="relative"
      flexDirection="column"
      minH="40vh"
      borderRadius="12px"
      overflow="hidden"
      sx={{
        img: {
          width: '100%',
          maxHeight: '70%',
        },
      }}
    >
      <Box p="20px" wordBreak="keep-all" whiteSpace="pre-line">
        <Text {...getFontStyle(15, 500, '24px')}>{hint}</Text>
      </Box>
      {isAnswerCheck && (
        <Flex position="absolute" bottom="30%" justifyContent="center">
          <Text>정답: {interativeAnswer ? interativeAnswer : answer} </Text>
        </Flex>
      )}
      <Flex position="absolute" bottom="5%" left="5%">
        <Button height="48px" onClick={() => onCheckAnswer()}>
          정답 확인
        </Button>
      </Flex>

      <Flex position="absolute" bottom="5%" right="5%">
        <Button height="48px" onClick={() => onCloseModal()}>
          닫기
        </Button>
      </Flex>
    </Center>
  )
}

export default HintModal
