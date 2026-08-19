import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <div>
            <Banner/>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default RootLayout