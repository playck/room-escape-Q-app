import { Flex } from '@chakra-ui/react'
import { ImageBox, TextBox } from '.'
import { Question } from '@/lib/constant/questions'

interface QuestionSectionProps {
  question: Question
}

function QuestionSection({ question }: QuestionSectionProps) {
  const { id, questionDesc, answer, isHintIcon } = question

  return (
    <Flex
      as="section"
      id="question-section"
      direction="column"
      width="100%"
      gap="20px"
      p="16px"
      pt="40px"
      alignItems="center"
    >
      <ImageBox id={id} />
      {questionDesc ? <TextBox questionDesc={questionDesc} /> : <></>}
    </Flex>
  )
}

export default QuestionSection
