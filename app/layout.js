import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Shofi Media',
  description: 'A Documented World',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
