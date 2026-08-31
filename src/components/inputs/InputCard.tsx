import { useState } from "react";
import type { InputProps } from "../../types/inputType";

function InputCard({
    label,
    name,
    placeholder,
    type = "text",
    className,
    icon,
    id,
    radioPlaceholder,
    onChange,
    value,
    containerClassName,
    min,
    max,
    step,
    error,
    ariaInvalid,
}: InputProps) {

    const [isSelected, setIsSelected] = useState(false);
    if (type === "radio") {
        return (
            <div className="w-full relative px-10">
                <p className="text-base lg:text-xl font-semibold text-white light:text-grey-08 mb-10 md:mb-14 lg:mb-16 font-urbanist">
                    {label}
                </p>

                <label
                    htmlFor={id}
                    className="relative flex items-center w-full cursor-pointer"
                >
                    <input
                        id={id}
                        name={name}
                        type="radio"
                        className="peer sr-only"
                        onChange={() => setIsSelected(true)}
                    />

                    <div className="w-full rounded-md lg:rounded-lg px-20 py-16 lg:px-24 lg:py-20 bg-grey-10 light:bg-white-95 border border-grey-15 light:border-white-90 flex items-center justify-between">

                        <div className="flex items-center gap-6 lg:gap-12">
                            <span className="text-white light:text-grey-08 text-xl lg:text-2xl">
                                {icon}
                            </span>

                            {isSelected ? (
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    autoFocus
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-transparent outline-none text-white light:text-grey-08 text-sm lg:text-lg font-semibold font-urbanist placeholder:text-grey-40 light:placeholder:text-grey-20 w-full"
                                />
                            ) : (
                                <span className="text-sm lg:text-lg font-semibold text-grey-40 light:text-grey-20 font-urbanist">
                                    {radioPlaceholder}
                                </span>
                            )}
                        </div>

                        <span className="w-16 h-16 rounded-full border border-purple-60 shrink-0" />
                    </div>

                    <span className="absolute right-20 lg:right-24 w-16 h-16 rounded-full bg-purple-60 flex items-center justify-center opacity-0 peer-checked:opacity-100" />
                </label>
            </div>
        );
    }

    if (type === "checkbox") {
        return (
            <div className="w-full relative px-10 py-3">
                <label
                    htmlFor={id}
                    className="flex items-center gap-6 lg:gap-10 cursor-pointer"
                >
                    <input
                        id={id}
                        name={name}
                        type="checkbox"
                        className="peer sr-only"
                    />

                    <span className="w-24 h-24 rounded-sm border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 shrink-0 peer-checked:bg-purple-60 peer-checked:border-purple-60 light:peer-checked:bg-purple-60 light:peer-checked:border-purple-60" />

                    <p className="text-sm md:text-base lg:text-lg font-medium text-grey-60 light:text-grey-40 font-urbanist">
                        I agree with{" "}
                        <span className="underline decoration-grey-60 light:decoration-grey-40">
                            Terms of Use
                        </span>{" "}
                        and{" "}
                        <span className="underline decoration-grey-60 light:decoration-grey-40">
                            Privacy Policy
                        </span>
                    </p>
                </label>
            </div>
        );
    }

    return (
        <div className={`flex flex-col w-full relative px-10 ${containerClassName ?? ""}`}>
            <label
                htmlFor={name}
                className="text-base lg:text-xl font-semibold text-white light:text-grey-08 mb-10 md:mb-14 lg:mb-16 font-urbanist"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}

                min={min}
                max={max}
                step={step}
                aria-invalid={ariaInvalid}
                className={`rounded-md lg:rounded-lg px-20 py-16 lg:px-24 lg:py-20 text-white light:text-grey-08 bg-grey-10 light:bg-white-95 border border-grey-15 light:border-white-90 placeholder:text-grey-40 light:placeholder:text-grey-20 placeholder:text-sm lg:placeholder:text-lg focus:border-white light:focus:border-grey-08 outline-0 ${className ?? ""}`}
            />
            {error && (
                <p className="mt-6 text-[13px] text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

export default InputCard;

