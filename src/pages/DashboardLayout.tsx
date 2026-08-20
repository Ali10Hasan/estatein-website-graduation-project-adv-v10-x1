import { Outlet, useLocation } from "react-router-dom"
import DashboardSidebar from "../components/dashboard/DashboardSidebar"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import { useState } from "react";
import PropertyForm from "../components/dashboard/PropertyForm";
import FaqForm from "../components/dashboard/FaqForm";
import TestimonialForm from "../components/dashboard/TestimonialForm";
import { addProperty } from "../data/propertiesAPI";
import { addFaq } from "../data/faqsAPI";
import { addTestimonial } from "../data/testimonialsAPI";


const DashboardLayout = () => {
    const location = useLocation();

    const [showForm, setShowForm] = useState(false);

    const currentSection = location.pathname.split("/").pop();

    const handleAddNew = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="flex min-h-screen bg-grey-08">
            <DashboardSidebar />
            <main className="min-w-0 flex-1 p-30">
                <DashboardHeader
                    onAddNew={handleAddNew}
                />
                <Outlet />
                {showForm && currentSection === "properties" && (
                    <PropertyForm
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            console.log("ON SAVE DATA:", data);
                            await addProperty(data);
                            handleCloseForm();
                        }}
                    />
                )}

                {showForm && currentSection === "faqs" && (
                    <FaqForm
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            await addFaq(data);
                            handleCloseForm();
                        }}
                    />
                )}

                {showForm && currentSection === "testimonials" && (
                    <TestimonialForm
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            await addTestimonial(data);
                            handleCloseForm();
                        }}
                    />
                )}
            </main>
        </div>
    )
}

export default DashboardLayout