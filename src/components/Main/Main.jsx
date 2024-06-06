
import AboutMe from "../Aboutme/Aboutme";
import Footer from "../Footer/Footer";
import MyProject from "../MyProject/MyProject";
import MyStack from "../MyStack/MyStack";
import Presentation from "../Presentation/Presentation";
import styles from "./Main.module.css"

function Main() {
    return(
        <div className={styles.main}>
            <Presentation/>
            <AboutMe/>
            <MyStack/>
            <MyProject/>
            <Footer/>
        </div>
    )
}

export default Main;