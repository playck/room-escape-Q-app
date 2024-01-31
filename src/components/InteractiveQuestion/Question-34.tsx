import { getFontStyle } from '@/chakra/fonts'
import { Box, Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowsRotate } from 'react-icons/fa6'
import { CgArrowLongLeft } from 'react-icons/cg'

interface Question34Props {}

function Question34(props: Question34Props) {
  const [circleDeg, setCircelDeg] = useState(0)

  const onHandleCircleDeg = () => {
    setCircelDeg(circleDeg + 90)
  }

  return (
    <>
      <Center>
        <Center
          position="relative"
          width="235px"
          height="235px"
          border="1px solid #495057"
          borderRadius="20px"
          bg="#495057"
        >
          <Box position="absolute" top="2px" left="50%" transform="translateX(-50%)" letterSpacing="5px" color="#FFF">
            ㄱ ㅁ ㅇ
          </Box>
          <Box
            position="absolute"
            w="10px"
            top="50%"
            left="4.5px"
            transform="translateY(-50%)"
            lineHeight="30px"
            color="#FFF"
          >
            ㅐ ㅏ ㅅ
          </Box>
          <Box
            position="absolute"
            bottom="2px"
            left="50%"
            transform="translateX(-50%)"
            letterSpacing="5px"
            color="#FFF"
          >
            ㄹ ㅜ ㅏ
          </Box>
          <Box
            position="absolute"
            w="10px"
            top="50%"
            right="9.5px"
            transform="translateY(-50%)"
            lineHeight="30px"
            color="#FFF"
          >
            ㅗ ㄴ ㅜ
          </Box>
          <Center width="180px" height="180px" border="1px solid #868e96" borderRadius="20px" bg="#868e96">
            {/* 원형 */}
            <Box
              position="relative"
              width="200px"
              height="200px"
              borderRadius="50%"
              //   border="1px solid black"
              transform={`rotate(${circleDeg}deg)`}
              transformOrigin="50% 50%"
              transition="all .5s ease"
            >
              <Flex
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                justifyContent="space-between"
                px="8px"
                width="75%"
                height="25px"
                border="1px solid #DEB887"
                backgroundSize="100%"
                backgroundImage="radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, transparent 70.71%),
                      repeating-linear-gradient(0deg, #DEB887, #DEB887 1px, #F5DEB3 1px, #F5DEB3 3%)"
              >
                <Box {...getFontStyle(20, 700, '22px')}> + </Box>
              </Flex>
              <Flex
                position="absolute"
                justifyContent="space-between"
                top="43%"
                left="50%"
                transform="translateX(-50%) rotate(90deg)"
                px="8px"
                width="75%"
                height="25px"
                border="1px solid #DEB887"
                backgroundSize="100%"
                backgroundImage="radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, transparent 70.71%),
                      repeating-linear-gradient(0deg, #DEB887, #DEB887 1px, #F5DEB3 1px, #F5DEB3 3%)"
              >
                <Center>
                  <CgArrowLongLeft size="22px" />
                </Center>
                <Box {...getFontStyle(20, 700, '22px')}> + </Box>
              </Flex>
            </Box>
            {/* 원형 */}
          </Center>
        </Center>
      </Center>
      <Flex justifyContent="center" mt="20px" onClick={() => onHandleCircleDeg()}>
        <Center w="40px" h="40px" borderRadius="50%" bg="gray.1000">
          <FaArrowsRotate color="#FFF" />
        </Center>
      </Flex>
    </>
  )
}

export default Question34
