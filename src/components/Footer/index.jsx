import styles from "./index.module.scss"
import imgLogo from "../../assets/logodentista.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Adress,Contact } from "../Mockdata/data"

export const FooterPage = ()=>{

    return(
        <footer className={styles.footer_Container}>
            <div>
                 <div>
                      <img className={styles.imgLogo} src={imgLogo} />
                </div>
                <div className={styles.divider}></div>

                <div className={styles.menuFooter}>
                    <div className={styles.contact}>
                    <h2>Contato</h2>
                   
                    <p>{Contact.email}
                    <br />
                    {Contact.phone}
                    </p>
                     </div>
                    <div className={styles.address}>
                        <h2>Endereço</h2>
                        <p>{Adress.street}, {Adress.number}
                            <br />
                            {Adress.city}, {Adress.state}
                            <br />
                            {Adress.zip}, {Adress.country}
                        </p>
                       
                    </div>
                    <h2>Redes Sociais</h2>
 <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>

                </div>
            </div>
        </footer>
    )
}