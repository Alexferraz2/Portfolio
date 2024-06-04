import styles from "./SubTitle.module.css"

function SubTitle({children}) {
    return(
        <h2 className={styles.subTitle}>{children}</h2>
    )
}

export default SubTitle;