import { ModalPropsState, ModalState } from '@/atoms/etc/modal'
import { Button, Center, Flex, Text } from '@chakra-ui/react'
import { useResetRecoilState } from 'recoil'

interface AlertModalProps {
  msg: string
}

function AlertModal({ msg }: AlertModalProps) {
  const onResetModal = useResetRecoilState(ModalState)
  const onResetModalProps = useResetRecoilState(ModalPropsState)

  const onCloseModal = () => {
    onResetModal()
    setTimeout(() => {
      onResetModalProps()
    }, 100)
  }

  return (
    <Center position="relative" p="20px" minH="200px" borderRadius="12px">
      <Text>{msg}</Text>
      <Flex position="absolute" bottom="5%" right="5%">
        <Button onClick={() => onCloseModal()}>확인</Button>
      </Flex>
    </Center>
  )
}

export default AlertModal
