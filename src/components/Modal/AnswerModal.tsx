import { ModalState } from '@/atoms/etc/modal'
import { getFontStyle } from '@/chakra/fonts'
import { Question } from '@/lib/constant/questions'
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useResetRecoilState } from 'recoil'

interface AnswerModalProps {
  isAnswerImage: Question['isAnswerImage']
  answerDesc: Question['answerDesc']
}

function AnswerModal({ isAnswerImage, answerDesc }: AnswerModalProps) {
  const resetModalInfo = useResetRecoilState(ModalState)
  const router = useRouter()
  const { id } = router.query

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
      {isAnswerImage && <Image src={`/images/answers/a-${id}.png`} alt="answer" />}
      {answerDesc && (
        <Box p="20px" wordBreak="keep-all" whiteSpace="pre-line">
          <Text {...getFontStyle(15, 500, '24px')}>{answerDesc}</Text>
        </Box>
      )}
      <Flex position="absolute" bottom="5%" right="5%">
        <Button onClick={() => resetModalInfo()}>닫기</Button>
      </Flex>
    </Center>
  )
}

export default AnswerModal
