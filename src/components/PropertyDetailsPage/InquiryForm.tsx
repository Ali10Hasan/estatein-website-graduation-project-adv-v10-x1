import { useState } from "react";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";
import Select from "../inputs/Select";
import HeaderSection from "../HeaderSection";
import { TiLocation } from "react-icons/ti";

const InquiryForm = () => {




    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        property: "",
        message: "",
        agree: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.agree) {
            alert("You must agree to the Terms of Use and Privacy Policy");
            return;
        }
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            property: "",
            message: "",
            agree: false,
        })
        console.log(form);
    };

    const updateField = (key: keyof typeof form, value: string | boolean) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <section className="flex xl:flex-row flex-col 2xl:gap-100 xl:gap-80  xl:items-start mb-80 xl:mb-120 2xl:mb-150">
            <HeaderSection className="2xl:max-w-519 xl:max-w-412"
                title={"Inquire About Seaside Serenity Villa"}
                description={"Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."} />

            <form
                onSubmit={handleSubmit}
                className="flex-1 2xl:p-50 xl:p-40 p-20 rounded-xl border border-grey-15 xl:mt-0 mt-40">

                <div className="grid md:grid-cols-2 gap-20 xl:gap-30 mb-20 2xl:mb-30">
                    <InputCard
                        label="First Name"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={form.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                    />

                    <InputCard
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={form.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-20 xl:gap-30 mb-20 2xl:mb-30">
                    <InputCard
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                    />

                    <InputCard
                        type="phone"
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                    />
                </div>

                <Select
                    Icone={<TiLocation />}
                    FilterText={"Seaside Serenity Villa, Malibu, California"}
                    name="property"
                    value={form.property}
                    onChange={(value) => updateField("property", value)}
                    options={[
                        "Option 1",
                        "Option 2",
                        "Option 3"
                    ]}

                />

                <div className="xl:mt-30">
                    <TextareaInput
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-20 xl:gap-50 mt-30 xl:mt-40 2xl:mt-50">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={form.agree}
                            onChange={(e) => updateField("agree", e.target.checked)}
                        />
                        <span className="text-grey-60 text-sm xl:text-[16px] 2xl:text-[18px] font-medium">
                            I agree with <a href="/" className="underline">Terms of Use</a> and <a href="/" className="underline">Privacy Policy</a>
                        </span>
                    </label>

                    <button type="submit" className="bg-purple-60 py-14 2xl:py-18 md:max-w-250 w-full  rounded-lg text-white light:text-grey-08">
                        Send Your Message
                    </button>
                </div>

            </form>
        </section>


    );
};

export default InquiryForm
