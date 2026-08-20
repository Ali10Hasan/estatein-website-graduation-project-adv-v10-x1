import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

const RootLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default RootLayout