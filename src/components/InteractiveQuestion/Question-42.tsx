import { getFontStyle } from '@/chakra/fonts'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface Question42Props {}

function Question42(props: Question42Props) {
  return (
    <Flex direction="column" gap="20px">
      <Center position="relative" minH="300px">
        <Box position="absolute" top="10px" w="85px" height="85px" border="5px solid #A74982"></Box>
        <Box
          position="absolute"
          top="105px"
          left={['0', '120px']}
          w="85px"
          height="85px"
          border="5px solid #ED5351"
        ></Box>
        <Box
          position="absolute"
          top="105px"
          right={['0', '120px']}
          w="85px"
          height="85px"
          border="5px solid #0000FF"
        ></Box>
        <Box position="absolute" bottom="10px" w="85px" height="85px" border="5px solid #32A76F"></Box>
      </Center>
      <Flex
        direction="column"
        gap="15px"
        sx={{
          '.question-42-drag-el': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70px',
            height: '70px',
            backgroundColor: '#FFF',
            fontSize: '18px',
            fontWeight: '600',
            borderRadius: '10px',
          },
        }}
      >
        <Flex gap="15px" justifyContent="center">
          <motion.div
            className="question-42-drag-el"
            drag
            dragConstraints={{
              top: -310,
              left: -40,
              right: 220,
              bottom: 0,
            }}
          >
            <Box
              position="relative"
              sx={{
                span: {
                  position: 'absolute',
                },
              }}
            >
              <Text as="span" top="-15px" left="-25px" color="#A74982">
                ㄱ
              </Text>
              <Text as="span" top="-14px" left="-14px">
                ㅓ
              </Text>
              <Text as="span" top="-18px" color="#ED5351">
                ㅅ
              </Text>
              <Text as="span" top="-18px" left="10px" color="#0000FF">
                ㅣ
              </Text>
              <Text as="span" top="-3px" left="5px" color="#32A76F">
                ㄹ
              </Text>
            </Box>
          </motion.div>
          <motion.div
            className="question-42-drag-el"
            drag
            dragConstraints={{
              top: -310,
              left: -120,
              right: 120,
              bottom: 0,
            }}
          >
            <Box
              position="relative"
              sx={{
                span: {
                  position: 'absolute',
                },
              }}
            >
              <Text as="span" top="-15px" left="-25px" color="#ED5351">
                ㅅ
              </Text>
              <Text as="span" top="-14px" left="-15px">
                ㅓ
              </Text>
              <Text as="span" top="-14px">
                ㅈ
              </Text>
              <Text as="span" top="-14px" left="11px" color="#A74982">
                ㅐ
              </Text>
            </Box>
          </motion.div>
          <motion.div
            className="question-42-drag-el"
            drag
            dragConstraints={{
              top: -310,
              left: -200,
              right: 20,
              bottom: 0,
            }}
          >
            <Box
              position="relative"
              sx={{
                span: {
                  position: 'absolute',
                },
              }}
            >
              <Text as="span" top="-18px" left="-25px" color="#ED5351">
                ㅊ
              </Text>
              <Text as="span" top="-17px" left="-13px" color="#0000FF">
                ㅣ
              </Text>
              <Text as="span" top="-3px" left="-16px" color="#32A76F">
                ㅁ
              </Text>
              <Text as="span" top="-18px" left="0px" color="#A74982">
                ㅅ
              </Text>
              <Text as="span" top="-18px" left="10px">
                ㅣ
              </Text>
              <Text as="span" top="-3px" left="5px">
                ㄹ
              </Text>
            </Box>
          </motion.div>
        </Flex>
        <Flex gap="15px" justifyContent="center">
          <motion.div
            className="question-42-drag-el"
            drag
            dragConstraints={{
              top: -400,
              left: -60,
              right: 180,
              bottom: 0,
            }}
          >
            <Box
              position="relative"
              sx={{
                span: {
                  position: 'absolute',
                },
              }}
            >
              <Text as="span" top="-18px" left="-25px" color="#ED5351">
                ㅊ
              </Text>
              <Text as="span" top="-17px" left="-13px">
                ㅏ
              </Text>
              <Text as="span" top="-3px" left="-16px" color="#0000FF">
                ㅇ
              </Text>
              <Text as="span" top="-17px" left="5px">
                ㄱ
              </Text>
              <Text as="span" top="-8px" left="5px" color="#32A76F">
                ㅗ
              </Text>
            </Box>
          </motion.div>
          <motion.div
            className="question-42-drag-el"
            drag
            dragConstraints={{
              top: -420,
              left: -160,
              right: 80,
              bottom: 0,
            }}
          >
            <Box
              position="relative"
              sx={{
                span: {
                  position: 'absolute',
                },
              }}
            >
              <Text as="span" top="-18px" left="-18px">
                ㅈ
              </Text>
              <Text as="span" top="-7px" left="-18px" color="#32A76F">
                ㅜ
              </Text>
              <Text as="span" top="-18px" left="0">
                ㅂ
              </Text>
              <Text as="span" top="-17.5px" left="13px" color="#0000FF">
                ㅏ
              </Text>
              <Text as="span" top="-4px" left="7px" color="#ED5351">
                ㅇ
              </Text>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
      <SimpleGrid
        mt="16px"
        columns={2}
        spacing={'12px'}
        sx={{
          '.q-42-grid-el': {
            position: 'relative',
            p: '8px',
            border: '1px solid #FFF',
            borderRadius: '12px',
            bg: '#FFF',
            minH: '100px',
            aspectRatio: '1 / 1',
          },
        }}
      >
        <Flex className="q-42-grid-el">
          <Text as="span" fontSize="13px">
            101호
          </Text>
          <Text as="p" position="absolute" top="43%" left="15px">
            서재
          </Text>
          <Text as="p" position="absolute" top="43%" right="20px">
            주방
          </Text>
          <Text as="p" position="absolute" bottom="10%" left={['38%', '43%']}>
            침실
          </Text>
        </Flex>
        <Flex className="q-42-grid-el">
          <Text as="span" fontSize="13px">
            102호
          </Text>
          <Text as="p" position="absolute" top="43%" left="15px">
            주방
          </Text>
          <Text as="p" position="absolute" top="43%" right="20px">
            침실
          </Text>
          <Text as="p" position="absolute" bottom="10%" left={['38%', '43%']}>
            거실
          </Text>
        </Flex>
        <Flex className="q-42-grid-el">
          <Text as="span" fontSize="13px">
            103호
          </Text>
          <Text as="p" position="absolute" top="20%" left={['38%', '43%']}>
            거실
          </Text>
          <Text as="p" position="absolute" top="43%" right="20px">
            서재
          </Text>
          <Text as="p" position="absolute" bottom="10%" left={['38%', '43%']}>
            주방
          </Text>
        </Flex>
        <Flex className="q-42-grid-el">
          <Text as="span" fontSize="13px">
            104호
          </Text>
          <Text as="p" position="absolute" top="20%" left={['38%', '43%']}>
            창고
          </Text>
          <Text as="p" position="absolute" top="43%" left="15px">
            거실
          </Text>
          <Text as="p" position="absolute" top="43%" right="20px">
            주방
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default Question42
