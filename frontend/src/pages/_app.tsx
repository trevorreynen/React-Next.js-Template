// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================
import { CommonStoreProvider } from '@/hooks/common-context'
import { EventBusProvider } from '@/hooks/use-event-bus'

// =====<  Import CSS  >==========================
import '@/styles/global.scss'



export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <CommonStoreProvider>
      <EventBusProvider>
        <Component {...pageProps} />
      </EventBusProvider>
    </CommonStoreProvider>
  )
}

