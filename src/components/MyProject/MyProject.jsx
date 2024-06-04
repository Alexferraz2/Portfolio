import Styles from "./MyProject.module.css"


import SubTitle from "../SubTitle/SubTitle";
import Text from "../Text/Text";
import Button from "../Button/Button";

function MyProject() {
    return(
        <div className={Styles.myProjectContainer}>
            <div>
                <SubTitle>Meus projetos</SubTitle>
            </div>

            <div className={Styles.myProject}>
                <div className={Styles.card}>
                    <Text >Jogo da Velha</Text>
                    <p>Foi construído um jogo da velha com placar para treinar ReactJs e a fazer manipulação de estados dentro do ReactJs</p>
                    <Button>Visitar Projeto</Button>
                </div>
                <div className={Styles.card}>
                    <Text className={Styles.contentCard}>Social Dev</Text>
                    <p>Foi construída uma rede social usando ReactJs, NextJs, NodeJs, mongoDb, mongoose e styled components.</p>
                    <Button>Visitar Projeto</Button>
                </div>
                
            </div>
        </div>
    )
}

export default MyProject;