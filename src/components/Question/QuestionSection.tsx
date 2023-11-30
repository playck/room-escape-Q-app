import { Box, Flex } from '@chakra-ui/react'
import { ImageBox, TextBox } from '.'

interface QuestionSectionProps {}

function QuestionSection(props: QuestionSectionProps) {
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
      <ImageBox />
      <TextBox />
    </Flex>
  )
}

export default QuestionSection
