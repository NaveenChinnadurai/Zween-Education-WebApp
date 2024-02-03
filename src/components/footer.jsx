import '../styles/compoStyles/footer.css';
import { Link } from 'react-router-dom';
import Subcribe from './contactPageCompo/subcribe';
import IconDisplay from './aboutPageCompo/iconDisplay';
function Footer() {
    return (
        <div className="footer">
            <div className="row pad-20 footer-subdiv">
                <div className="col footer-icons">
                    <h1 className='align-left'>Zween Edu & Co</h1>
                    <p>There are many variations of passag of Lor Ipsum available but the major have suffered alteration</p>
                    <IconDisplay id="footer-icon"/>
                </div>
                <div className="row footer-pages">
                    <ul className="col footer-list-1">
                        <li><Link to='/' className='link'>Home</Link></li>
                        <li><Link to='/courses' className="link">Courses</Link></li>
                        <li><Link to='/about' className='link'>About Us</Link></li>
                        <li><Link to='/contact' className="link">Contact</Link></li>
                    </ul>
                    <ul className="col footer-list-1">
                        <li>Printing</li>
                        <li>Designing</li>
                        <li>UI/UX</li>
                        <li>Branding</li>
                    </ul>
                </div>
                <Subcribe id="subcribe"/>
            </div>
            <div className="row footer-subdiv-2">
                <h3 className='width-100 align-centre'>All Copyright &copy; reserved for Zween | Nov 2023 </h3>
            </div>
        </div>
    )
}

export default Footer;