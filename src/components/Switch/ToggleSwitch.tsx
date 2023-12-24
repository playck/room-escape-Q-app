import { Box, Flex, Switch, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface ToggleSwitchProps {
  top: any
  bottom: any
}

function ToggleSwitch({ top = 'Y', bottom = '' }: ToggleSwitchProps) {
  const [topValue, setTopValue] = useState('0')
  const [bottomValue, setBottomValue] = useState('1')
  const [selectedValue, setSelectedValue] = useState('0')

  useEffect(() => {
    setTopValue(top)
    setBottomValue(bottom)
  }, [])

  const onToggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedValue('0')
    } else {
      setSelectedValue('1')
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
