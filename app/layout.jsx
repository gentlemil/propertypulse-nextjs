import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
  keywors: 'rental, find rentals, find properties, real estate',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
