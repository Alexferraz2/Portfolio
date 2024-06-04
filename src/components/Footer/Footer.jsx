import Styles from "./Footer.module.css"
import styles from "../AboutMe/AboutMe.module.css"

import SubTitle from "../SubTitle/SubTitle";

function Footer() {
    return(
        <div className={Styles.footer}>
            <div className={Styles.contact}>
                <SubTitle>Gostou? Entre em contato</SubTitle>
                <p className={styles.textAbout}>Atualmente, estou procurando por novas oportunidades no mercado da programação, vamos conversar?</p>
                <div>
                    <p><strong>E-mail:</strong> alex_ferraz2@hotmail.com</p>
                    <p><strong>Whatsapp:</strong> (84) 98844-74988</p>
                </div>
                
            </div>
            <div className={Styles.assign}>
                <p className={styles.textAbout}>Criado por </p>
                <p>Alexsandro Leandro</p>
            </div>
            
        </div>
    )
}

export default Footer;