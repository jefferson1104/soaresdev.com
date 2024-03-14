import { motion } from "framer-motion";

// TAB BUTTON COMPONENT UTILS
interface ITabButton {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

// TAB BUTTON COMPONENT
export const TabButton = ({ active, selectTab, children }: ITabButton) => {
    /* Utils */
    const buttonClasses = active ? "text-white " : "text-[#ADB7BE]";

    const variants = {
        default: { width: 0 },
        active: { width: "calc(100% - 0.75rem)" }
    };

    /* Renders */
    return (
        <button onClick={selectTab}>
            <p
                className={`mr-3 font-semibold hover:text-white transition-text duration-200 ease-out ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-[#4bbcce] mt-1 mr-3"
            ></motion.div>
        </button>
    );
};
