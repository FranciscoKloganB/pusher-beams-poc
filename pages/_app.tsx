import 'antd/dist/antd.css'
import '@formily/antd/dist/antd.css'
import '../styles/index.css'
import { useEffect } from 'react'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope,
            )
          },
          (err) => {
            console.warn('Service Worker registration failed: ', err)
          },
        )
      })
    }
  }, [])

  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  )
}

export default MyApp
