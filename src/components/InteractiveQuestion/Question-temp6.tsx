import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRotate } from 'react-icons/fa6'
import { FaArrowsAltV, FaArrowsAltH } from 'react-icons/fa'

export default function QuestionTemp6() {
  const [redRotate, setRedRotate] = useState(41)
  const [blueRotate, setBlueRotate] = useState(153)
  const [redX, setRedX] = useState(100)
  const [purpleX, setPurpleX] = useState(80)
  const [purpleY, setPurpleY] = useState(-29)

  return (
    <Box position="relative" h="500px">
      <motion.div
        className="red-stick"
        animate={{ rotate: redRotate, x: redX }}
        transition={{ type: 'spring' }}
        style={{
          position: 'absolute',
          top: 'calc(30% - 100px)',
          left: 'calc(50% - 120px)',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          backgroundColor: 'transparent',
          borderTop: '3px solid red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <motion.div
        className="blue-stick"
        animate={{ rotate: blueRotate }}
        transition={{ type: 'spring' }}
        style={{
          position: 'absolute',
          top: 'calc(30% - 100px)',
          left: 'calc(50% - 120px)',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          backgroundColor: 'transparent',
          borderTop: '3px solid blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <motion.div
        className="purple-stick"
        animate={{ x: purpleX, y: purpleY }}
        transition={{ type: 'spring' }}
        style={{
          position: 'absolute',
          top: 'calc(30% - 45px)',
          left: 'calc(50% - 100px)',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '120px',
          backgroundColor: 'transparent',
          borderTop: '3px solid purple',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Flex position="absolute" bottom="0px" left="0" direction="column" gap="8px" w="100%">
        <Input value={redRotate} set={setRedRotate} min={-180} max={180}>
          <FaRotate color="red" />
        </Input>
        <Input value={redX} set={setRedX} min={-100} max={100}>
          <FaArrowsAltH color="red" />
        </Input>
        <Input value={blueRotate} set={setBlueRotate} min={-180} max={180}>
          <FaRotate color="blue" />
        </Input>
        <Input value={purpleX} set={setPurpleX} min={-100} max={100}>
          <FaArrowsAltH color="purple" />
        </Input>
        <Input value={purpleY} set={setPurpleY} min={-75} max={75}>
          <FaArrowsAltV color="purple" />
        </Input>
      </Flex>
    </Box>
  )
}

function Input({ value, children, set, min = -180, max = 180 }: any) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        minWidth: '250px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <code style={{ fontSize: '18px', fontWeight: '600' }}>{children}</code>
      <label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            className="range-input"
            type="range"
            style={{
              minWidth: '50vw',
              width: '100%',
            }}
            value={value}
            min={min}
            max={max}
            onChange={(e) => set(parseFloat(e.target.value))}
          />
          <input
            style={{
              border: 'none',
              borderRadius: '5px',
              padding: '5px',
              fontSize: '18px',
              minWidth: '45px',
              backgroundColor: 'white',
            }}
            type="number"
            value={value}
            min={min}
            max={max}
            disabled
          />
        </div>
      </label>
    </div>
  )
}
