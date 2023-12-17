import { appWithTranslation } from "next-i18next";

// These styles apply to every route in the application
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default appWithTranslation(App)