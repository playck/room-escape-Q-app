import { atom } from 'recoil'

interface Modal {
  isOpen: boolean
  content: React.ReactNode
}

interface ModalProps {
  size: string
  isCentered: boolean
}

export const ModalState = atom<Modal>({
  key: 'ModalState',
  default: {
    isOpen: false,
    content: undefined,
  },
})

export const ModalPropsState = atom<ModalProps>({
  key: 'ModalPropsState',
  default: {
    size: 'md',
    isCentered: true,
  },
})
