import { isPageLoadingState } from '@/atoms/etc/modal'
import { Center, Modal, ModalContent, ModalOverlay, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Router from 'next/router'
import { colors } from '@/chakra/colors'

function PageLoading() {
  const [isPageLoading, setIsPageLoading] = useRecoilState(isPageLoadingState)
  const { pathname } = useRouter()

  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true)
    }
    const routeEventEnd = () => {
      setIsPageLoading(false)
    }

    Router.events.on('routeChangeStart', routeEventStart)
    Router.events.on('routeChangeComplete', routeEventEnd)
    Router.events.on('routeChangeError', routeEventEnd)
    return () => {
      Router.events.off('routeChangeStart', routeEventStart)
      Router.events.off('routeChangeComplete', routeEventEnd)
      Router.events.off('routeChangeError', routeEventEnd)
    }
  }, [pathname])

  return (
    <Modal isOpen={isPageLoading} onClose={() => {}} closeOnOverlayClick={false} isCentered>
      {/* <ModalOverlay /> */}
      <ModalContent bg="transparent" boxShadow="none">
        <Center>
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color={colors.gray[800]} size="xl" />
        </Center>
      </ModalContent>
    </Modal>
  )
}

export default PageLoading
