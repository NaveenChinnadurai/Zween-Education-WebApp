import {
    FaFacebookSquare as FB,
    FaInstagram as IG,
    FaWhatsapp as WA,
    FaTelegram as TG
} from "react-icons/fa";
import { FaXTwitter as Twitter } from "react-icons/fa6";

function IconDisplay(props) {
    const containerStyles={
        justifyContent: "space-between",
        padding:  "0 10px"
    }
    const spanStyle = {
        fontSize: 25,
        cursor: "pointer"
    }
return (
    <div className="row iconDisplay-div" id={props.id} style={containerStyles}>
        <span style={spanStyle}><FB /></span>
        <span style={spanStyle}><IG /></span>
        <span style={spanStyle}><Twitter /></span>
        <span style={spanStyle}><WA /></span>
        <span style={spanStyle}><TG /></span>
    </div>
)
}

export default IconDisplay