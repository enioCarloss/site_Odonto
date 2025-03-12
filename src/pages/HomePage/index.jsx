import styles from "./index.module.scss"
export const HomePage = () => {

    return (
        <section className={styles.section_containerBox} >
            <div>

                <h1>Home Page</h1>
                <p>Welcome to our website!</p>
            </div>
            <div className="carrousel">
            <p>carrousel</p>

            </div>

        </section>
    )
}