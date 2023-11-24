import '../../styles/compoStyles/homeStyles/contactform.css'

function ContactForm() {
    return (
        <div className="row width-100 contactform-div">
            <div className="height-100 contactform-img"></div>
            <div className="height-100 contactform">
                <span className="title-span">Contact Us </span>
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