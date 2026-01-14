import './global.css'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { NavigationProgress } from '@/components/navigation-progress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Engineering Projects',
    template: '%s | AI Engineering Projects',
  },
  description:
    'Learn AI Engineering through hands-on, production-ready projects. Master RAG, LLM Applications, Embeddings, AI Agents, and MLOps.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
