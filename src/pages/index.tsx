import { getFontStyle } from '@/chakra/fonts'
import { Center, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <Flex direction="column" flex="1">
      <Center
        position="absolute"
        bottom="15%"
        left="50%"
        transform="translateX(-50%)"
        width="120px"
        height="120px"
        border="3px solid #FFFFFF"
        borderRadius="50%"
        color="#FFF"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
        {...getFontStyle(20, 700, '24px')}
        onClick={() => router.push('/questions')}
      >
        <button className="start-btn">시작</button>
      </Center>
    </Flex>
  )
}
