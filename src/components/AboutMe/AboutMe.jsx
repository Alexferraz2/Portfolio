import React from "react";

import styles from "./AboutMe.module.css"
import SubTitle from "../SubTitle/SubTitle";

function AboutMe() {
    return(
        <div className={styles.aboutMe} id="aboutme">
                        
            <div className={styles.textAboutMe}>
                <div className={styles.subTitle}>
                    <SubTitle>Sobre mim</SubTitle>
                </div>
                <div className={styles.textAbout}>
                    <p>
                        Sou apaixonado por tecnologia com foco no front-end, onde dedico grande parte do meu tempo ao desenvolvimento de interfaces de usuário intuitivas e responsivas. Paralelamente, estou me aprimorando no back-end, expandindo minhas habilidades em Node.js e Next.js.
                        
                    </p>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe;