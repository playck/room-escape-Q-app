import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/chakra/theme'
import { Layout } from '@/components/Layout'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect } from 'react'
import { RecoilRoot, RecoilEnv } from 'recoil'
import ModalFrame from '@/components/Modal/ModalFrame'
import { Header } from '@/components/Header'
import { initGA, trackingPageView } from '@/lib/script/ga'
import { useRouter } from 'next/router'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  const router = useRouter()

  initGA()

  useEffect(() => {
    if (router?.query.dev === 'true') {
      return
    } else {
      trackingPageView()
    }
  }, [router.pathname])

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ModalFrame />
      </ChakraProvider>
    </RecoilRoot>
  )
}
