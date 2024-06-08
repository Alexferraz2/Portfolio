import Styles from "./MyProject.module.css"


import SubTitle from "../SubTitle/SubTitle";
import Text from "../Text/Text";
import Button from "../Button/Button";

function MyProject() {
    return(
        <div className={Styles.myProjectContainer} id="project">
            <div>
                <SubTitle>Meus projetos</SubTitle>
            </div>

            <div className={Styles.myProject}>
                <div className={Styles.card}>
                    <Text >Jogo da Velha</Text>
                    <p>Foi construído um jogo da velha com placar para treinar ReactJs e a fazer manipulação de estados dentro do ReactJs</p>
                    <Button url="https://react-jogo-da-velha-7od4.vercel.app/">Visitar Projeto</Button>
                </div>
                <div className={Styles.card}>
                    <Text className={Styles.contentCard}>Social Dev</Text>
                    <p>Foi construido uma página para uma pizzaria, onde podemos escolher sabores e adcionar em um carrinho de compras.</p>
                    <Button url="https://alexferraz2.github.io/Projeto-Pizzaria-Delivery/">Visitar Projeto</Button>
                </div>

                <div className={Styles.card}>
                    <Text className={Styles.contentCard}>Social Dev</Text>
                    <p>Foi construido uma página de uma empresa para poder mostrar seus serviços, projetos, depoimento de clientes e outras informações necessárias.</p>
                    <Button url="https://alexferraz2.github.io/Projeto_Awax/">Visitar Projeto</Button>
                </div>
                
            </div>
        </div>
    )
}

export default MyProject;