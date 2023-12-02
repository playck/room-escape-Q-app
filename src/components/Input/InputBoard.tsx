import { Button, Center, Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import _ from 'lodash'
import { IoMdLock, IoMdUnlock } from 'react-icons/io'
import { FaArrowRotateRight } from 'react-icons/fa6'
interface InputBoardProps {}

type InputType = {
  inputType: 'number' | 'alphanumeric' | undefined
}

function InputBoard(props: InputBoardProps) {
  const count = [1, 2, 3, 4]
  const [inputValue, setInputValue] = useState<string | number>('')
  const [inputType, setInputType] = useState<InputType['inputType']>('alphanumeric')
  const [isCorrect, setIsCorrent] = useState<boolean>(false)
  const firstInputRef = useRef<HTMLInputElement>(null)

  const onSubmitAnswer = () => {
    if (inputValue === 'real') {
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
    <Flex px="50px" justifyContent="center" alignItems="center" direction="column">
      <Center bg="#FFF" p="20px" borderRadius="10px">
        <HStack gap="0.8rem">
          <PinInput type={inputType} value={inputValue as string} placeholder="" onChange={(e) => setInputValue(e)}>
            {count.map((el, idx) => (
              <PinInputField
                key={el}
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
          p="23px"
          bg="gray.800"
          color="white"
          sx={{
            '&:hover': {
              backgroundColor: 'gray.800',
            },
          }}
          onClick={() => onSubmitAnswer()}
        >
          {isCorrect ? <IoMdUnlock size={30} /> : <IoMdLock size={30} />}
        </Button>
        <Button
          py="23px"
          bg="gray.800"
          color="white"
          sx={{
            '&:hover': {
              backgroundColor: 'gray.800',
            },
          }}
          onClick={() => onResetInputValue()}
        >
          <FaArrowRotateRight size={20} />
        </Button>
      </Flex>
    </Flex>
  )
}

export default InputBoard
