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
        gap="30px"
        mb={['30px', '50px']}
        height="100px"
        color="white"
        {...getFontStyle(48, 400, '36px')}
        fontFamily="main"
      >
        <Text className="main-text-1" filter="drop-shadow(8px 10px 5px #000000)">
          방 탈 출
        </Text>
        <Text className="main-text-2" filter="drop-shadow(8px 10px 5px #000000)">
          부 트 캠 프
        </Text>
      </Flex>
      <Box
        height="60vh"
        sx={{
          backgroundImage: 'url(/images/main/mainDoor.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'content-box',
          backgroundPosition: 'center 65%',
          backgroundSize: '110%',
        }}
      />
      <Flex mt={['25px', '100px']} mb="20px" justifyContent="center">
        <Center
          width={['100px', '150px']}
          height={['100px', '150px']}
          bg="#202020"
          border="3px solid #FFFFFF"
          borderRadius="50%"
          color="#FFF"
          cursor="pointer"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
          fontSize={['20px', '32px']}
          fontWeight="700"
          lineHeight={['24px', '32px']}
          onClick={() => router.push('/questions')}
        >
          <button className="start-btn">시작</button>
        </Center>
      </Flex>
    </Flex>
  )
}
