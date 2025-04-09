import { Center, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Clock } from '../Clock'

function QuestionTemp3() {
  useEffect(() => {}, [])

  return (
    <Center flexDirection="column" gap="20px">
      <Flex gap="15px">
        <Clock settingBigClock={-4} settingSmallClock={-8} isCanModify={false} />
        <Clock settingBigClock={-1} settingSmallClock={-4} isCanModify={false} />
      </Flex>
      <Flex gap="15px">
        <Clock settingBigClock={-2} settingSmallClock={-10} isCanModify={false} />
        <Clock settingBigClock={-11} settingSmallClock={-7} isCanModify={false} />
      </Flex>
    </Center>
  )
}

export default QuestionTemp3
