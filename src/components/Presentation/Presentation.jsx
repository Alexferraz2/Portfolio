import Button from "../Button/Button";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./Presentation.module.css"

function Presentation() {
    return(
        <div className={styles.presentationContaine}>
            <div className={styles.presentation}>
                <Text>Olá, meu nome é</Text>
                <Title>Alexsandro</Title>
                <p className={styles.paragraph}>E eu sou Desenvolver Web FullStack, e este <span className={styles.span}>é o meu portfólio</span></p>
            </div>
            <div className={styles.avatarcontainer}>

                <div className={styles.imgcontainer}>
                    <img src="/Alex.jpg" alt="Alex" className={styles.avatar}/>
                </div>
                
                <div className={styles.btn}>
                    <Button url="/curriculo.pdf">Baixar Curriculum</Button>
                </div>

            </div>
            
            
        </div>
    )
}


export default Presentation;