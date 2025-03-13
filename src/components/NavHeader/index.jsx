import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import navLinks from "../Mockdata/data";


export const NavHeader = () => {
    const navigate = useNavigate();
   const location = useLocation(); 
  const activeRoute = location.pathname; 

    const schedulingButton = () => {
        navigate("/scheduling");
    };

    return (
        <>
        <nav>
            <ul className={styles.listMenu_navBox}>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
                <div>
                    <button onClick={schedulingButton}>Marcar Consulta</button>
                </div>
            </ul>
            
        </nav>
         
        </>
    );
};
