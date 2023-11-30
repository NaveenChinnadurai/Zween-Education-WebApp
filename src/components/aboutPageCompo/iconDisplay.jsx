import '../../styles/compoStyles/aboutStyles/iconDisplay.css'
import {
    FaFacebookSquare as FB,
    FaInstagram as IG,
    FaWhatsapp as WA,
    FaTelegram as TG
} from "react-icons/fa";
import { FaXTwitter as Twitter } from "react-icons/fa6";

function IconDisplay(props) {
    return (
        <div className="row iconDisplay-div" id={props.id}>
            <span><FB /></span>
            <span><IG /></span>
            <span><Twitter /></span>
            <span><WA /></span>
            <span><TG /></span>
        </div>
    )
}

export default IconDisplay