import { NavLink } from "react-router-dom";
import { Paths } from "../../router/Paths";
import s from "./Navbar.module.scss"

export const Navbar = () => {
  const navMenu = [
    {
      path: Paths.home,
      text: "Home",
    },
    {
      path: Paths.products,
      text: "Products",
    },
  ];

  return <nav>
    <ul className={s.navStyling}>
      {navMenu.map((item) => {
        return (
          <li key={item.text}>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        )
      })}
    </ul>
  </nav>;
};
