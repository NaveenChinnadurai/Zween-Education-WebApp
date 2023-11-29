import '../../styles/compoStyles/homeStyles/contactform.css'

function ContactForm(props) {
    return (
        <div className="contactform" id={props.id} data-aos={props.animate}>
            <span className="title-span">Contact Us </span>
            <h2>Feel free to get in touch Contact Me.</h2>
            <p>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule.</p>
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
    )
}

export default ContactForm