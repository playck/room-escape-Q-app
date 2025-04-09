import { Box, Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { FaArrowsRotate } from 'react-icons/fa6'

interface QuestionTempProps {}

function QuestionTemp2(props: QuestionTempProps) {
  const [circleDeg, setCircleDeg] = useState(90)

  const onHandleCircleDeg = () => {
    setCircleDeg(circleDeg + 90)
  }

  return (
    <Center flexDirection="column">
      <Flex
        position="relative"
        aspectRatio="1 / 1"
        w="287px"
        h="287px"
        border="1px solid #f9cb9c"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
        bg="#f9cb9c"
        overflow="hidden"
      >
        {/* J */}
        <Box position="absolute" top="0" left="53%" w="20px" h="50px" bg="black" border="1px solid black" />
        {/* P */}
        <Box
          position="absolute"
          top="50%"
          transform="translateY(-34%)"
          left="26px"
          w="20px"
          h="82px"
          bg="black"
          border="1px solid black"
        />
        {/* O */}
        <Box
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%) rotate(180deg)"
          w="55px"
          h="45px"
          borderTop="20px solid black"
          borderRight="20px solid black"
          borderLeft="20px solid black"
          borderBottom="none"
          borderRadius="50% 50% 0 0 / 50% 50% 0 0"
          backgroundColor="transparent"
        />
        {/* 원형 */}
        <Flex
          position="relative"
          w="200px"
          h="200px"
          border="1px solid #f3f3f3"
          borderRadius="50%"
          bg="#f3f3f3"
          overflow="hidden"
          transform={`rotate(${circleDeg}deg)`}
          transformOrigin="50% 50%"
          transition="all .5s ease"
        >
          <Box
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%) rotate(180deg)"
            w="55px"
            h="45px"
            borderTop="20px solid #c0c0c0"
            borderRight="20px solid #c0c0c0"
            borderLeft="20px solid #c0c0c0"
            borderBottom="none"
            borderRadius="50% 50% 0 0 / 50% 50% 0 0"
            backgroundColor="transparent"
            zIndex="1"
          />
          <Box position="absolute" top="90%" left="50%" transform="translate(-50%, -50%) rotate(90deg)">
            <IoMdArrowDropright size="35px" />
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center" mt="20px" onClick={() => onHandleCircleDeg()}>
        <Center w="40px" h="40px" borderRadius="50%" bg="gray.1000">
          <FaArrowsRotate color="#FFF" />
        </Center>
      </Flex>
    </Center>
  )
}

export default QuestionTemp2
