// COMPONENTS
import { NavLink, INavLink } from "./NavLink";

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
                    <NavLink
                        title={link.title}
                        href={link.href}
                        external={link.external}
                    />
                </li>
            ))}
        </ul>
    );
};
