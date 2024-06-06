
import AboutMe from "../Aboutme/Aboutme";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyProject from "../MyProject/MyProject";
import MyStack from "../MyStack/MyStack";
import Presentation from "../Presentation/Presentation";
import styles from "./Main.module.css"

function Main() {
    return(
        <div className={styles.main}>
            <Header/>
            <Presentation/>
            <AboutMe/>
            <MyStack/>
            <MyProject/>
            <Footer/>
        </div>
    )
}

export default Main;