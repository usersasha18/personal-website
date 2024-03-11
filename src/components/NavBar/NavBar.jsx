import styles from './NavBar.module.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className={styles.nav_wrapper}>
        <a href="">
          <Link to='/'>Главная</Link>
        </a>
        <a href="">
          <Link to='/contacts'>Контакты</Link>
        </a>
        <a href="">
          <Link to='/about'>Биография</Link>
        </a>
    </div>
  )
}

export default NavBar