import { InputHTMLAttributes } from "react";

// INPUT COMPONENT INTERFACES
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    name?: string;
    errorMessage?: string;
}

// INPUT COMPONENT
export const Input = ({ id, label, name, errorMessage, ...props }: IInput) => {
    const borderStyles = !!errorMessage
        ? "border-red-700 hover:ring-red-600 focus-visible:ring-red-600"
        : "border-[#33353F] hover:ring-slate-600 focus-visible:ring-[#4bbcce]";

    /* Renders */
    return (
        <div>
            {label && (
                <label
                    className="text-white block mb-2 text-sm lg:text-base font-medium"
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <input
                className={`bg-[#18191E] placeholder-[#9CA2A9] border ${borderStyles} text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none overflow-hidden hover:ring-2 focus-visible:ring-2`}
                id={id}
                name={name}
                {...props}
            />
            {!!errorMessage && (
                <p className="mt-1 text-sm text-red-700 font-medium">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};
