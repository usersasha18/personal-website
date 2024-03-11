import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header_logo}>
            <a className={styles.header_logo_text} href="">Portfolio</a>
        </div>
        <NavBar />
    </div>
  )
}

export default Header