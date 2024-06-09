import Aboutme from "../Aboutme/Aboutme"

import TopButton from "../Button/TopButton";
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
            <Aboutme/>
            <MyStack/>
            <MyProject/>
            <Footer/>
            <TopButton/>
            
        </div>
    )
}

export default Main;