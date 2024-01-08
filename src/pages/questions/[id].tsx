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
    <Flex
      direction="column"
      gap="10px"
      backgroundColor="hsl(0,0%,18%)"
      sx={{
        WebkitBackgroundSize: '2.5px 2.5px',
        backgroundImage:
          '-webkit-linear-gradient( 0deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 3px), -webkit-linear-gradient( 90deg, hsla(0,0%,0%,0) 0, hsla(0,0%,10%,1) 5px)',
      }}
    >
      <QuestionSection question={question} />
      <InputBoard question={question} />
    </Flex>
  )
}

export default Question

// bg="#fff8dc" 노란 배경
