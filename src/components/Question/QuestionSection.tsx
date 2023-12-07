import { Flex } from '@chakra-ui/react'
import { ImageBox, PlayGround, TextBox } from '.'
import { Question } from '@/lib/constant/questions'
import { Question13 } from '../InteractiveQuestion'

interface QuestionSectionProps {
  question: Question
}

function QuestionSection({ question }: QuestionSectionProps) {
  const { id, isInterative, questionDesc, answer, isHintIcon } = question

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
      {isInterative ? (
        <PlayGround>
          <Question13 />
        </PlayGround>
      ) : (
        <ImageBox id={id} />
      )}
      {questionDesc ? <TextBox questionDesc={questionDesc} /> : <></>}
    </Flex>
  )
}

export default QuestionSection
