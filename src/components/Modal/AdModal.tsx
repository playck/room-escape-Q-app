import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { Box, CloseButton, Flex, Text } from '@chakra-ui/react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import HintModal from './HintModal'
import { Question } from '@/lib/constant/questions'

declare global {
  interface Window {
    adsbygoogle: any
  }
}

interface AdModalProps {
  hint: Question['hint']
  answer: Question['answer']
  interativeAnswer?: Question['interativeAnswer']
}

function AdModal({ hint, answer, interativeAnswer }: AdModalProps) {
  const setModal = useSetRecoilState(ModalState)
  const resetModalProps = useResetRecoilState(ModalPropsState)
  const coupangAdList = [
    'https://link.coupang.com/a/clwVFc',
    'https://coupa.ng/chHqGy',
    'https://link.coupang.com/a/clwWSH',
  ]
  const coupangAdIndex = Math.floor(Math.random() * coupangAdList.length)

  // useEffect(() => {
  //   if (window) {
  //     try {
  //       ;(window.adsbygoogle = window.adsbygoogle || [])?.push({})
  //     } catch {
  //       // skip ad
  //     }
  //   }
  // }, [])

  const onCloseAdModal = () => {
    setModal({
      isOpen: true,
      content: <HintModal hint={hint} answer={answer} interativeAnswer={interativeAnswer} />,
    })
    resetModalProps()
  }

  return (
    <Box minHeight={['700px !important', '1000px !important', '1000px !important']}>
      <Flex justifyContent="flex-end" p="8px" zIndex="1000" bg="gray.50">
        <CloseButton onClick={() => onCloseAdModal()} />
      </Flex>
      <Flex
        id="ad-wrapper"
        position="absolute"
        top="50%"
        transform="translate(0, -52.5%)"
        left={0}
        width="100%"
        zIndex="999"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="20px"
      >
        <iframe src={coupangAdList[coupangAdIndex]} width="300" height="240" frameBorder="0" scrolling="no"></iframe>
        <Text fontSize="12px" color="gray.500" px="20px">
          &quot;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&quot;
        </Text>
        {/* <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: 'calc(100% - 50px)' }}
          data-ad-client="ca-pub-6018563398084009"
          data-ad-slot="8438190738"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins> */}
      </Flex>
    </Box>
  )
}

export default AdModal
