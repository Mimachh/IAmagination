import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import ThemeSwitcher from '@/components/Switcher/ThemeSwitcher'
import ThemeProvider from '../providers/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
import Script from 'next/script'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IAmagination',
  description: 'Plateforme IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <CrispProvider />
        <body className={figtree.className}>
          
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
          <ThemeProvider>
            <ThemeSwitcher />
            <ModalProvider />
            <ToasterProvider />
            {children}
          </ThemeProvider>
        </body>    
    </html>
    </ClerkProvider>
  )
}
