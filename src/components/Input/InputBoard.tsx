import { Button, Center, Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { IoIosArrowForward } from 'react-icons/io'
import { Question } from '@/lib/constant/questions'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { useRouter } from 'next/router'
import { DefaultButton, DirectionLockButton } from '../Button'
import { colors } from '@/chakra/colors'
import { InputAnswerState, isAnswerCorrectState } from '@/atoms/input/inputAnswer'
import AnswerModal from '../Modal/AnswerModal'
import HintModal from '../Modal/HintModal'
import { getFontStyle } from '@/chakra/fonts'
import AlertModal from '../Modal/AlertModal'

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
  const setModalProps = useSetRecoilState(ModalPropsState)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { id } = router.query
  const { hint, answer, isAnswerImage, answerDesc, answerType, isInterative } = question

  const onSubmitAnswer = () => {
    if (inputValue === answer) {
      setIsCorrect(true)
    } else {
      setModal({
        isOpen: true,
        content: <AlertModal msg="오답입니다." />,
      })
      setModalProps({
        size: 'xs',
        isCentered: true,
      })
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
      <Flex width="100%" justifyContent="center" mb="16px" gap="12px">
        <Button
          minW="80px"
          bg="gray.800"
          color="white"
          px="20px"
          py="32px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
          onClick={() =>
            setModal({
              isOpen: true,
              content: <HintModal hint={hint} answer={answer} />,
            })
          }
        >
          <Text fontSize="36px">💡</Text>
        </Button>
        <Button
          minW="80px"
          bg="gray.800"
          color="white"
          px="20px"
          py="32px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.600',
            },
          }}
          onClick={() => onResetInputValue()}
        >
          <Text fontSize="36px">↺</Text>
        </Button>
      </Flex>
      {!isInterative && answerType != 'direction' && (
        <Center minW="120px" position="relative" bg="#FFF" p="20px" pt="35px" borderRadius="10px">
          <HStack gap="0.8rem" pointerEvents={isCorrect ? 'none' : 'auto'}>
            <PinInput
              type={inputType}
              value={inputValue as string}
              placeholder=""
              onChange={(e) => setInputValue(e.toUpperCase())}
            >
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
          <Text {...getFontStyle(12, 500, '24px')} position="absolute" top="6px" left="20px">
            TYPE: {answerType}
          </Text>
        </Center>
      )}
      {answerType == 'direction' ? (
        <DirectionLockButton answer={answer} isCorrect={isCorrect} setIsCorrect={setIsCorrect} />
      ) : (
        <Flex alignItems="center" mt="25px" mb="40px">
          <Button
            p="28px"
            bg="gray.800"
            width="100px"
            height="100px"
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
            {isCorrect ? <Text fontSize="50px">🔓️</Text> : <Text fontSize="50px">🔒</Text>}
          </Button>
        </Flex>
      )}
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
              <Text as="span">정답 풀이</Text>
              <Center display="inline-flex" width="30px" height="30px" borderRadius="50%" bg="gray.1000">
                ❓
              </Center>
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
