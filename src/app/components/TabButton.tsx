// TAB BUTTON COMPONENT UTILS
interface ITabButton {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

// TAB BUTTON COMPONENT
export const TabButton = ({ active, selectTab, children }: ITabButton) => {
    /* Vars */
    const buttonClasses = active
        ? "text-white border-b-4 border-[#4bbcce]"
        : "text-[#ADB7BE]";

    /* Renders */
    return (
        <button onClick={selectTab}>
            <p
                className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
            >
                {children}
            </p>
        </button>
    );
};
