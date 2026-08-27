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
                className="text-base lg:text-xl font-semibold text-white mb-10 md:mb-14 lg:mb-16 font-urbanist" >
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
                className={`${rows ? "" : "h-90 md:h-122 lg:h-170"} rounded-md lg:rounded-lg px-20 py-16 lg:px-20 lg:py-24 text-white bg-grey-10 border border-grey-15 placeholder:text-grey-40 placeholder:text-sm lg:placeholder:text-lg focus:border-white outline-0 ${className ?? ""}`}
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
