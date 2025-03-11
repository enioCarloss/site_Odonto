import { NavHeader } from "../NavHeader"
import styles from "./index.module.scss"
import { FiAlignJustify } from "react-icons/fi"
import imgLogo from "../../assets/logodentista.svg"
import { useState } from "react"
export const HeaderPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
        
    }

    return (
        <header>
            <div className={styles.header_Container}>

                <div>
                    <img src={imgLogo} />
                </div>
                <div>
                    <button className={styles.btn_menuBox} >
                        <FiAlignJustify />
                    </button>
                </div>
                <NavHeader />
            </div>
        </header>
    )
}