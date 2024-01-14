import { Center, Flex, Text } from '@chakra-ui/react'
import { Clock } from '../Clock'
import { getFontStyle } from '@/chakra/fonts'

interface Questions19Props {}

function Questions19(props: Questions19Props) {
  return (
    <Center flexDirection="column">
      <Clock />
      <Flex mt="10px" gap="20px" {...getFontStyle(18, 500, '24px')}>
        <Text>+ = 10</Text>
        <Text>x = 16</Text>
      </Flex>
    </Center>
  )
}

export default Questions19
