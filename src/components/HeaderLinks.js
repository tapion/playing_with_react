import { NavLink } from "react-router-dom";

import classes from "./HeaderLinks.module.css";

const HeaderLinks = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.activate} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.activate} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLinks;
