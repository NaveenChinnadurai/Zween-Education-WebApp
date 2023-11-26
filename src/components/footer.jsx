import '../styles/compoStyles/footer.css';
import { FaFacebookSquare as FB,
        FaInstagram as IG,
        FaWhatsapp as WA,
        FaTelegram as TG
} from "react-icons/fa";
import { FaXTwitter as Twitter} from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className="row footer">
            <div className="footer-icons">
                <h1 className='align-centre'>Zween Edu & Co</h1>
                <p>There are many variations of passag of Lor Ipsum available but the major have suffered alteration</p>
                <div className="row footer-icon">
                    <span><FB/></span>
                    <span><IG/></span>
                    <span><Twitter/></span>
                    <span><WA/></span>
                    <span><TG/></span>
                </div>
            </div>
            <div className="row footer-pages">
                <ul className="footer-list-1">
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li>Courses</li>
                    <li><Link to='/about' className='link'>About Us</Link></li>
                    <li>Contact</li>
                </ul>
                <ul className="footer-list-1">
                    <li>Printing</li>
                    <li>Designing</li>
                    <li>UI/UX</li>
                    <li>Branding</li>
                </ul>
            </div>
            <div className="col footer-end-div">
                <h2>Subscribe to our Newsletter</h2>
                <input type="text" placeholder='Your E-mail Address' />
                <p>Subscribe</p>
            </div>
        </div>
    )
}

export default Footer;