import { Button, Center, Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import _ from 'lodash'
import { IoMdLock, IoMdUnlock, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Question } from '@/lib/constant/questions'
import { PiArrowUUpLeftLight } from 'react-icons/pi'
import { HiLightBulb } from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { ModalState } from '@/atoms/etc/modal'
import { useRouter } from 'next/router'
import { DefaultButton, DirectionLockButton } from '../Button'
import { colors } from '@/chakra/colors'
import { InputAnswerState } from '@/atoms/input/inputAnswer'

interface InputBoardProps {
  question: Question
}

type InputType = {
  inputType: 'number' | 'alphanumeric' | undefined
}

function InputBoard({ question }: InputBoardProps) {
  const [inputValue, setInputValue] = useRecoilState(InputAnswerState)
  const [inputType, setInputType] = useState<InputType['inputType']>('alphanumeric')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [modal, setModal] = useRecoilState(ModalState)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { isOpen } = modal
  const { id } = router.query
  const { answer } = question

  const onSubmitAnswer = () => {
    if (inputValue === answer) {
      setIsCorrect(true)
    } else {
      alert('틀렸습니다.')
    }
  }

  const onResetInputValue = () => {
    setInputValue('')
    if (firstInputRef.current && inputValue.length > 1) {
      firstInputRef.current.focus()
    }
  }

  return (
    <Flex px="50px" pb="100px" justifyContent="center" alignItems="center" direction="column">
      <Flex width="100%" justifyContent="center" mb="15px" gap="10px">
        <Button
          bg="gray.800"
          color="white"
          px="20px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
        >
          <HiLightBulb
            size={24}
            onClick={() =>
              setModal({
                isOpen: true,
                content: <></>,
              })
            }
          />
        </Button>
        <Button
          bg="gray.800"
          color="white"
          px="20px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
        >
          <PiArrowUUpLeftLight size={24} onClick={() => onResetInputValue()} />
        </Button>
      </Flex>
      <Center bg="#FFF" p="20px" borderRadius="10px">
        <HStack gap="0.8rem">
          <PinInput type={inputType} value={inputValue as string} placeholder="" onChange={(e) => setInputValue(e)}>
            {Array.from(answer).map((el, idx) => (
              <PinInputField
                key={el + idx}
                ref={idx === 0 ? firstInputRef : undefined}
                className="input"
                sx={{
                  '&:focus-visible': {
                    borderColor: 'gray.100',
                    boxShadow: `0 0 0 1px transparent`,
                  },
                }}
              />
            ))}
          </PinInput>
        </HStack>
      </Center>
      <Flex alignItems="center" my="20px" gap="10px">
        <Button
          p="30px"
          bg="gray.800"
          width="80px"
          height="80px"
          color="white"
          borderRadius="9999px"
          sx={{
            '&:hover': {
              backgroundColor: 'gray.800',
            },
            svg: {
              flexShrink: '0',
            },
          }}
          onClick={() => onSubmitAnswer()}
        >
          {isCorrect ? <IoMdUnlock size={40} /> : <IoMdLock size={40} />}
        </Button>
      </Flex>
      {isCorrect ? (
        <Flex
          gap="10px"
          sx={{
            button: {
              '&:hover': {
                bg: 'transparent',
              },
            },
            svg: {
              flexShrink: '0',
            },
          }}
        >
          <DefaultButton style={{ backgroundColor: colors.button.orange }} onClick={() => router.push('/questions')}>
            <Flex alignItems="center" gap="5px">
              <IoIosArrowBack size={28} />
              <Text>문제 리스트</Text>
            </Flex>
          </DefaultButton>
          <DefaultButton
            style={{ backgroundColor: colors.button.purple, justifyContent: 'flex-end', paddingRight: '5px' }}
            onClick={() => router.push(`/questions/${Number(id) + 1}`)}
          >
            <Flex alignItems="center" gap="5px">
              <Text>다음 문제 풀기</Text>
              <IoIosArrowForward size={28} />
            </Flex>
          </DefaultButton>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  )
}

export default InputBoard
