import { Outlet } from "react-router-dom"
import DashboardSidebar from "../components/dashboard/DashboardSidebar"

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-grey-08">

            <DashboardSidebar />

            <main className="min-w-0 flex-1 p-30">
                <Outlet />
            </main>

        </div>
    )
}

export default DashboardLayout