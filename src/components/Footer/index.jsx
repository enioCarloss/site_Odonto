import styles from "./index.module.scss"
import imgLogo from "../../assets/faleconosco 1.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Adress, Contact } from "../Mockdata/data"

export const FooterPage = () => {

  return (
    <footer className={styles.footer_Container}>
      <div>
        <div>
          <img className={styles.imgLogo} src={imgLogo} />
        </div>
        <div className={styles.divider}></div>

        <div className={styles.menuFooter}>
      
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={60} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={60} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={60} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}