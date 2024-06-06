import SubTitle from "../SubTitle/SubTitle";
import styles from "./Header.module.css"

function Header(){
    return(
        
        <div className={styles.menu} >
                
                <a href="#aboutme" className={styles.link}> Sobre mim</a>                
                <a href="#stack" className={styles.link}>Stacks</a>
                <a href="#project" className={styles.link}>Projetos</a>
                <a href="#contact" className={styles.link}>Contato</a>
        </div>
        
    )
}

export default Header;