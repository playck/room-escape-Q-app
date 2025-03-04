import { getFontStyle } from '@/chakra/fonts'
import { Box, Center, Flex, Text, Image } from '@chakra-ui/react'
import { NextImage } from '../Image'
import { useResetRecoilState } from 'recoil'
import { ModalState } from '@/atoms/etc/modal'
import { IoClose } from 'react-icons/io5'

interface DirectionLockBtnInfoProps {}

function DirectionLockBtnInfo(props: DirectionLockBtnInfoProps) {
  const resetModalInfo = useResetRecoilState(ModalState)

  return (
    <Center position="relative" p="50px 20px" flexDirection="column">
      <Center>
        <Text {...getFontStyle(18, 700, '24px')}>방향 자물쇠 사용 방법</Text>
      </Center>
      <Flex direction="column" gap="20px" mt="25px">
        <Flex gap="15px">
          <Box maxW="50%" flex="1">
            <NextImage src="/images/items/directionLockBtn-1.png" alt="" w="300" h="100" />
          </Box>
          <Center flex="1" flexDirection="column" gap="8px">
            <Text>1. 가운데 하얀 버튼을 원하는 방향으로 이미지처럼 화살표 그림 위치까지 끌어 당겨주세요.</Text>
            <Text>2. 원하는 방향을 차례대로 입력한 후 자물쇠 위의 화살표를 눌러주세요. </Text>
          </Center>
        </Flex>
        <Center>
          <Text {...getFontStyle(18, 700, '24px')}>방향 자물쇠 초기화 방법</Text>
        </Center>
        <Center flex="1" wordBreak="keep-all" alignItems="center">
          <Box w="50px" mr="10px">
            <Image src="/images/items/directionLockBtn-2.png" alt="reset-img" />
          </Box>
          <Text>버튼을 눌러주세요.</Text>
        </Center>
      </Flex>
      <Flex position="absolute" top="5px" right="5px">
        <Center p="15px" onClick={() => resetModalInfo()}>
          <IoClose size={30} />
        </Center>
      </Flex>
    </Center>
  )
}

export default DirectionLockBtnInfo
