import NavBar from '../NavBar'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header_logo}>
            <a href="">Sashka</a>
        </div>
        <NavBar />
    </div>
  )
}

export default Header