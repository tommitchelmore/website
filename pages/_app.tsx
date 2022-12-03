import '../styles/globals.css'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'
import { domAnimation, LazyMotion } from 'framer-motion'

const satoshi = localFont({
  src: "../styles/Satoshi-Variable.woff2",
  weight: "400 700",
  variable: "--font-satoshi",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div className={`${satoshi.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </LazyMotion>
  )
}
