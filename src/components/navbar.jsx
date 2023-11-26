import { FaSearch as Search } from "react-icons/fa";
import '../styles/compoStyles/navbar.css'
import { GiHamburgerMenu as BurgerMenu} from "react-icons/gi";
import { useRef, useState } from "react";
import { IoMdClose as Cross } from "react-icons/io";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className='row navbar-div'>
            <div className="logo-div">
                <Link to='/' className="link">Zween</Link>
            </div>
            <ul className='row nav-list'>
                <span className="navbar-cross" ><Cross/></span>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li>Courses</li>
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