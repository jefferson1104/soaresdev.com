// INPUT COMPONENT INTERFACES
interface IInput {
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    type: string;
    required?: boolean;
    value?: string | number;
}

// INPUT COMPONENT
export const Input = ({
    id,
    label,
    placeholder,
    type,
    required,
    value
}: IInput) => {
    /* Renders */
    return (
        <div>
            {label && (
                <label
                    className="text-white block mb-2 text-sm font-medium"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none overflow-hidden hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-[#4bbcce]"
                id={id}
                name={id}
                type={type}
                required={required}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};
