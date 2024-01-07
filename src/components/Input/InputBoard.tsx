import { Box, Button, Center, Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Question } from '@/lib/constant/questions'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ModalState } from '@/atoms/etc/modal'
import { useRouter } from 'next/router'
import { DefaultButton } from '../Button'
import { colors } from '@/chakra/colors'
import { InputAnswerState, isAnswerCorrectState } from '@/atoms/input/inputAnswer'
import AnswerModal from '../Modal/AnswerModal'
import HintModal from '../Modal/HintModal'

interface InputBoardProps {
  question: Question
}

type InputType = {
  inputType: 'number' | 'alphanumeric' | undefined
}

function InputBoard({ question }: InputBoardProps) {
  const [inputValue, setInputValue] = useRecoilState(InputAnswerState)
  const [inputType, setInputType] = useState<InputType['inputType']>('alphanumeric')
  const [isCorrect, setIsCorrect] = useRecoilState(isAnswerCorrectState)
  const setModal = useSetRecoilState(ModalState)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { id } = router.query
  const { hint, answer, isAnswerImage, answerDesc, isInterative } = question

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

  useEffect(() => {
    return () => {
      setInputValue('')
      setIsCorrect(false)
    }
  }, [router])

  return (
    <Flex px="50px" pb="100px" justifyContent="center" alignItems="center" direction="column">
      <Flex width="100%" justifyContent="center" mb="15px" gap="10px">
        <Button
          bg="gray.800"
          color="white"
          px="20px"
          py="30px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
          onClick={() =>
            setModal({
              isOpen: true,
              content: <HintModal hint={hint} />,
            })
          }
        >
          <Text fontSize="32px">💡</Text>
        </Button>
        <Button
          bg="gray.800"
          color="white"
          px="20px"
          py="30px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
          onClick={() => onResetInputValue()}
        >
          <Text fontSize="32px">↺</Text>
        </Button>
      </Flex>
      {!isInterative && (
        <Center bg="#FFF" p="20px" borderRadius="10px">
          <HStack gap="0.8rem" pointerEvents={isCorrect ? 'none' : 'auto'}>
            <PinInput type={inputType} value={inputValue as string} placeholder="" onChange={(e) => setInputValue(e)}>
              {Array.from(answer).map((el, idx) => (
                <PinInputField
                  key={el + idx}
                  ref={idx === 0 ? firstInputRef : undefined}
                  className="input"
                  minW="50px"
                  minH="50px"
                  border="2px solid"
                  borderColor="gray.1000"
                  fontSize="20px"
                  sx={{
                    '&:focus-visible': {
                      borderColor: 'gray.1000',
                      boxShadow: `0 0 0 1px transparent`,
                    },
                  }}
                />
              ))}
            </PinInput>
          </HStack>
        </Center>
      )}
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
          {isCorrect ? <Text fontSize="40px">🔓️</Text> : <Text fontSize="40px">🔒</Text>}
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
          <DefaultButton
            style={{ backgroundColor: colors.button.orange }}
            onClick={() =>
              setModal({
                isOpen: true,
                content: <AnswerModal isAnswerImage={isAnswerImage} answerDesc={answerDesc} />,
              })
            }
          >
            <Flex flex="1" justifyContent="center" alignItems="center" gap="5px">
              <Text>
                정답 풀이{' '}
                <Center display="inline-flex" width="30px" height="30px" borderRadius="50%" bg="gray.1000">
                  ❓
                </Center>
              </Text>
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
