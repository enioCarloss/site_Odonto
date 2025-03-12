import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logodentista.svg";
import styles from "./index.module.scss";
import navLinks from "../Mockdata/data";

export const NavHeader = () => {
    const navigate = useNavigate();

    const schedulingButton = () => {
        navigate("/scheduling");
    };

    return (
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
    );
};
