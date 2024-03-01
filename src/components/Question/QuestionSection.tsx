import { Flex } from '@chakra-ui/react'
import { ImageBox, PlayGround, TextBox } from '.'
import { Question } from '@/lib/constant/questions'
import { switchInteractiveQuestion } from '@/lib/utils/switchPlayGround'

interface QuestionSectionProps {
  question: Question
}

function QuestionSection({ question }: QuestionSectionProps) {
  const { id, isInterative, questionDesc, answer } = question

  return (
    <Flex
      as="section"
      id="question-section"
      direction="column"
      width="100%"
      gap="20px"
      p="16px"
      pt="35px"
      alignItems="center"
    >
      {isInterative ? <PlayGround>{switchInteractiveQuestion(id)}</PlayGround> : <ImageBox id={id} />}
      {questionDesc ? <TextBox questionDesc={questionDesc} /> : <></>}
    </Flex>
  )
}

export default QuestionSection
