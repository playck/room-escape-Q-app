import { Button, Center, Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import _ from 'lodash'
import { IoMdLock, IoMdUnlock } from 'react-icons/io'
import { Question } from '@/lib/constant/questions'
import { PiArrowUUpLeftLight } from 'react-icons/pi'
import { HiLightBulb } from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { ModalState } from '@/atoms/etc/modal'

interface InputBoardProps {
  question: Question
}

type InputType = {
  inputType: 'number' | 'alphanumeric' | undefined
}

function InputBoard({ question }: InputBoardProps) {
  const [inputValue, setInputValue] = useState<string | number>('')
  const [inputType, setInputType] = useState<InputType['inputType']>('alphanumeric')
  const [isCorrect, setIsCorrent] = useState<boolean>(false)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const [modal, setModal] = useRecoilState(ModalState)
  const { isOpen } = modal

  const { answer } = question

  const onSubmitAnswer = () => {
    if (inputValue === answer) {
      setIsCorrent(true)
    } else {
      alert('틀렸습니다.')
    }
  }

  const onResetInputValue = () => {
    setInputValue('')
    if (firstInputRef.current) {
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
      <Flex alignItems="center" mt="20px" gap="10px">
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
    </Flex>
  )
}

export default InputBoard
