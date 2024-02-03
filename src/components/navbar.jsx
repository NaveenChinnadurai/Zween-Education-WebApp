import { FaSearch as Search } from "react-icons/fa";
import '../styles/compoStyles/navbar.css'
import { GiHamburgerMenu as BurgerMenu} from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { IoMdClose as Cross } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar() {
    const[open,setOpen]=useState(false)
    const[classname,setClassname]=useState("")
    const clickBurger=()=>{
        setOpen(!open)
    }
    useEffect(()=>{
        if (open) {
            setClassname("mobile-view")
        }else{
            setClassname("")
        }
    })
    return (
        <div className='row navbar-div'>
            <div className="logo-div">
                <Link to='/' className="link">Zween</Link>
            </div>
            <ul className='row nav-list' id={classname}>
                <span className="navbar-cross"  onClick={clickBurger}><Cross/></span>
                <li  onClick={clickBurger}><Link to="/" className="link">Home</Link></li>
                <li  onClick={clickBurger}><Link to="/courses" className="link">Courses</Link></li>
                <li  onClick={clickBurger}><Link to="/about" className="link">About</Link></li>
                <li  onClick={clickBurger}>Categories</li>
                <li  onClick={clickBurger}><Link to='/contact' className="link">contact</Link></li>
            </ul>
            <div className="row nav-end">
                <p className="cur-pointer"><Search /></p>
                <span className='btn navbar-btn'>GET STARTED</span>
            </div>
            <span onClick={clickBurger}><BurgerMenu/></span>
        </div>
    )
}

export default NavBar;