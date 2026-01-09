import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brundha S V - Product & Strategy Professional',
  description: 'Results-driven Product & Strategy professional with 3+ years of experience driving customer-focused digital solutions in the insurance domain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


