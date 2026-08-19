import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <div className='bg-grey-08'>
            <Banner />
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default RootLayout