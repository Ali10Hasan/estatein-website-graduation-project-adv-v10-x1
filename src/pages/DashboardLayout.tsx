import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    return (
        <div className="bg-grey-08">
            <Outlet />
        </div>
    )
}

export default DashboardLayout