import { Link } from "react-router-dom"

export const NavHeader = () => {
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
                    <button>Marcar Consulta</button>
                </div>
            </ul>
        </nav>
    )
}