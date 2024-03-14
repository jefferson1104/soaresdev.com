import Link from "next/link";

// NAV LINK UTILS
export interface INavLink {
    href: string;
    title: string;
    external?: boolean;
}

// NAV LINK COMPONENT
export const NavLink = ({ href, title, external }: INavLink) => {
    /* Renders */
    return (
        <Link
            className="block py-2 pl-3 pr-4 md:p-0 sm:text-xl text-[#ADB7BE] rounded hover:text-white"
            href={href}
            target={external ? "_blank" : ""}
        >
            {title}
        </Link>
    );
};
