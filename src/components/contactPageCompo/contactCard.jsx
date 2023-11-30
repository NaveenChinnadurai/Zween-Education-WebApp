import '../../styles/compoStyles/contactStyles/contactCard.css'

function ContactCard(props) {
    return (
        <div className="contact-card" id={props.id} data-aos={props.animation}>
            <div className="align-centre contact-card-div ">
                <span className='width-fit'>{props.icon}</span>
                <h2>{props.title}</h2>
            </div>
            <p className="align-centre">{props.para}<br />{props.para1}</p>
        </div>
    )
}

export default ContactCard;