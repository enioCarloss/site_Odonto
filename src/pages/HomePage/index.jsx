import { ImageSlider } from "../../components/SliderData/imageSlider"
import { SliderData } from "../../components/SliderData/sliderData"
import styles from "./index.module.scss"
export const HomePage = () => {

    return (
        <section className={styles.section_containerBox} >

            <ImageSlider slides={SliderData} />

        </section>
    )
}