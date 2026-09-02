import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Stars from "../AtomComponents/Stars";
import Button from "../AtomComponents/Button";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    FilterText: string;
    options: { label: string; value: string }[];
};

const Select = ({ FilterText, options, className = "", ...props }: SelectProps) => (
    <label className="flex flex-col gap-10 text-white light:text-grey-08">
        <span className="text-sm font-medium">{FilterText}</span>
        <select
            {...props}
            className={`w-full rounded-lg border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 px-20 py-16 text-white light:text-grey-08 outline-none ${className}`}
        >
            <option value="" disabled className="bg-grey-10 light:bg-white-95">
                {FilterText}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value} className="bg-grey-10 light:bg-white-95">
                    {option.label}
                </option>
            ))}
        </select>
    </label>
);

type FormProps = {
    title?: string;
    subtitle?: string;
    showPropertyFields?: boolean;
};

const Form = ({
    title = "Let's Connect",
    subtitle = "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.",
    showPropertyFields = false,
}: FormProps) => {
    const [message, setMessage] = useState("");
    const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const newErrors: Record<string, string> = {};

        const requiredFields: { name: string; label: string }[] = [
            { name: "firstName", label: "First Name is required" },
            { name: "lastName", label: "Last Name is required" },
            { name: "email", label: "Email is required" },
            { name: "phone", label: "Phone Number is required" },
        ];

        requiredFields.forEach(({ name, label }) => {
            if (!data.get(name)) newErrors[name] = label;
        });

        if (!data.get("agreeTerms")) {
            newErrors.agreeTerms = "You must agree to the Terms of Use and Privacy Policy";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        console.log("Form submitted:", Object.fromEntries(data.entries()));
    };

    return (
        <div className="mx-auto my-60 max-w-[1597px] px-16 lg:px-0">
           <div className="flex flex-col gap-[30px] lg:gap-[50px] rounded-2xl border border-grey-15 light:border-white-90 px-16 py-30 sm:px-30 sm:py-40 md:px-50 md:py-60 lg:p-[100px]">
                <div className="relative">
                    <div className="flex items-center gap-6 mb-10 text-grey-40 light:text-grey-20">
                        <Stars />
                    </div>
                    <h2 className="text-white light:text-grey-08 text-3xl lg:text-5xl font-semibold font-urbanist mb-14">
                        {title}
                    </h2>
                    <p className="text-grey-40 light:text-grey-20 text-sm lg:text-lg max-w-[700px]">
                        {subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="border border-grey-15 light:border-white-90 rounded-2xl p-20 md:p-30 lg:p-40">
                    {showPropertyFields ? (
                        <div className="flex flex-col gap-16 lg:gap-30">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-30">
                                <InputCard label="First Name" name="firstName" placeholder="Enter First Name" error={errors.firstName} />
                                <InputCard label="Last Name" name="lastName" placeholder="Enter Last Name" error={errors.lastName} />
                                <InputCard label="Email" name="email" type="email" placeholder="Enter your Email" error={errors.email} />
                                <InputCard label="Phone" name="phone" type="tel" placeholder="Enter Phone Number" error={errors.phone} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-30">
                                <Select
                                    FilterText="Preferred Location"
                                    name="preferredLocation"
                                    options={[
                                        { label: "Select Location", value: "" },
                                        { label: "New York", value: "new-york" },
                                        { label: "Los Angeles", value: "los-angeles" },
                                    ]}
                                />
                                <Select
                                    FilterText="Property Type"
                                    name="propertyType"
                                    options={[
                                        { label: "Select Property Type", value: "" },
                                        { label: "Apartment", value: "apartment" },
                                        { label: "Villa", value: "villa" },
                                    ]}
                                />
                                <Select
                                    FilterText="No. of Bathrooms"
                                    name="bathrooms"
                                    options={[
                                        { label: "Select no. of Bathrooms", value: "" },
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3+", value: "3+" },
                                    ]}
                                />
                                <Select
                                    FilterText="No. of Bedrooms"
                                    name="bedrooms"
                                    options={[
                                        { label: "Select no. of Bedrooms", value: "" },
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3+", value: "3+" },
                                    ]}
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-30">
                                <Select
                                    FilterText="Budget"
                                    name="budget"
                                    options={[
                                        { label: "Select Budget", value: "" },
                                        { label: "$100k - $200k", value: "100-200" },
                                        { label: "$200k - $500k", value: "200-500" },
                                        { label: "$500k+", value: "500+" },
                                    ]}
                                />

                                <div className="lg:col-span-2 flex flex-col gap-10 text-white light:text-grey-08">
                                    <span className="text-sm font-medium">Preferred Contact Method</span>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <label
                                            className={`flex items-center gap-10 rounded-lg border px-20 py-16 cursor-pointer transition bg-grey-10 light:bg-white-95 ${
                                                contactMethod === "phone" ? "border-purple-60" : "border-grey-15 light:border-white-90"
                                            }`}
                                        >
                                            <FaPhoneAlt size={18} className="text-grey-40 light:text-grey-20 shrink-0" />
                                            <input
                                                type="tel"
                                                name="preferredPhone"
                                                placeholder="Enter Your Number"
                                                disabled={contactMethod !== "phone"}
                                                className="flex-1 bg-transparent outline-none text-white light:text-grey-08 placeholder:text-grey-40 light:placeholder:text-grey-20 disabled:opacity-50"
                                            />
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="phone"
                                                checked={contactMethod === "phone"}
                                                onChange={() => setContactMethod("phone")}
                                                className="w-16 h-16 accent-purple-60"
                                            />
                                        </label>

                                        <label
                                            className={`flex items-center gap-10 rounded-lg border px-20 py-16 cursor-pointer transition bg-grey-10 light:bg-white-95 ${
                                                contactMethod === "email" ? "border-purple-60" : "border-grey-15 light:border-white-90"
                                            }`}
                                        >
                                            <MdEmail size={18} className="text-grey-40 light:text-grey-20 shrink-0" />
                                            <input
                                                type="email"
                                                name="preferredEmail"
                                                placeholder="Enter Your Email"
                                                disabled={contactMethod !== "email"}
                                                className="flex-1 bg-transparent outline-none text-white light:text-grey-08 placeholder:text-grey-40 light:placeholder:text-grey-20 disabled:opacity-50"
                                            />
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="email"
                                                checked={contactMethod === "email"}
                                                onChange={() => setContactMethod("email")}
                                                className="w-16 h-16 accent-purple-60"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <TextareaInput
                                label="Message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter your Message here..."
                                error={errors.message}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-30">
                            <InputCard label="First Name" name="firstName" placeholder="Enter First Name" error={errors.firstName} />
                            <InputCard label="Last Name" name="lastName" placeholder="Enter Last Name" error={errors.lastName} />
                            <InputCard label="Email" name="email" type="email" placeholder="Enter your Email" error={errors.email} />
                            <InputCard label="Phone Number" name="phone" type="tel" placeholder="Enter Phone Number" error={errors.phone} />

                            <Select
                                FilterText="Inquiry Type"
                                name="inquiryType"
                                options={[
                                    { label: "Select Inquiry Type", value: "buying" },
                                    { label: "Selling", value: "selling" },
                                    { label: "Renting", value: "renting" },
                                    { label: "Other", value: "other" },
                                ]}
                            />

                            <Select
                                FilterText="How Did You Hear About Us?"
                                name="hearAboutUs"
                                options={[
                                    { label: "Select", value: "other" },
                                    { label: "Social Media", value: "social" },
                                    { label: "Friend / Referral", value: "referral" },
                                    { label: "Search Engine", value: "search" },
                                ]}
                            />

                            <div className="md:col-span-3">
                                <TextareaInput
                                    label="Message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter your message here..."
                                    error={errors.message}
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 mt-30 lg:mt-40 px-10">
                        <div className="flex flex-col gap-6">
                            <InputCard type="checkbox" id="agreeTerms" name="agreeTerms" />
                            {errors.agreeTerms && (
                                <p className="text-[13px] text-red-400">{errors.agreeTerms}</p>
                            )}
                        </div>
                        <Button
                            content="Send Your Message"
                            className="bg-purple-60 hover:opacity-90 transition text-white font-semibold w-full md:w-auto"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;