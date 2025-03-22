import { NavHeader } from "../NavHeader"
import styles from "./index.module.scss"
import imgLogo from "../../assets/logodentista.svg"
import { useState } from "react"
import Hamburger from "hamburger-react"
export const HeaderPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className={styles.header_Container}>
                <div>
                    <img src={imgLogo} alt="Logo" />
                </div>
                <div>
                    <button className={styles.btn_menuBox} >
                        <Hamburger toggled={open} toggle={setOpen} />
                    </button>
                </div>
                <NavHeader open={open} />
            </div>

        </header>
    )
}
