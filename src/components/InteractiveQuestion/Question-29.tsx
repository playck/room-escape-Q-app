import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import { ToggleSwitch } from '../Switch'
import { useState } from 'react'
import _ from 'lodash'
import { useSetRecoilState } from 'recoil'
import { InputAnswerState } from '@/atoms/input/inputAnswer'

interface Questions29Props {}

function Questions29(props: Questions29Props) {
  const [switchList] = useState<string[]>(['신발장', '베란다', '', '', '', '안방', '', '창고'])
  const setInputValue = useSetRecoilState(InputAnswerState)

  const onSwitchToggleBtn = (idx: number, value: string) => {
    const arr = _.clone(switchList)
    const updatedList = _.set(arr, idx, value)
    setInputValue(updatedList.join(''))
  }

  return (
    <Flex pb="30px" direction="column">
      <Box pb="50px">
        <Image src="/images/questions/q-29.png" alt="" />
      </Box>
      <Flex direction="column" gap="45px">
        <SimpleGrid columns={4} spacing="20px" width="100%">
          <ToggleSwitch idx={0} top="신발장" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={1} top="베란다" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={2} top="화장실" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={3} top="다락방" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
        </SimpleGrid>
        <SimpleGrid columns={4} spacing="20px" width="100%">
          <ToggleSwitch idx={4} top="부엌" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={5} top="안방" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={6} top="거실" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
          <ToggleSwitch idx={7} top="창고" bottom="" onSwitchToggleBtn={onSwitchToggleBtn} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Questions29
