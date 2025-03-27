import { Box, Button, Center, Flex, HStack, Image, PinInput, PinInputField, Text, useToast } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Question } from '@/lib/constant/questions'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { useRouter } from 'next/router'
import { DirectionLockButton } from '../Button'
import { colors } from '@/chakra/colors'
import { InputAnswerState, directedValueArrState, isAnswerCorrectState } from '@/atoms/input/inputAnswer'
import { alertCopied, alertInputReset } from '@/lib/constant/toast'
import AnswerModal from '../Modal/AnswerModal'
import HintModal from '../Modal/HintModal'
import { getFontStyle } from '@/chakra/fonts'
import AlertModal from '../Modal/AlertModal'
import confetti from 'canvas-confetti'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { useLocalStorage, useCopyToClipboard } from 'usehooks-ts'
import { trackingEvent } from '@/lib/script/ga'
import AdModal from '../Modal/AdModal'
import { ImList } from 'react-icons/im'
import { FaQuestion, FaShareAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { BottomAd } from '../Ad'

interface InputBoardProps {
  question: Question
}

type InputType = {
  inputType: 'number' | 'alphanumeric'
}

function InputBoard({ question }: InputBoardProps) {
  const [inputValue, setInputValue] = useRecoilState(InputAnswerState)
  const [inputType, setInputType] = useState<InputType['inputType']>('alphanumeric')
  const [isCorrect, setIsCorrect] = useRecoilState(isAnswerCorrectState)
  const [solvedList, setSolvedList] = useLocalStorage<number[]>('solvedList', [])
  const [usedHintList, setUsedHintList] = useLocalStorage<number[]>('useHintList', [])
  const [copiedText, copy] = useCopyToClipboard()
  const setModal = useSetRecoilState(ModalState)
  const setModalProps = useSetRecoilState(ModalPropsState)
  const setDirectedValueArr = useSetRecoilState(directedValueArrState)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { id } = router.query
  const { hint, answer, isAnswerImage, answerDesc, answerType, isInterative, interativeAnswer } = question
  const toast = useToast({ duration: 1300 })

  useEffect(() => {
    const type = question['answerType'] == 'Number' ? 'number' : 'alphanumeric'
    setInputType(type)
    return () => {
      setInputValue('')
      setIsCorrect(false)
      confetti.reset()
    }
  }, [id, answerType])

  useEffect(() => {
    if (isCorrect) {
      confetti({
        particleCount: 240,
        spread: 70,
        origin: { y: 0.9 },
      })
    }
  }, [isCorrect])

  const onSubmitAnswer = () => {
    if (!inputValue) return
    if (inputValue === answer) {
      setIsCorrect(true)
      if (!solvedList.includes(Number(id))) {
        setSolvedList([...solvedList, Number(id)])
      }
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }, 600)
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

  const onOpenHint = () => {
    if (!isCorrect && usedHintList.length && !usedHintList.includes(Number(id)) && usedHintList.length % 2 === 0) {
      setModal({
        isOpen: true,
        content: <AdModal hint={hint} answer={answer} interativeAnswer={interativeAnswer} />,
      })
      setModalProps({
        size: 'full',
        isCentered: true,
      })
    } else if (!isCorrect) {
      setModal({
        isOpen: true,
        content: <HintModal hint={hint} answer={answer} interativeAnswer={interativeAnswer} />,
      })
    }

    if (!usedHintList.includes(Number(id))) {
      if (router?.query.dev != 'true') {
        trackingEvent('hint', 'HintOpen')
      }
      setUsedHintList([...usedHintList, Number(id)])
    }
  }

  const onResetInputValue = () => {
    setInputValue('')
    if (firstInputRef.current && inputValue.length > 1) {
      firstInputRef.current.focus()
    }
    if (answerType === 'direction') {
      setDirectedValueArr('')
      toast.closeAll()
      toast(alertInputReset)
    }
  }

  const onSharePage = () => {
    const url = `https://www.room-escape-bootcamp.com${router.asPath}`
    const title = '방탈출 부트캠프'
    const text = `방탈출 ${id}번째 문제에 도전해보세요!`

    if (navigator.share && typeof navigator.share === 'function') {
      navigator
        .share({
          title,
          text,
          url,
        })
        .then(() => {
          if (router?.query.dev != 'true') {
            trackingEvent('share', 'Share')
          }
        })
        .catch((error) => {
          onCopyURL(url)
        })
    } else {
      onCopyURL(url)
    }
  }

  const onCopyURL = (text: string) => {
    copy(text)
      .then(() => {
        toast.closeAll()
        toast(alertCopied)
      })
      .catch((err) => {
        // do nothing
      })
  }

  return (
    <Flex as="section" px="50px" pb="25px" justifyContent="center" alignItems="center" direction="column">
      <Flex width="100%" justifyContent="center" mb="16px" gap="12px">
        <Button
          aria-label="Hint-button"
          minW="80px"
          bg="gray.800"
          color="white"
          px="20px"
          py="32px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.800',
            },
          }}
          onClick={() => onOpenHint()}
        >
          <Text fontSize="36px">💡</Text>
        </Button>
        <Button
          aria-label="Reset-button"
          minW="80px"
          bg="gray.800"
          color="white"
          px="20px"
          py="32px"
          width="65px"
          sx={{
            '&:hover': {
              bg: 'gray.800',
            },
          }}
          onClick={() => !isCorrect && onResetInputValue()}
        >
          <Center>
            <BsArrowCounterclockwise size={32} />
          </Center>
        </Button>
      </Flex>
      {(answerType === 'Number' || answerType === 'English') && (
        <Center minW="120px" position="relative" bg="#FFF" p="20px" pt="35px" borderRadius="10px">
          <HStack gap="0.8rem" pointerEvents={isCorrect ? 'none' : 'auto'}>
            <PinInput
              type={inputType}
              value={inputValue}
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
        <Flex alignItems="center" mt="25px" mb="30px">
          <Button
            p="22px"
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
            onClick={() => !isCorrect && onSubmitAnswer()}
          >
            {isCorrect ? (
              <Center w={['60px', '70px']}>
                <Image src="/images/items/unlock.png" alt="열린 자물쇠" />
              </Center>
            ) : (
              <Center w={['60px', '70px']}>
                <Image src="/images/items/lock.png" alt="자물쇠" />
              </Center>
            )}
          </Button>
        </Flex>
      )}
      {isCorrect ? (
        <Flex
          gap="25px"
          pb="50px"
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
          <Center
            width="60px"
            height="60px"
            borderRadius="50%"
            bg={colors.gray[5]}
            onClick={() => router.replace('/questions')}
          >
            <ImList size={24} />
          </Center>
          <Center
            width="60px"
            height="60px"
            borderRadius="50%"
            bg={colors.gray[10]}
            onClick={() =>
              setModal({
                isOpen: true,
                content: <AnswerModal isAnswerImage={isAnswerImage} answerDesc={answerDesc} />,
              })
            }
          >
            <FaQuestion size={24} color="red" />
          </Center>
          <Center width="60px" height="60px" borderRadius="50%" bg={colors.gray[5]} onClick={() => onSharePage()}>
            <FaShareAlt size={24} color="blue" />
          </Center>
          {id == '50' ? (
            <></>
          ) : (
            <Center
              width="60px"
              height="60px"
              borderRadius="50%"
              bg={colors.gray[10]}
              onClick={() => router.replace(`/questions/${Number(id) + 1}`)}
            >
              <HiArrowRight size={30} />
            </Center>
          )}
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  )
}

export default InputBoard
