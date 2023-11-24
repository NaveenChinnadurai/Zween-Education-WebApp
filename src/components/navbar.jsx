/* import { FaSearch as Search} from "react-icons/fa";
 */import '../styles/compoStyles/navbar.css'
function NavBar() {
    return(
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
            <span className='btn navbar-btn'>GET STARTED</span>
        </div>
    )
}

export default NavBar;