import React from "react";
import { Link } from "react-router-dom";
import { navLinks} from "../mockdata/mockdata";

export const NavHeader = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
