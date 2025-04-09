import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function QuestionTemp4() {
  return (
    <Flex w="100%" justifyContent="center" alignContent="center" direction="column" gap="20px">
      <Flex position="relative" w="300px" h="120px" border="1px solid transparent" overflow="hidden">
        <Swiper
          spaceBetween={1.1}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px" border="10px solid #8B4513" justifyContent="center" alignItems="center">
              1
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
        </Swiper>
        <Flex
          position="absolute"
          top="0"
          right="0"
          border="10px solid #8B4513"
          w="150px"
          h="120px"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Flex>
      </Flex>
      <Flex position="relative" w="300px" h="120px" border="1px solid transparent" overflow="hidden">
        <Flex
          position="absolute"
          top="0"
          left="0"
          border="10px solid #8B4513"
          w="150px"
          h="120px"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Flex>
        <Swiper
          spaceBetween={1.1}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px" border="10px solid #8B4513" justifyContent="center" alignItems="center">
              1
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
      <Flex position="relative" w="300px" h="120px" border="1px solid transparent" overflow="hidden">
        <Swiper
          spaceBetween={1.1}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px" border="10px solid #8B4513" justifyContent="center" alignItems="center">
              1
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
        </Swiper>
        <Flex
          position="absolute"
          top="0"
          right="0"
          border="10px solid #8B4513"
          w="150px"
          h="120px"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Flex>
      </Flex>
      <Flex position="relative" w="300px" h="120px" border="1px solid transparent" overflow="hidden">
        <Flex
          position="absolute"
          top="0"
          left="0"
          border="10px solid #8B4513"
          w="150px"
          h="120px"
          justifyContent="center"
          alignItems="center"
        >
          2
        </Flex>
        <Swiper
          spaceBetween={1.1}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px" border="10px solid #8B4513" justifyContent="center" alignItems="center">
              1
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex w="150px" h="120px"></Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}
