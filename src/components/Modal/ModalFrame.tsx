import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { useEffect } from 'react'

interface ModalFrameProps {}

function ModalFrame(props: ModalFrameProps) {
  const ModalInfo = useRecoilValue(ModalState)
  const ModalProps = useRecoilValue(ModalPropsState)
  const { isOpen, content } = ModalInfo
  const resetModalInfo = useResetRecoilState(ModalState)
  const onResetModalProps = useResetRecoilState(ModalPropsState)
  const router = useRouter()

  useEffect(() => {
    resetModalInfo()
  }, [router])

  const onCloseModal = () => {
    resetModalInfo()
    setTimeout(() => {
      onResetModalProps()
    }, 100)
  }

  return (
    <Modal motionPreset="none" onClose={() => onCloseModal()} {...ModalProps} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent mx="20px">{content}</ModalContent>
    </Modal>
  )
}

export default ModalFrame
