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
            <div className={styles.btn}>
                <Button>Baixar Curriculum</Button>
            </div>
            
        </div>
    )
}


export default Presentation;