// COMPONENTS
import { NavLink, INavLink } from "./NavLink";

// MENU OVERLAY UTILS
interface IMenuOverlay {
    links: INavLink[];
    onClick?: () => void;
}

// MENU OVERLAY COMPONENT
export const MenuOverlay = ({ links, onClick }: IMenuOverlay) => {
    /* Renders */
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index} onClick={onClick}>
                    <NavLink title={link.title} href={link.href} />
                </li>
            ))}
        </ul>
    );
};
