import SubTitle from "../SubTitle/SubTitle";
import Text from "../Text/Text";

import styles from "./MyStack.module.css"

function MyStack() {
    return(
        <div className={styles.containerStack}>
            <div><SubTitle>Minhas Stack</SubTitle></div>
            <div className={styles.stack}>
                <div className={styles.frontend}>
                    <Text>FrontEnd</Text>
                    <ul className={styles.lists}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>NextJs</li>
                        <li>Styled Components</li>
                    </ul>
                </div>
                <div className={styles.backend}>
                    <Text>BackEnd</Text>
                    <ul className={styles.lists}>
                        <li>Javascript</li>
                        <li>NodeJs</li>
                        <li>NextJs</li>
                        
                        
                    </ul>
                </div>
            </div>

        </div>
        
    )
}

export default MyStack;