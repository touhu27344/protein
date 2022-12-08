import type { AppProps } from 'next/app'
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Header
            pageName='ぼけ'
        />
        <Component {...pageProps} />
      </div>
  )
}
