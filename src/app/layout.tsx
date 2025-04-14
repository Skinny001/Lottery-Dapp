import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import  Footer  from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 Lottery DApp',
  description: 'A decentralized lottery application built on Ethereum.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}