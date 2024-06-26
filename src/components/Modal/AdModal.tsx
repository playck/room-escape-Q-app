import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { Box, CloseButton, Flex } from '@chakra-ui/react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import HintModal from './HintModal'
import { Question } from '@/lib/constant/questions'
import { useEffect } from 'react'

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

  useEffect(() => {
    if (window) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || [])?.push({})
      } catch {
        // skip ad
      }
    }
  }, [])

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
      <Box
        id="ad-wrapper"
        position="absolute"
        top="50%"
        transform="translate(0, -52.5%)"
        left={0}
        width="100%"
        zIndex="999"
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: 'calc(100% - 50px)' }}
          data-ad-client="ca-pub-6018563398084009"
          data-ad-slot="8438190738"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </Box>
    </Box>
  )
}

export default AdModal
