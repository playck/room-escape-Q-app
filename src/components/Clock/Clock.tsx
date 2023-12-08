import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { HiArrowPath } from 'react-icons/hi2'
interface ClockProps {}

function Clock(props: ClockProps) {
  const [bigclockDeg, setBigClockDeg] = useState(0)
  const [smallClockDeg, setSmallClockDeg] = useState(-6)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)

  const onHandleBigClock = () => {
    if (bigclockDeg == -12) {
      setBigClockDeg(-1)
    } else {
      setBigClockDeg(bigclockDeg - 1)
    }
  }

  const onHandleSmallClock = () => {
    if (smallClockDeg == -12) {
      setSmallClockDeg(-1)
    } else {
      setSmallClockDeg(smallClockDeg - 1)
    }
  }

  useEffect(() => {
    if (bigclockDeg <= -6) {
      setHour(12 + (6 + bigclockDeg))
    } else {
      setHour(6 - Math.abs(bigclockDeg))
    }
  }, [bigclockDeg])

  useEffect(() => {
    if (smallClockDeg <= -6) {
      setMin(12 + (6 + smallClockDeg))
    } else {
      setMin(6 - Math.abs(smallClockDeg))
    }
  }, [smallClockDeg])

  console.log('bigclockDeg', hour)
  console.log('smallClockDeg', min)

  return (
    <>
      <Center flexDirection="column">
        <Flex
          position="relative"
          maxW="150px"
          maxH="150px"
          width="100%"
          height="100%"
          borderRadius="50%"
          border="1px solid black"
          sx={{
            img: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          }}
        >
          <Box
            width="100%"
            height="100%"
            bg="transparent"
            position="absolute"
            top="0"
            left="0"
            borderRadius="50%"
            transformOrigin="center center"
            transform={`rotate(${smallClockDeg * 30}deg)`}
          >
            <Box
              width="3px"
              height="33%"
              borderTopRadius="30px"
              position="absolute"
              top="48%"
              left="48.5%"
              bg="black"
            />
          </Box>
          <Box
            width="100%"
            height="100%"
            bg="transparent"
            position="absolute"
            top="0"
            left="0"
            borderRadius="50%"
            transformOrigin="center center"
            transform={`rotate(${bigclockDeg * 30}deg)`}
          >
            <Box
              width="4px"
              height="28%"
              borderTopRadius="30px"
              position="absolute"
              top="48%"
              left="48.5%"
              bg="black"
            />
          </Box>
          <Image src="/images/items/clock.png" alt="clock" />
        </Flex>
        <Flex
          mt="10px"
          gap="10px"
          sx={{
            button: {
              p: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          <Flex alignItems="center">
            <Text>시</Text>
            <Box>
              <Button onClick={() => onHandleBigClock()}>
                <HiArrowPath size={22} />
              </Button>
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Text>분</Text>
            <Box>
              <Button onClick={() => onHandleSmallClock()}>
                <HiArrowPath size={22} />
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  )
}

export default Clock
