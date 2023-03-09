import '@/styles/globals.css'
import { Mulish as BodyFont} from "next/font/google"
import { Unbounded as DisplayFont} from "next/font/google"
import type { AppProps } from 'next/app'

const bodyFont = BodyFont({
  subsets: ["latin"],
})

const displayFont = DisplayFont({
  subsets: ["latin"],
  weight: ["700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style dangerouslySetInnerHTML={{__html: `:root { --body-font: ${bodyFont.style.fontFamily}; --display-font: ${displayFont.style.fontFamily} }`}} />
    <Component {...pageProps} />
  </>
}
