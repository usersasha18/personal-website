import styles from './NavBar.module.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
        <a>
            <Link to='/'>Home</Link>
        </a>
        <a>
            <Link to='/contacts'>Contacts</Link>
        </a>
        <a>
            <Link to='/about'>About</Link>
        </a>
    </div>
  )
}

export default NavBar