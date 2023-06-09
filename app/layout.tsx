import './globals.css'

export const metadata = {
  title: 'Eugene Mikhushkin',
  description: 'Looking for a dream job',
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
