import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface ToggleSwitchProps {
  idx: number
  top: any
  bottom: any
  onSwitchToggleBtn: (idx: number, value: string) => void
}

function ToggleSwitch({ idx, top = '', bottom = '', onSwitchToggleBtn }: ToggleSwitchProps) {
  const [topValue, setTopValue] = useState(top)
  const [bottomValue, setBottomValue] = useState(bottom)

  useEffect(() => {
    setTopValue(top)
    setBottomValue(bottom)
  }, [])

  const onToggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSwitchToggleBtn(idx, bottom)
    } else {
      onSwitchToggleBtn(idx, top)
    }
  }

  return (
    <Flex direction="column" width="fit-content" alignItems="center">
      <Box position="relative" top="-20px">
        <Text>{topValue}</Text>
      </Box>
      <Box
        width="fit-content"
        transform="rotate(90deg)"
        outline="none"
        sx={{
          'label > span': {
            background: 'lightgray',
          },
          '.chakra-switch__thumb': {
            backgroundColor: '#FFF',
          },
        }}
      >
        <Switch size="lg" onChange={(e) => onToggleSwitch(e)} />
      </Box>
      <Box position="relative" top="20px">
        {bottomValue}
      </Box>
    </Flex>
  )
}

export default ToggleSwitch
