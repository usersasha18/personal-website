
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
        <p>
            <Link to='/'>Home</Link>
        </p>
        <p>
            <Link to='/contacts'>Contacts</Link>
        </p>
        <p>
            <Link to='/about'>About</Link>
        </p>
    </div>
  )
}

export default NavBar