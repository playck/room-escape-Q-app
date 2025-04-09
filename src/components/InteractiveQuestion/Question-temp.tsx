import { Center } from '@chakra-ui/react'
interface QuestionTempProps {}

import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function QuestionTemp(props: QuestionTempProps) {
  return (
    <Center position="relative">
      <Flex w="100%" h="100vh" justifyContent="center" alignContent="center">
        <Flex position="relative" w="300px" h="500px" mt="500px" border="1px solid black">
          <Swiper
            spaceBetween={1.1}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Flex w="150px" h="100px"></Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex w="150px" h="100px" border="1px solid blue" justifyContent="center" alignItems="center">
                1
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex w="150px" h="100px"></Flex>
            </SwiperSlide>
          </Swiper>
          <Flex position="absolute" top="0" right="0" w="150px" h="100px" justifyContent="center" alignItems="center">
            2
          </Flex>
        </Flex>
      </Flex>
    </Center>
  )
}

export default QuestionTemp
