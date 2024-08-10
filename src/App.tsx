import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MENU_LIST } from "./constants";

const ShrinkingCircle: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          {MENU_LIST.map((menu) => (
            <li key={menu}>
              <Link to={menu}>{menu}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default ShrinkingCircle;
