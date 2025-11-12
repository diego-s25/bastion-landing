import '../styles/globals.css'

export const metadata = {
  title: 'Bastion',
  description: 'Transporte privado, elevado a un nuevo nivel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
