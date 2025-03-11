import { Link, useNavigate } from "react-router-dom"
import imgLogo from "../../assets/logodentista.svg"
//import styles from "./index.module.scss"
export const NavHeader = () => {
    const navigate = useNavigate()
    const schedulingButton = () => {
        navigate("/scheduling")

    }
    return (
        <nav>
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

                <div>
                    <button onClick={schedulingButton}>Marcar Consulta</button>
                </div>


            </ul>

        </nav>
    )
}