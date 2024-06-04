import React from "react";



import styles from "./AboutMe.module.css"
import SubTitle from "../SubTitle/SubTitle";

function AboutMe() {
    return(
        <div className={styles.aboutMe}>
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
                ...
            <div className={styles.img}>
                <img src="" alt="Alex" />
            </div>
        </div>
    )
}

export default AboutMe;