import type { TextareaProps } from "../../types/inputType";

function TextareaInput({
    label,
    name,
    value,
    onChange,
    className,
    containerClassName,
    placeholder = "Enter your Message here..",
    rows,
    error,
    ariaInvalid,
}: TextareaProps) {
    return (
        <div className={`flex flex-col ${containerClassName ?? ""}`}>
            <label
                htmlFor={name}
                className="text-base lg:text-xl font-semibold text-white light:text-grey-08 mb-10 md:mb-14 lg:mb-16 font-urbanist" >
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                aria-invalid={ariaInvalid}
                className={`${rows ? "" : "h-90 md:h-122 lg:h-170"} rounded-md lg:rounded-lg px-20 py-16 lg:px-20 lg:py-24 text-white light:text-grey-08 bg-grey-10 light:bg-white-95 border border-grey-15 light:border-white-90 placeholder:text-grey-40 light:placeholder:text-grey-20 placeholder:text-sm lg:placeholder:text-lg focus:border-white light:focus:border-grey-08 outline-0 ${className ?? ""}`}
            />
            {error && (
                <p className="mt-6 text-13 text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

export default TextareaInput;
