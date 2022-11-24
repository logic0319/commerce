import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { GoogleOAuthProvider } from '@react-oauth/google'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  )
}
