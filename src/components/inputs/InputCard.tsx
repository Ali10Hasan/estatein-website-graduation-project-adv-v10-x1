import type { InputProps } from "../../types/inputType"
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main

    if (type === "radio") {
        return (
            <div className="w-full relative px-10">
                <p className="text-base lg:text-xl font-semibold text-white mb-10 md:mb-14 lg:mb-16 font-urbanist">{label}</p>
                <label htmlFor={id} className="relative flex items-center w-full cursor-pointer" >
                    <input id={id} name="radio" type="radio" className="peer sr-only" />
                    <div className="w-full rounded-md lg:rounded-lg px-20 py-16 lg:px-24 lg:py-20 bg-grey-10 border border-grey-15 flex items-center justify-between">
                        <div className="flex items-center gap-6 lg:gap-12">
                            <span className="text-white text-xl lg:text-2xl "> {icon}</span>
                            <span className="text-sm lg:text-lg font-semibold text-grey-40 font-urbanist">{radioPlaceholder}</span>
                        </div>
                        <span className="w-16 h-16 rounded-full border border-purple-60 shrink-0"> </span>
                    </div>
                    <span className="absolute right-20 lg:right-24 w-16 h-16 rounded-full bg-purple-60 flex items-center justify-center opacity-0 peer-checked:opacity-100"></span>
                </label>
            </div>
        );
    }
    return (
        <div className={`flex flex-col w-full relative px-10 ${containerClassName ?? ""}`}>
            <label
                htmlFor={name}
                className="text-base lg:text-xl font-semibold text-white mb-10 md:mb-14 lg:mb-16 font-urbanist"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                aria-invalid={ariaInvalid}
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
                className={`rounded-md lg:rounded-lg px-20 py-16 lg:px-24 lg:py-20 text-white bg-grey-10 border border-grey-15 placeholder:text-grey-40 placeholder:text-sm lg:placeholder:text-lg focus:border-white outline-0 ${className ?? ""}`}
            />
            {error && (
                <p className="mt-6 text-[13px] text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default InputCard;
=======
export default InputCard

>>>>>>> main
=======
export default InputCard

>>>>>>> main
