import { InputBoard } from '@/components/Input'
import { QuestionSection } from '@/components/Question'
import { Flex } from '@chakra-ui/react'

interface QuestionProps {}

function Question(props: QuestionProps) {
  return (
    <Flex direction="column" gap="20px" bg="#fff8dc">
      <QuestionSection />
      <InputBoard />
    </Flex>
  )
}

export default Question
