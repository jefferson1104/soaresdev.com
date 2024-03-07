import Link from "next/link";

// NAV LINK UTILS
export interface INavLink {
    href: string;
    title: string;
}

// NAV LINK COMPONENT
export const NavLink = ({ href, title }: INavLink) => {
    /* Renders */
    return (
        <Link
            className="block py-2 pl-3 pr-4 md:p-0 sm:text-xl text-[#ADB7BE] rounded hover:text-white"
            href={href}
        >
            {title}
        </Link>
    );
};
