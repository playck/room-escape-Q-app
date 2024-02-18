import { InputBoard } from '@/components/Input'
import { QuestionSection } from '@/components/Question'
import { Question, questionList } from '@/lib/constant/questions'
import { Flex } from '@chakra-ui/react'
import _ from 'lodash'
import { getFilterdQuestion } from '../../../service/questions'
import { GetStaticProps } from 'next'

interface QuestionProps {
  question: Question
}

function Question({ question }: QuestionProps) {
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

export async function getStaticPaths() {
  const paths = questionList.map((q) => ({
    params: {
      id: q.id.toString(),
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const question = getFilterdQuestion(id)

  return {
    props: {
      question: question,
    },
  }
}

export default Question
