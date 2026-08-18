import { Outlet } from 'react-router-dom'
import DataListener from '../components/DataListener'

const RootLayout = () => {
    return (
        <div>
            <DataListener />
            <Outlet />
        </div>
    )
}

export default RootLayout