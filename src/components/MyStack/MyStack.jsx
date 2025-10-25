import SubTitle from "../SubTitle/SubTitle";
import Text from "../Text/Text";

import styles from "./MyStack.module.css"

function MyStack() {
    return (
        <div className={styles.containerStack} id="stack">
            <div><SubTitle>Minhas Stack</SubTitle></div>
            <div className={styles.stack}>
                <div className={styles.frontend}>
                    <p className={styles.tittleStack}>FrontEnd</p>
                    <div className={styles.imgcontainer}>
                        <div>
                            <img src="/HTML5.png" alt="html5" className={styles.logo} />
                        </div>
                        <div>
                            <img src="/CSS3.png" alt="css3" className={styles.logo} />
                        </div>
                        <div >
                            <img src="/tailwind.png" alt="tailwind" className={styles.logo} />
                        </div>
                        <div >
                            <img src="/javascript.png" alt="javascript" className={styles.logo} />
                        </div>
                        <div >
                            <img src="/Typescript.png" alt="Typescript" className={styles.logo} />
                        </div>
                        <div >
                            <img src="/react.png" alt="react" className={styles.logo} />
                        </div>
                        <div>
                            <img src="/Nextjs Logo.png" alt="next" className={styles.logo} />
                        </div>
                    </div>

                </div>
                <div className={styles.backend}>
                    <p className={styles.tittleStack}>BackEnd</p>
                    <div className={styles.imgcontainer}>
                        <div className={styles.imgcontainer}>
                            <img src="/nodejs.svg" alt="nodejs" className={styles.logo} />
                        </div>
                        <div className={styles.imgcontainer}>
                            <img src="/MongoDB.png" alt="MongoDB" className={styles.logo} />
                        </div>
                        <div className={styles.imgcontainer}>
                            <img src="/mysql.png" alt="mysql.png" className={styles.logo} />
                        </div>
                        <div className={styles.imgcontainer}>
                            <img src="/postgresql.png" alt="postgresql.png" className={styles.logo} />
                        </div>
                        <div className={styles.imgcontainer}>
                            <img src="/prisma.svg" alt="prisma" className={styles.logo} />
                        </div>

                        <div className={styles.imgcontainer}>
                            <img src="/zod.png" alt="zod" className={styles.logo} />
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default MyStack;