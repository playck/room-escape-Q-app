import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { Box, CloseButton, Flex } from '@chakra-ui/react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import HintModal from './HintModal'
import { Question } from '@/lib/constant/questions'

interface AdModalProps {
  hint: Question['hint']
  answer: Question['answer']
  interativeAnswer?: Question['interativeAnswer']
}

function AdModal({ hint, answer, interativeAnswer }: AdModalProps) {
  const setModal = useSetRecoilState(ModalState)
  const resetModalProps = useResetRecoilState(ModalPropsState)

  const onCloseAdModal = () => {
    setModal({
      isOpen: true,
      content: <HintModal hint={hint} answer={answer} interativeAnswer={interativeAnswer} />,
    })
    resetModalProps()
  }

  return (
    <Box
      id="ad-wrapper"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: '999',
      }}
    >
      <Flex justifyContent="flex-end" p="8px" zIndex="1000" bg="gray.50">
        <CloseButton onClick={() => onCloseAdModal()} />
      </Flex>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', height: 'calc(100% - 50px)' }}
        data-ad-client="ca-pub-6018563398084009"
        data-ad-slot="8438190738"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Box>
  )
}

export default AdModal
