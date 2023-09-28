import Nav from './components/nav/page'
import 'remixicon/fonts/remixicon.css'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baba Premgiri Paints',
  description: 'We are a comunity of peuple , We provide all paint solutions at one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}

      </body>
    </html>
  )
}
