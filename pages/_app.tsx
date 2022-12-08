import type { AppProps } from 'next/app'
import Header from "../components/header";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header pageName='ぼけ' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
