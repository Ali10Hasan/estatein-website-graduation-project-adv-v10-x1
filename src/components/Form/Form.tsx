import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import Stars from "../AtomComponents/Stars";
import Button from "../AtomComponents/Button";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";
import Select from "../inputs/Select";
import type { JSX } from "react";

type FormProps = {
    title?: string;
    subtitle?: string;
    showPropertyFields?: boolean;
};

type FormSelectValues = {
    preferredLocation: string;
    propertyType: string;
    bathrooms: string;
    bedrooms: string;
    budget: string;
    inquiryType: string;
    hearAboutUs: string;
};

const FormSelect = ({
    Icone,
    FilterText,
    name,
    value,
    onChange,
    options,
}: {
    Icone: JSX.Element;
    FilterText: string;
    name: keyof FormSelectValues;
    value: string;
    onChange: (value: string) => void;
    options: string[];
}) => {
    return (
        <div className="flex flex-col gap-10 text-white light:text-grey-08">
            <span className="text-sm font-medium">
                {FilterText}
            </span>

            <div
                className="
                    [&_.filter-info]:!w-full
                    [&_.filter-info]:!p-0
                    [&_.filter-info]:!bg-transparent
                    [&_.filter-info]:!rounded-none
                    [&_.filter-info]:!gap-0

                    [&_.icone]:!hidden

                    [&_select]:!w-full
                    [&_select]:!rounded-lg
                    [&_select]:!border
                    [&_select]:!border-grey-15
                    [&_select]:!border-solid
                    [&_select]:!bg-grey-10
                    [&_select]:!px-20
                    [&_select]:!py-16
                    [&_select]:!text-white
                    [&_select]:!text-sm
                    [&_select]:!outline-none

                    [&_select]:light:!border-white-90
                    [&_select]:light:!bg-white-95
                    [&_select]:light:!text-grey-08
                "
            >
                <Select
                    Icone={Icone}
                    FilterText={FilterText}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={options}
                />
            </div>
        </div>
    );
};

const Form = ({
    title = "Let's Connect",
    subtitle = "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.",
    showPropertyFields = false,
}: FormProps) => {
    const [message, setMessage] = useState("");
    const [contactMethod, setContactMethod] = useState<"phone" | "email">(
        "phone"
    );
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [selectValues, setSelectValues] = useState<FormSelectValues>({
        preferredLocation: "",
        propertyType: "",
        bathrooms: "",
        bedrooms: "",
        budget: "",
        inquiryType: "",
        hearAboutUs: "",
    });

    const updateSelectValue = (name: keyof FormSelectValues, value: string) => {
        setSelectValues((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);
        const newErrors: Record<string, string> = {};

        const requiredFields: { name: string; label: string }[] = [
            {
                name: "firstName",
                label: "First Name is required",
            },
            {
                name: "lastName",
                label: "Last Name is required",
            },
            {
                name: "email",
                label: "Email is required",
            },
            {
                name: "phone",
                label: "Phone Number is required",
            },
        ];

        requiredFields.forEach(({ name, label }) => {
            if (!data.get(name)) {
                newErrors[name] = label;
            }
        });

        if (!data.get("agreeTerms")) {
            newErrors.agreeTerms =
                "You must agree to the Terms of Use and Privacy Policy";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        data.set("message", message);
        data.set("contactMethod", contactMethod);

        console.log(
            "Form submitted:",
            Object.fromEntries(data.entries())
        );
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
                <form
                    onSubmit={handleSubmit}
                    className="border border-grey-15 light:border-white-90 rounded-2xl p-20 md:p-30 lg:p-40"
                >
                    {showPropertyFields ? (
                        <div className="flex flex-col gap-16 lg:gap-30">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-30">

                                <InputCard
                                    label="First Name"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    error={errors.firstName}
                                />

                                <InputCard
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Enter Last Name"
                                    error={errors.lastName}
                                />

                                <InputCard
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    error={errors.email}
                                />

                                <InputCard
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    error={errors.phone}
                                />

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-30">

                                <FormSelect
                                    Icone={<TiLocation />}
                                    FilterText="Preferred Location"
                                    name="preferredLocation"
                                    value={selectValues.preferredLocation}
                                    onChange={(value) => updateSelectValue("preferredLocation", value)}
                                    options={[
                                        "New York",
                                        "Los Angeles",
                                    ]}
                                />

                                <FormSelect
                                    Icone={<IoIosHome />}
                                    FilterText="Property Type"
                                    name="propertyType"
                                    value={selectValues.propertyType}
                                    onChange={(value) => updateSelectValue("propertyType", value)}
                                    options={[
                                        "Apartment",
                                        "Villa",
                                    ]}
                                />

                                <FormSelect
                                    Icone={<IoCubeOutline />}
                                    FilterText="No. of Bathrooms"
                                    name="bathrooms"
                                    value={selectValues.bathrooms}
                                    onChange={(value) => updateSelectValue("bathrooms", value)}
                                    options={[
                                        "1",
                                        "2",
                                        "3+",
                                    ]}
                                />

                                <FormSelect
                                    Icone={<IoCubeOutline />}
                                    FilterText="No. of Bedrooms"
                                    name="bedrooms"
                                    value={selectValues.bedrooms}
                                    onChange={(value) => updateSelectValue("bedrooms", value)}
                                    options={[
                                        "1",
                                        "2",
                                        "3+",
                                    ]}
                                />

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-30">
                                <FormSelect
                                    Icone={<MdOutlinePriceChange />}
                                    FilterText="Budget"
                                    name="budget"
                                    value={selectValues.budget}
                                    onChange={(value) => updateSelectValue("budget", value)}
                                    options={[
                                        "$100k - $200k",
                                        "$200k - $500k",
                                        "$500k+",
                                    ]}
                                />

                                <div className="lg:col-span-2 flex flex-col gap-10 text-white light:text-grey-08">

                                    <span className="text-sm font-medium">
                                        Preferred Contact Method
                                    </span>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                                        <label
                                            className={`flex items-center gap-10 rounded-lg border px-20 py-16 cursor-pointer transition bg-grey-10 light:bg-white-95 ${
                                                contactMethod === "phone"
                                                    ? "border-purple-60"
                                                    : "border-grey-15 light:border-white-90"
                                            }`}
                                        >
                                            <FaPhoneAlt
                                                size={18}
                                                className="text-grey-40 light:text-grey-20 shrink-0"
                                            />

                                            <input
                                                type="tel"
                                                name="preferredPhone"
                                                placeholder="Enter Your Number"
                                                disabled={
                                                    contactMethod !== "phone"
                                                }
                                                className="flex-1 bg-transparent outline-none text-white light:text-grey-08 placeholder:text-grey-40 light:placeholder:text-grey-20 disabled:opacity-50"
                                            />

                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="phone"
                                                checked={
                                                    contactMethod === "phone"
                                                }
                                                onChange={() =>
                                                    setContactMethod("phone")
                                                }
                                                className="w-16 h-16 accent-purple-60"
                                            />
                                        </label>
                                        <label
                                            className={`flex items-center gap-10 rounded-lg border px-20 py-16 cursor-pointer transition bg-grey-10 light:bg-white-95 ${
                                                contactMethod === "email"
                                                    ? "border-purple-60"
                                                    : "border-grey-15 light:border-white-90"
                                            }`}
                                        >
                                            <MdEmail
                                                size={18}
                                                className="text-grey-40 light:text-grey-20 shrink-0"
                                            />

                                            <input
                                                type="email"
                                                name="preferredEmail"
                                                placeholder="Enter Your Email"
                                                disabled={
                                                    contactMethod !== "email"
                                                }
                                                className="flex-1 bg-transparent outline-none text-white light:text-grey-08 placeholder:text-grey-40 light:placeholder:text-grey-20 disabled:opacity-50"
                                            />

                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="email"
                                                checked={
                                                    contactMethod === "email"
                                                }
                                                onChange={() =>
                                                    setContactMethod("email")
                                                }
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
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Enter your Message here..."
                                error={errors.message}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-30">

                            <InputCard
                                label="First Name"
                                name="firstName"
                                placeholder="Enter First Name"
                                error={errors.firstName}
                            />
                            <InputCard
                                label="Last Name"
                                name="lastName"
                                placeholder="Enter Last Name"
                                error={errors.lastName}
                            />

                            <InputCard
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your Email"
                                error={errors.email}
                            />

                            <InputCard
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                placeholder="Enter Phone Number"
                                error={errors.phone}
                            />
                            <FormSelect
                                Icone={<IoIosHome />}
                                FilterText="Inquiry Type"
                                name="inquiryType"
                                value={selectValues.inquiryType}
                                onChange={(value) => updateSelectValue("inquiryType", value)}
                                options={[
                                    "Buying",
                                    "Selling",
                                    "Renting",
                                    "Other",
                                ]}
                            />
                            <FormSelect
                                Icone={<IoIosHome />}
                                FilterText="How Did You Hear About Us?"
                                name="hearAboutUs"
                                value={selectValues.hearAboutUs}
                                onChange={(value) => updateSelectValue("hearAboutUs", value)}
                                options={[
                                    "Social Media",
                                    "Friend / Referral",
                                    "Search Engine",
                                    "Other",
                                ]}
                            />
                            <div className="md:col-span-3">
                                <TextareaInput
                                    label="Message"
                                    name="message"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    placeholder="Enter your message here..."
                                    error={errors.message}
                                />
                            </div>

                        </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 mt-30 lg:mt-40 px-10">

                        <div className="flex flex-col gap-6">

                            <InputCard
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                            />

                            {errors.agreeTerms && (
                                <p className="text-[13px] text-red-400">
                                    {errors.agreeTerms}
                                </p>
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
