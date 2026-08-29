import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

const RootLayout = () => {
    return (
        <div className='bg-grey-08 light:bg-white-99'>
            <Banner />
            <Navbar />
            <Outlet />
            <CTA/>
            <Footer/>
        </div>
    )
}

export default RootLayout