import '../../styles/compoStyles/homeStyles/contactform.css'
import img from '../../assets/contact-img.png'

function ContactForm() {
    return (
        <div className="row width-100 contactform-div">
            <div className="height-100 contactform-img">
                <img src={img} alt="Contact Image " className='height-100'/>
            </div>
            <div className="height-100 contactform">
                <span className="title-span">Contact Us </span>
                <h2>Contact Us through this Form!!</h2>
                <div className="row input-fields">
                    <div className='row width-100 name-input'>
                        <input type="text" placeholder='First Name*' className='input1' />
                        <input type="text" placeholder='Last Name' className='input1' />
                    </div>
                    <input type="email" placeholder='E-Mail*' className='input2' />
                    <textarea cols="30" rows="10" placeholder='Type your Message'></textarea>
                    <span className='cur-pointer contactform-btn'>Submit</span>
                </div>
            </div>
        </div>
    )
}

export default ContactForm