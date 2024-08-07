
import styles from "./Button.module.css"

function Button({url, children}) {
    return (
        <a href={url} download="curriculo" className={styles.btnlink} target="_blank">{children}</a>
    )
}


export default Button;