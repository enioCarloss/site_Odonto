import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import navLinks from "../Mockdata/data";


export const NavHeader = () => {
    const navigate = useNavigate();
  

    const schedulingButton = () => {
        navigate("/scheduling");
    };

    return (
<<<<<<< HEAD
        
            <nav className={`${open ? styles.open_navMenu : styles.close_navMenu}`}>
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
      
=======
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
>>>>>>> d054994c8972e5f1162320e1975f3f9c4e64db2b
    );
};
