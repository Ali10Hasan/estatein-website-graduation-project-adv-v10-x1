import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiHelpCircle, FiMessageSquare, FiLogOut } from "react-icons/fi";

const DashboardSidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            label: "Properties",
            path: "/dashboard/properties",
            icon: FiHome,
        },
        {
            label: "FAQs",
            path: "/dashboard/faqs",
            icon: FiHelpCircle,
        },
        
        {
            label: "Testimonials",
            path: "/dashboard/testimonials",
            icon: FiMessageSquare,
        },
    ];

    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn");
        navigate("/login", { replace: true });
    };

    return (
        <aside
            className="light:bg-white-99 flex h-auto w-260 shrink-0 flex-col border-r border-grey-15 light:border-white-90 px-16 py-35"
        >

            {/* Logo */}

            <div className="mb-40 px-12">

                <img
                    src="/assets/imgs/EstateinLogo.webp"
                    alt="Estatein"
                    className="h-48 w-114 object-contain"
                />

            </div>

            {/* Navigation */}

            <nav className="flex flex-col gap-8">

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                flex
                                items-center
                                gap-12
                                rounded-lg
                                px-14
                                py-12
                                text-15
                                font-medium
                                transition-colors

                                ${
                                    isActive
                                        ? "bg-purple-60 text-white"
                                        : "text-white-90 light:text-grey-20 hover:bg-grey-15 light:hover:bg-white-90 hover:text-white light:hover:text-grey-08"
                                }
                                `
                            }
                        >

                            <Icon size={19} />

                            <span>
                                {item.label}
                            </span>

                        </NavLink>
                    );
                })}

            </nav>

            {/* Logout */}

            <button
                type="button"
                onClick={handleLogout}
                className="
                    mt-auto
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    gap-12
                    rounded-lg
                    px-14
                    py-12
                    text-15
                    font-medium
                    text-white-90 light:text-grey-20
                    transition-colors
                    hover:bg-grey-15 light:hover:bg-white-90
                    hover:text-white light:hover:text-grey-08
                "
            >
                <FiLogOut size={19} />

                <span>
                    Log out
                </span>
            </button>

        </aside>
    );
};

export default DashboardSidebar;