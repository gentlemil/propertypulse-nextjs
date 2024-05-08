import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { GlobalProvider } from '@/context/GlobalContext'
import { ToastContainer } from 'react-toastify'

import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
  keywors: 'rental, find rentals, find properties, real estate',
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <body>
            <Navbar />
            <div>{children}</div>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout
