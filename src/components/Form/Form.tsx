import { useState } from "react";
import Stars from "../AtomComponents/Stars";

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

type TextareaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
};

const TextareaInput = ({ label, className = "", ...props }: TextareaInputProps) => (
    <label className="flex flex-col gap-10 text-white">
        <span className="text-sm font-medium">{label}</span>
        <textarea
            {...props}
            className={`min-h-[140px] w-full resize-y rounded-lg border border-grey-15 bg-grey-10 px-20 py-16 text-white placeholder:text-grey-40 outline-none ${className}`}
        />
    </label>
);

type InputCardProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

const InputCard = ({ label, ...props }: InputCardProps) => (
    <label className="flex flex-col gap-10 text-white">
        <span className="text-sm font-medium">{label}</span>
        <input
            {...props}
            className="w-full rounded-lg border border-grey-15 bg-grey-10 px-20 py-16 text-white placeholder:text-grey-40 outline-none"
        />
    </label>
);

const Form = () => {
    const [message, setMessage] = useState("");
    const [agreed, setAgreed] = useState(false);


    const [contactMethod, setContactMethod] = useState("email");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) return;

    };

    return (
        <div className="mx-auto my-60 max-w-[1597px] px-16 lg:px-0">
            <div className="flex flex-col gap-[50px] rounded-2xl border border-grey-15 p-[100px]">

                {/* قسم العنوان */}  <div className="relative">
                    <div className="flex items-center gap-6 mb-10 text-grey-40">
                        <Stars />
                    </div>
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold font-urbanist mb-14">
                        Let's Connect
                    </h2>
                    <p className="text-grey-40 text-sm lg:text-lg max-w-[700px]">
                        We're excited to connect with you and learn more about your real estate goals.
                        Use the form below to get in touch with Estatein.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="border border-grey-15 rounded-2xl p-20 md:p-30 lg:p-40">
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
                                { label: "Social Media", value: "social" },
                                { label: "Friend / Referral", value: "referral" },
                                { label: "Search Engine", value: "search" },
                                { label: "Select", value: "other" },
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

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 mt-30 lg:mt-40 px-10">
                        <label className="flex items-center gap-10 text-grey-40 text-sm cursor-pointer">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="w-16 h-16 rounded border-grey-15 bg-grey-10 accent-purple-60"
                            />
                            <span>
                                I agree with{" "}
                                <a href="#" className="underline text-white">Terms of Use</a> and{" "}
                                <a href="#" className="underline text-white">Privacy Policy</a>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="bg-purple-60 hover:opacity-90 transition text-white font-semibold rounded-lg px-30 py-16 lg:px-40 lg:py-18 w-full md:w-auto"
                        >
                            Send Your Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;