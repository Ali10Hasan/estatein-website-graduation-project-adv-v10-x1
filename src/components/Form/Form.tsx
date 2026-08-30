import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Stars from "../AtomComponents/Stars";
import Button from "../AtomComponents/Button";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    FilterText: string;
    options: { label: string; value: string }[];
};

const Select = ({ FilterText, options, className = "", ...props }: SelectProps) => (
    <label className="flex flex-col gap-10 text-white">
        <span className="text-sm font-medium">{FilterText}</span>
        <select
            {...props}
            className={`w-full rounded-lg border border-grey-15 bg-grey-10 px-20 py-16 text-white outline-none ${className}`}
        >
            <option value="" disabled>
                {FilterText}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </label>
);

const TextareaInput = ({ label, className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) => (
    <label className="flex flex-col gap-10 text-white">
        <span className="text-sm font-medium">{label}</span>
        <textarea
            {...props}
            className={`min-h-[140px] w-full resize-y rounded-lg border border-grey-15 bg-grey-10 px-20 py-16 text-white placeholder:text-grey-40 outline-none ${className}`}
        />
    </label>
);

type InputCardProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

const InputCard = ({ label, className = "", ...props }: InputCardProps) => {
    if (props.type === "checkbox") {
        return (
            <input
                {...props}
                className={`h-16 w-16 accent-purple-60 ${className}`}
            />
        );
    }

    return (
        <label className="flex flex-col gap-10 text-white">
            {label && <span className="text-sm font-medium">{label}</span>}
            <input
                {...props}
                className={`w-full rounded-lg border border-grey-15 bg-grey-10 px-20 py-16 text-white placeholder:text-grey-40 outline-none ${className}`}
            />
        </label>
    );
};

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
    const [agreed, setAgreed] = useState(false);
    const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) return;
    };
    return (
        <div className="mx-auto my-60 max-w-[1597px] px-16 lg:px-0">
            <div className="flex flex-col gap-[50px] rounded-2xl border border-grey-15 p-[100px]">
                <div className="relative">
                    <div className="flex items-center gap-6 mb-10 text-grey-40">
                        <Stars />
                    </div>
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold font-urbanist mb-14">
                        {title}
                    </h2>
                    <p className="text-grey-40 text-sm lg:text-lg max-w-[700px]">
                        {subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="border border-grey-15 rounded-2xl p-20 md:p-30 lg:p-40">
                {showPropertyFields ? (
                 <div className="flex flex-col gap-16 lg:gap-30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-30">
                 <InputCard label="First Name" name="firstName" placeholder="Enter First Name" required />
                  <InputCard label="Last Name" name="lastName" placeholder="Enter Last Name" required />
                  <InputCard
                       label="Email"
                       name="email"
                      type="email"
                      placeholder="Enter your Email"
                          required
                                />
                                <InputCard
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    required
                                />
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

                                <div className="lg:col-span-2 flex flex-col gap-10 text-white">
                                    <span className="text-sm font-medium">Preferred Contact Method</span>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <label
                                            className={`flex items-center gap-10 rounded-lg border bg-grey-10 px-20 py-16 cursor-pointer transition ${
                                                contactMethod === "phone" ? "border-purple-60" : "border-grey-15"
                                            }`}
                                        >
                                            <Phone size={18} className="text-grey-40 shrink-0" />
                                            <input
                                                type="tel"
                                                placeholder="Enter Your Number"
                                                disabled={contactMethod !== "phone"}
                                                className="flex-1 bg-transparent outline-none placeholder:text-grey-40 disabled:opacity-50"
                                            />
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                checked={contactMethod === "phone"}
                                                onChange={() => setContactMethod("phone")}
                                                className="w-16 h-16 accent-purple-60"
                                            />
                                        </label>

                                        <label
                                            className={`flex items-center gap-10 rounded-lg border bg-grey-10 px-20 py-16 cursor-pointer transition ${
                                                contactMethod === "email" ? "border-purple-60" : "border-grey-15"
                                            }`}
                                        >
                                            <Mail size={18} className="text-grey-40 shrink-0" />
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                disabled={contactMethod !== "email"}
                                                className="flex-1 bg-transparent outline-none placeholder:text-grey-40 disabled:opacity-50"
                                            />
                                            <input
                                                type="radio"
                                                name="contactMethod"
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
                                placeholder="Enter your Message here..."
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-30">
                            <InputCard label="First Name" name="firstName" placeholder="Enter First Name" required />
                            <InputCard label="Last Name" name="lastName" placeholder="Enter Last Name" required />

                            <InputCard
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your Email"
                                required
                            />

                            <InputCard
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                placeholder="Enter Phone Number"
                                required
                            />

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
                                    placeholder="Enter your message here..."
                                    onChange={(e) => setMessage(e.target.value)}
                                    className=""
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 mt-30 lg:mt-40 px-10">
                        <label className="flex items-center gap-10 text-grey-40 text-sm cursor-pointer">
                       <InputCard
                       type="checkbox"
                       id=""
                       name=""
                       
                       />
                            <span>
                                I agree with{" "}
                                <a href="#" className="underline text-white">Terms of Use</a> and{" "}
                                <a href="#" className="underline text-white">Privacy Policy</a>
                            </span>
                        </label>
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