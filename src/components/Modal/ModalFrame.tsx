import { ModalState } from '@/atoms/etc/modal'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { useEffect } from 'react'

interface ModalFrameProps {}

function ModalFrame(props: ModalFrameProps) {
  const [ModalInfo, setModalInfo] = useRecoilState(ModalState)
  const { isOpen, content } = ModalInfo
  const resetModalInfo = useResetRecoilState(ModalState)
  const router = useRouter()

  useEffect(() => {
    resetModalInfo()
  }, [router])

  return (
    <Modal onClose={() => resetModalInfo()} size="md" isOpen={isOpen} isCentered motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent mx="20px">{content}</ModalContent>
    </Modal>
  )
}

export default ModalFrame
