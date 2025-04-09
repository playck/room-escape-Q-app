import { Flex, Center, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function QuestionTemp5() {
  return (
    <Flex direction="column" gap="20px">
      <Center>
        <Flex position="relative" w="320px" h="300px" border="1px solid transparent" overflow="hidden">
          <Swiper spaceBetween={1.1} slidesPerView={2} initialSlide={1}>
            <SwiperSlide>
              <Flex w="150px" h="300px"></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <SimpleGrid w="150px" h="300px" columns={2} border="10px solid #8B4513">
                <Flex
                  w="65px"
                  h="145px"
                  direction="column"
                  borderBottom="5px solid #8B4513"
                  borderRight="2.5px solid #8B4513"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    width="100%"
                    height="5px"
                    background="#8B4513"
                  />
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '150%',
                      height: '5px',
                      background: '#8B4513',
                      top: '-2.5px',
                      left: '0',
                      transform: 'rotate(45deg)',
                      transformOrigin: '0 0',
                    }}
                  />
                </Flex>
                <Flex
                  position="relative"
                  w="65px"
                  h="145px"
                  direction="column"
                  borderBottom="5px solid #8B4513"
                  borderLeft="3.5px solid #8B4513"
                >
                  <Box
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    width="100%"
                    height="5px"
                    background="#8B4513"
                  />
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '155%',
                      height: '5px',
                      background: '#8B4513',
                      top: '-5.5px',
                      right: '-1px',
                      transform: 'rotate(-47deg)',
                      transformOrigin: '100% 0',
                    }}
                  />
                </Flex>
                <Flex w="65px" h="140px" position="relative" borderRight="3.5px solid #8B4513">
                  <Box
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    width="100%"
                    height="5px"
                    background="#8B4513"
                  />
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '150%',
                      height: '5px',
                      background: '#8B4513',
                      bottom: '50%',
                      left: '-5px',
                      transform: 'rotate(-45deg)',
                      transformOrigin: '0 0',
                    }}
                  />
                </Flex>
                <Flex w="65px" h="140px" position="relative" borderLeft="3.5px solid #8B4513">
                  <Box
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    width="100%"
                    height="5px"
                    background="#8B4513"
                  />
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '150%',
                      height: '5px',
                      background: '#8B4513',
                      top: 'calc(50% - 5px)',
                      right: '-5px',
                      transform: 'rotate(45deg)',
                      transformOrigin: '100% 0',
                    }}
                  />
                </Flex>
                <Flex w="65px" h="150px" position="relative">
                  <Box
                    w="100%"
                    h="100%"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '150%',
                      height: '5px',
                      background: '#8B4513',
                      top: '-50%',
                      left: '-50%',
                      transform: 'rotate(-45deg)',
                      transformOrigin: '100% 0',
                    }}
                  />
                </Flex>
              </SimpleGrid>
            </SwiperSlide>
            <SwiperSlide>
              <Flex w="150px" h="300px"></Flex>
            </SwiperSlide>
          </Swiper>
          <SimpleGrid position="absolute" top="0" right="0" border="10px solid #8B4513" w="145px" h="300px" columns={2}>
            <Flex w="65px" h="72.5px" borderRight="5px solid #8B4513" borderBottom="5px solid #8B4513" />
            <Flex w="65px" h="72.5px" borderBottom="5px solid #8B4513">
              <Box
                w="100%"
                h="100%"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '150%',
                  height: '5px',
                  background: '#8B4513',
                  top: '-5px',
                  left: '0',
                  transform: 'rotate(47deg)',
                  transformOrigin: '0 0',
                }}
              />
            </Flex>
            <Flex w="65px" h="72.5px" borderRight="5px solid #8B4513" borderBottom="5px solid #8B4513">
              <Box
                w="100%"
                h="100%"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '155%',
                  height: '5px',
                  background: '#8B4513',
                  top: '-2.5px',
                  left: '0',
                  transform: 'rotate(47deg)',
                  transformOrigin: '0 0',
                }}
              />
            </Flex>
            <Flex w="65px" h="72.5px" borderBottom="5px solid #8B4513" />
            <Flex w="65px" h="72.5px" borderBottom="5px solid #8B4513" borderRight="5px solid #8B4513" />
            <Flex w="65px" h="72.5px" borderBottom="5px solid #8B4513" />
            <Flex w="65px" h="75px" borderRight="5px solid #8B4513">
              <Box
                w="100%"
                h="100%"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '150%',
                  height: '5px',
                  background: '#8B4513',
                  top: '-4.5px',
                  left: '0',
                  transform: 'rotate(45deg)',
                  transformOrigin: '0 0',
                }}
              />
            </Flex>
            <Flex w="65px" h="75px">
              <Box
                w="100%"
                h="100%"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '150%',
                  height: '5px',
                  background: '#8B4513',
                  top: '0',
                  right: '-150%',
                  transform: 'rotate(135deg)',
                  transformOrigin: '0 0',
                }}
              />
            </Flex>
          </SimpleGrid>
        </Flex>
      </Center>
      <Flex justifyContent="center" gap="20px">
        <SimpleGrid columns={3} row={4} spacing={0} width="fit-content" border="1px solid #8B4513">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Flex key={idx} w="45px" h="45px" border="1px solid #8B4513" justifyContent="center" alignItems="center">
              {idx + 1}
            </Flex>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={2} row={4} spacing={0} width="fit-content" border="1px solid #8B4513">
          {Array.from({ length: 8 }).map((_, index) => (
            <Flex key={index} w="45px" h="45px" border="1px solid #8B4513" justifyContent="center" alignItems="center">
              {index + 13}
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
      <Flex gap="16px" justifyContent="center" fontSize="20px" fontWeight="500">
        <Text as="span">2,5</Text>
        <Text as="span">10,11</Text>
        <Text as="span">2,3</Text>
        <Text as="span">15,17</Text>
        <Text as="span">18,20</Text>
      </Flex>
    </Flex>
  )
}
