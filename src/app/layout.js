import DefaultLayout from '@/components/layouts/DefaultLayout'
import Footer from '@/components/layouts/RegisterLogin/Footer'
import Header from '@/components/layouts/RegisterLogin/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZuluTrade'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </body>
    </html>
  )
}
