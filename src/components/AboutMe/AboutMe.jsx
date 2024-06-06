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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem saepe eum dolor delectus quam doloribus, itaque voluptatem magni iste, ullam fugiat illo, dolorum quos deserunt officia ex? Natus, ea?
                    </p>
                    
                </div>
            </div>
            
            <div className={styles.imgcontainer}>
                <img src="/Alex.jpg" alt="Alex" className={styles.avatar}/>
            </div>
        </div>
    )
}

export default AboutMe;