import { Link, Navigate, useNavigate } from "react-router-dom"

export const NavHeader = () => {
    const navigate = useNavigate()
    const schedulingButton = () => {
        navigate("/scheduling")
        console.log("olá")
    }
    return (
        <nav>
            <ul>
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