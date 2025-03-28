import { ImageSlider } from "../../components/SliderData/imageSlider"
import { SliderData } from "../../components/SliderData/sliderData"
import styles from "./index.module.scss"
import img from "../../assets/dentista.svg"
export const AboutPage = () => {

    return (
        <section className={styles.about_sectionContainer}>
            <div className={styles.about_slider}>

                <ImageSlider slides={SliderData} />

            </div>
            <div className={styles.about_infoContainer}>
                <h2>Dr. Fulano te Tal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac justo non mauris luctus tincidunt.
                    Nulla facilisi. Nulla facilisi. Donec lobortis, felis in dignissim molestie, velit nunc sagittis justo,
                    eu commodo lectus mauris id massa. Donec vel ante id ipsum consectetur ultricies. Sed non enim vel felis
                    consectetur, ac dignissim eros laoreet. Duis nec dolor non libero convallis gravida.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac justo non mauris luctus tincidunt.
                    Nulla facilisi. Nulla facilisi. Donec lobortis, felis in dignissim molestie, velit nunc sagittis justo,
                    eu commodo lectus mauris id massa. Donec vel ante id ipsum consectetur ultricies. Sed non enim vel felis
                    consectetur, ac dignissim eros laoreet. Duis nec dolor non libero convallis gravida.
                </p>

                <div className={styles.about_teamContainer}>
                    <p>Minha Equipe</p>
                    <div>
                        <img src={img} />
                        <img src={img} />
                        <img src={img} />
                    </div>

                </div>
            </div>

        </section>
    )
}