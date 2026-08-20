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
        navigate("/login");
    };

    return (
        <aside
            className="flex h-screen w-260 shrink-0 flex-col border-r border-grey-15 px-16 py-24"
        >

            {/* Logo */}

            <div className="mb-40 px-12">

                <img
                    src="/assets/imgs/EstateinLogo.webp"
                    alt="Estatein"
                    className="h-28 w-94 object-contain"
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
                                rounded-8
                                px-14
                                py-12
                                text-15
                                font-medium
                                transition-colors

                                ${
                                    isActive
                                        ? "bg-purple-60 text-white"
                                        : "text-white-90 hover:bg-grey-15 hover:text-white"
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
                    rounded-8
                    px-14
                    py-12
                    text-15
                    font-medium
                    text-white-90
                    transition-colors
                    hover:bg-grey-15
                    hover:text-white
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