import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/chakra/theme'
import { Layout } from '@/components/Layout'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { RecoilRoot, RecoilEnv } from 'recoil'
import ModalFrame from '@/components/Modal/ModalFrame'
import { Ga4Script } from '@/components/Script'
import { Header } from '@/components/Header'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ModalFrame />
        <Ga4Script />
      </ChakraProvider>
    </RecoilRoot>
  )
}
