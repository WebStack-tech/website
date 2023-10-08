import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['cyrillic'], weight: '700' })

export const metadata: Metadata = {
  title: 'Webstack',
  description: 'Welcome to Webstack - Your Trusted Partner for Cutting-Edge Software Solutions. Discover tailored software services that drive efficiency, innovation, and growth. Get started today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="aurora">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </body>
    </html>
  )
}
