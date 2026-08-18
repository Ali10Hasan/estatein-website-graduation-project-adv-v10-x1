import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <div>
            <Banner/>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default RootLayout