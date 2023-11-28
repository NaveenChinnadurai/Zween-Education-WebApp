import '../../styles/compoStyles/homeStyles/contactCard.css'
import { FaLocationDot as Location } from "react-icons/fa6";
import { FaPhone as Phone } from "react-icons/fa";
import { MdOutlineEmail as Email } from "react-icons/md";

function ContactCard(props) {
    return (
        <div className="contact-card" id={props.id}>
            <div className="align-centre contact-card-div ">
                <span className='width-fit'>{props.icon}</span>
                <h2>{props.title}</h2>
            </div>
            <p className="align-centre">{props.para}<br />{props.para1}</p>
        </div>
    )
}

export default ContactCard;