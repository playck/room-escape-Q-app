import { ModalState } from '@/atoms/etc/modal'
import { getFontStyle } from '@/chakra/fonts'
import { Question } from '@/lib/constant/questions'
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import { useResetRecoilState } from 'recoil'

interface HintModalProps {
  hint: Question['hint']
}

function HintModal({ hint = '' }: HintModalProps) {
  const resetModalInfo = useResetRecoilState(ModalState)

  return (
    <Center
      position="relative"
      flexDirection="column"
      minH="40vh"
      borderRadius="12px"
      overflow="hidden"
      sx={{
        img: {
          width: '100%',
          maxHeight: '70%',
        },
      }}
    >
      <Box p="20px" wordBreak="keep-all" whiteSpace="pre-line">
        <Text {...getFontStyle(15, 500, '24px')}>{hint}</Text>
      </Box>
      <Flex position="absolute" bottom="5%" right="5%">
        <Button height="48px" onClick={() => resetModalInfo()}>
          닫기
        </Button>
      </Flex>
    </Center>
  )
}

export default HintModal
