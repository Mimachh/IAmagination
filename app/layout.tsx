import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import ThemeSwitcher from '@/components/Switcher/ThemeSwitcher'
import ThemeProvider from '../providers/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

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
