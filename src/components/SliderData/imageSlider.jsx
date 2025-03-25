import { useState } from "react"
import { SliderData } from "./sliderData"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styles from "./index.module.scss"


export const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    if (!Array.isArray(slides) || slides.length < 0) {
        return null
    }

    const prevSlide = () => {
        
        setCurrent(current === 0 ? length - 1 : current - 1)
      
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <section className={styles.slider}>
                <FiChevronLeft className={styles.left_arrow} onClick={prevSlide} />
        
                <FiChevronRight className={styles.right_arrow} onClick={nextSlide} />
            
            {SliderData.map((slider, index) => {
                return (
                    <div key={index} className={`${index === current ? styles.slide_active : styles.slide}`}>
                        {index === current && (
                            <img src={slider.image} alt="images of dentists" />
                        )}


                    </div>
                )
            })}
        </section>
    )
}

