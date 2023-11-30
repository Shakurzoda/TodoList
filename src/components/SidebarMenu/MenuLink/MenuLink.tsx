import CustomButton from "@components/CustomButton/CustomButton";
import { NavLink } from "react-router-dom";
import style from "./MenuLink.module.scss";
import removee from '@img/icons/remove.png'

interface MenuLinkProps {
    path: string;
    title: string;
    removeCategory?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ title, path, removeCategory }) => {
    const removing = () => {
        if (removeCategory) {
            removeCategory();
        }
    };
    return (
        <div className={style.menuItem}>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? style.activeLink : style.link)}
                onClick={(e) => e.stopPropagation()}
            >
                <span>{title}</span>
            </NavLink>
            {removeCategory && (
                <CustomButton onClick={removing} color="none">
                    <img src={removee} alt="" />
                </CustomButton>
            )}
        </div>
    );
};

export default MenuLink;
