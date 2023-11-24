import { FaSearch as Search } from "react-icons/fa";
import '../styles/compoStyles/navbar.css'
import { GiHamburgerMenu as BurgerMenu} from "react-icons/gi";

function NavBar() {
    return (
        <div className='row navbar-div'>
            <div className="logo-div">Zween</div>
            <ul className='row'>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Categories</li>
                <li>contact</li>
            </ul>
            <div className="row nav-end">
                <p className="cur-pointer"><Search /></p>
                <span className='btn navbar-btn'>GET STARTED</span>
            </div>
            <span><BurgerMenu/></span>
        </div>
    )
}

export default NavBar;