type FormField = {
    id: string;
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "select" | "textarea";
    placeholder?: string;
    fullWidth?: boolean;
    options?: { label: string; value: string }[];
};

type FormConfig = {
    title: string;
    description: string;
    submitText: string;
    fields: FormField[];
};

export const contactFormConfig: FormConfig = {
    title: "Let's Connect",
    description:
        "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
    submitText: "Send Your Message",
    fields: [
        { id: "firstName", name: "firstName", label: "First Name", type: "text", placeholder: "Enter First Name" },
        { id: "lastName", name: "lastName", label: "Last Name", type: "text", placeholder: "Enter Last Name" },
        { id: "email", name: "email", label: "Email", type: "email", placeholder: "Enter your Email" },
        { id: "phone", name: "phone", label: "Phone", type: "tel", placeholder: "Enter Phone Number" },
        {
            id: "inquiryType",
            name: "inquiryType",
            label: "Inquiry Type",
            type: "select",
            placeholder: "Select Inquiry Type",
            options: [
                { label: "Buying", value: "buying" },
                { label: "Selling", value: "selling" },
                { label: "Renting", value: "renting" },
                { label: "Other", value: "other" },
            ],
        },
        {
            id: "hearAboutUs",
            name: "hearAboutUs",
            label: "How Did You Hear About Us?",
            type: "select",
            placeholder: "Select",
            options: [
                { label: "Social Media", value: "social" },
                { label: "Friend / Referral", value: "referral" },
                { label: "Search Engine", value: "search" },
                { label: "Other", value: "other" },
            ],
        },
        { id: "message", name: "message", label: "Message", type: "textarea", fullWidth: true },
    ],
};