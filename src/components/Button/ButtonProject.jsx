
import styles from "./Button.module.css"

function ButtonProjects({children}) {
    return (
        <button className={styles.btn}>{children}</button>
    )
}


export default ButtonProjects;