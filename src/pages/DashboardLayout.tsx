import { Navigate, Outlet, useLocation } from "react-router-dom"
import DashboardSidebar from "../components/dashboard/DashboardSidebar"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import { useState } from "react";
import PropertyForm from "../components/dashboard/PropertyForm";
import FaqForm from "../components/dashboard/FaqForm";
import TestimonialForm from "../components/dashboard/TestimonialForm";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store/store";
import { addProperty, updateProperty } from "../redux/slices/propertiesSlice";
import { addFaq, updateFaq } from "../redux/slices/faqSlice";
import { addTestimonial, updateTestimonial } from "../redux/slices/testimonialsSlice";
import type { IProperty } from "../types/propertyType";
import type { IFaq } from "../types/faqType";
import type { ITestimonial } from "../types/testimonialType";

type FormMode = "add" | "edit";

export interface DashboardOutletContext {
    onEditProperty: (property: IProperty) => void;
    onEditFaq: (faq: IFaq) => void;
    onEditTestimonial: (testimonial: ITestimonial) => void;
}

const DashboardLayout = () => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<FormMode>("add");
    const [editingProperty, setEditingProperty] = useState<IProperty | null>(null);
    const [editingFaq, setEditingFaq] = useState<IFaq | null>(null);
    const [editingTestimonial, setEditingTestimonial] = useState<ITestimonial | null>(null);

    const currentSection = location.pathname.split("/").pop();

    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    } 

    const clearEditingItems = () => {
        setEditingProperty(null);
        setEditingFaq(null);
        setEditingTestimonial(null);
    };

    const handleAddNew = () => {
        clearEditingItems();
        setFormMode("add");
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setFormMode("add");
        clearEditingItems();
    };

    const handleEditProperty = (property: IProperty) => {
        clearEditingItems();
        setEditingProperty(property);
        setFormMode("edit");
        setShowForm(true);
    };

    const handleEditFaq = (faq: IFaq) => {
        clearEditingItems();
        setEditingFaq(faq);
        setFormMode("edit");
        setShowForm(true);
    };

    const handleEditTestimonial = (testimonial: ITestimonial) => {
        clearEditingItems();
        setEditingTestimonial(testimonial);
        setFormMode("edit");
        setShowForm(true);
    };

    return (
        <div className="flex min-h-screen bg-grey-08 light:bg-white-99">
            <DashboardSidebar />
            <main className="min-w-0 flex-1 p-30">
                <DashboardHeader
                    onAddNew={handleAddNew}
                />
                <Outlet
                    context={{
                        onEditProperty: handleEditProperty,
                        onEditFaq: handleEditFaq,
                        onEditTestimonial: handleEditTestimonial,
                    } satisfies DashboardOutletContext}
                />
                {showForm && currentSection === "properties" && (
                    <PropertyForm
                        property={editingProperty ?? undefined}
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            try {
                                if (formMode === "edit") {
                                    if (!editingProperty) {
                                        console.error("Cannot update property without a selected property.");
                                        return;
                                    }

                                    await dispatch(
                                        updateProperty({
                                            id: editingProperty.id,
                                            data,
                                        })
                                    ).unwrap();
                                } else {
                                    await dispatch(addProperty(data)).unwrap();
                                }

                                handleCloseForm();
                            } catch (error) {
                                console.error(`Failed to ${formMode} property:`, error);
                            }
                        }}
                    />
                )}

                {showForm && currentSection === "faqs" && (
                    <FaqForm
                        faq={editingFaq ?? undefined}
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            try {
                                if (formMode === "edit") {
                                    if (!editingFaq) {
                                        console.error("Cannot update FAQ without a selected FAQ.");
                                        return;
                                    }

                                    await dispatch(
                                        updateFaq({
                                            id: editingFaq.id,
                                            data,
                                        })
                                    ).unwrap();
                                } else {
                                    await dispatch(addFaq(data)).unwrap();
                                }

                                handleCloseForm();
                            } catch (error) {
                                console.error(`Failed to ${formMode} FAQ:`, error);
                            }
                        }}
                    />
                )}

                {showForm && currentSection === "testimonials" && (
                    <TestimonialForm
                        testimonial={editingTestimonial ?? undefined}
                        onClose={handleCloseForm}
                        onSave={async (data) => {
                            try {
                                if (formMode === "edit") {
                                    if (!editingTestimonial) {
                                        console.error("Cannot update testimonial without a selected testimonial.");
                                        return;
                                    }

                                    await dispatch(
                                        updateTestimonial({
                                            id: editingTestimonial.id,
                                            data,
                                        })
                                    ).unwrap();
                                } else {
                                    await dispatch(addTestimonial(data)).unwrap();
                                }

                                handleCloseForm();
                            } catch (error) {
                                console.error(`Failed to ${formMode} testimonial:`, error);
                            }
                        }}
                    />
                )}
            </main>
        </div>
    )
}

export default DashboardLayout
