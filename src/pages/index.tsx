import { getFontStyle } from '@/chakra/fonts'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <Flex direction="column" flex="1">
      <Flex
        direction="column"
        alignItems="center"
        gap="20px"
        mb="30px"
        height="100px"
        color="white"
        {...getFontStyle(48, 800, '32px')}
      >
        <Text className="main-text-1">방 탈 출</Text>
        <Text className="main-text-2">훈 련 소</Text>
      </Flex>
      <Box
        height="50vh"
        sx={{
          img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <Image src="/images/main/doormain.png" alt="" />
      </Box>
      <Center
        position="absolute"
        bottom="10%"
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
