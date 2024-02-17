import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { default as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { getFontStyle } from '@/chakra/fonts'
import { colors } from '@/chakra/colors'

interface Question36Props {}
interface ContentBoxProps {
  idx: number
  date: string
  content: string
}

function Question36(props: Question36Props) {
  const ContentBox = ({ idx, date, content }: ContentBoxProps) => {
    const spliteDate = date.split('-')

    return (
      <Box p="16px" width="100%" bg={colors.white} borderRadius="8px" height="275px">
        <Center flexDirection="column" gap="20px">
          {idx == 4 ? (
            <Flex {...getFontStyle(22, 500, '24px')} gap="8px">
              <Flex>
                20<Text color={colors.red['600']}>??</Text>년
              </Flex>
              <Flex>
                <Text color={colors.red['600']}>?</Text>월
              </Flex>
              <Flex>
                <Text color={colors.red['600']}>?</Text>일
              </Flex>
            </Flex>
          ) : (
            <Flex {...getFontStyle(22, 500, '24px')} gap="8px">
              <Text>{spliteDate[0]}년</Text>
              <Text>{spliteDate[1].length > 1 ? spliteDate[1] : `0${spliteDate[1]}`}월 </Text>
              <Text>{spliteDate[2].length > 1 ? spliteDate[2] : `0${spliteDate[2].length}`}일</Text>
            </Flex>
          )}
          <Box {...getFontStyle(18, 400, '32px')} wordBreak="break-all">
            {content}
          </Box>
        </Center>
      </Box>
    )
  }

  return (
    <>
      <Swiper slidesPerView={1.12} spaceBetween={10}>
        <SwiperSlide>
          <ContentBox
            idx={1}
            date={'2002-9-20'}
            content="오늘은 나의 열번째 생일이다. 가족들과 파티에서 맛있는 것도 많이 먹고 생일 선물도 받았다. 3일 뒤에는 동생이 생일이다. 또 파티 할 생각에 기쁘다."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentBox
            idx={2}
            date={'2012-3-2'}
            content="드디어 고등학교를 졸업이다. 얼른 대학교 입학해서 이것 저것 해보고 싶은 것이 많다. 내일은 동생이 내가 졸업한 이 학교에 입학을 한다."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentBox
            idx={3}
            date={'2015-11-22'}
            content="너무나 기다리던 군대 전역 날이다. 사회에 나가면 다시 공부도 열심히 하고 여행도 다니고 연애도 하고싶다."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentBox
            idx={4}
            date={'20??-?-?'}
            content="오늘은 내 동생의 생일이다. 동생도 어느새 대학생이 되고 내년에는 군 입대를 한다고 한다. 나도 벌써 제대한지가 2년이 지나구 내일은 첫 회사에 입사하는 날이다 많이 긴장이 된다. "
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Question36
