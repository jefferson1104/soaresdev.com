// COMPONENTS
import { INavLink } from "./NavLink";

// MENU OVERLAY UTILS
interface IMenuOverlay {
    links: INavLink[];
}

// MENU OVERLAY COMPONENT
export const MenuOverlay = ({ links }: IMenuOverlay) => {
    /* Renders */
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};
