import { NavHeader } from "../NavHeader"
import styles from "./index.module.scss"
export const HeaderPage = () => {

    return (
        <header className={styles.header_Container}>
            <div>
                <NavHeader />
            </div>
        </header>
    )
}