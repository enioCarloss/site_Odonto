import { Link, useNavigate } from "react-router-dom"
import imgLogo from "../../assets/logodentista.svg"
<<<<<<< HEAD
//import styles from "./index.module.scss"
=======
import styles from "./index.module.scss"
import  navLinks  from "../Mockdata/data"
>>>>>>> 8e0c8e6f0c76e3b11d53048e242f1e2eb9b92369
export const NavHeader = () => {
    const navigate = useNavigate()
    const schedulingButton = () => {
        navigate("/scheduling")

    }
    return (
        <nav>
<<<<<<< HEAD
            <ul className="">

                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="reviews">Avaliações</Link>
                </li>
                <li>
                    <Link to="/treatments">Tratamentos</Link>
                </li>
                <li>
                    <Link to="/location">Localização</Link>
                </li>

=======
            <ul className={styles.listMenu_navBox}>
            <div>
                <img src={imgLogo} />
            </div>

            {navLinks.map((link) => (
                <li key={link.id}>
                    <Link to={link.path}>{link.label}</Link>
                </li>
            ))}
>>>>>>> 8e0c8e6f0c76e3b11d53048e242f1e2eb9b92369
                <div>
                    <button onClick={schedulingButton}>Marcar Consulta</button>
                </div>


            </ul>

        </nav>
    )
}