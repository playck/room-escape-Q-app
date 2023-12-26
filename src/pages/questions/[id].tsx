import { InputBoard } from '@/components/Input'
import { QuestionSection } from '@/components/Question'
import { Question, questionList } from '@/lib/constant/questions'
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import _ from 'lodash'

interface QuestionProps {}

function Question(props: QuestionProps) {
  const router = useRouter()
  const { id } = router.query

  const [question, setQuestion] = useState<Question>({
    id: 0,
    questionImage: '',
    questionDesc: '',
    answer: '',
    isSolved: false,
    isHintIcon: '',
    answerType: '',
    hint: '',
    isAnswerImage: false,
    answerDesc: '',
  })

  useEffect(() => {
    const currQuestion = questionList.filter((q) => String(q.id) == (id as string))[0]
    setQuestion(currQuestion)
  }, [id])

  if (question == undefined) return <></>

  return (
    <Flex direction="column" gap="20px" bg="#fff8dc">
      <QuestionSection question={question} />
      <InputBoard question={question} />
    </Flex>
  )
}

export default Question
