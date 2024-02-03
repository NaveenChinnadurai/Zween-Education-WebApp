import PageHeader from '../components/pageHeader'
import '../styles/pageStyles/contact.css'
import contactList from '../scripts/contactList'
import ContactCard from '../components/contactPageCompo/contactCard'
import ContactForm from '../components/contactPageCompo/contactForm'
import Subcribe from '../components/contactPageCompo/subcribe'
import IconDisplay from '../components/aboutPageCompo/iconDisplay';
function ContactPage() {
    window.scrollTo(0, 0)
    return (
        <div className="contact-page" data-aos="fade-up">
            <PageHeader page='Contact Us' />
            <div className="contact-page-subdiv">
                <div className="col contact-subdiv-1">
                    {
                        contactList.map((e) => {
                            return (
                                <ContactCard
                                    id='contact-page-card-div'
                                    icon={e.icon}
                                    para={e.para}
                                    para1={e.para1}
                                    title={e.title}
                                    animation="zoom-in-right"
                                />
                            )
                        })
                    }
                    <Subcribe id="contact-subcribe" />
                </div>
                <div className="col contact-subdiv-2" data-aos="zoom-in-left">
                    <div className="contact-text-div">
                        <div className="contact-page-txt">
                            <h2>Contact Us</h2>
                            <p>Welcome to Zween education! We're here to assist you in any way we can. Whether you have questions about our courses, need support, or want to provide feedback, feel free to reach out to us. Your education journey is important to us, and we're dedicated to making your experience with us as smooth as possible.</p>
                            <h2>Office Hours:</h2>
                            <p>Our team is available to assist you during the following hours:</p>
                            <p>Monday to Friday: 9:00 AM - 5:00 PM (IST)</p>
                        </div>
                        <div className="contact-page-txt">
                            <h2>Connect With Us:</h2>
                            <p>Follow us on social media for the latest updates, announcements, and educational content.</p>
                            <IconDisplay id='contact-icon' />
                        </div>
                    </div>
                    <ContactForm id='contact-page-form' />
                </div>
            </div>
            <div className="col contact-page-end about-login-div">
                <p>Thank you for considering Zween Educations for your learning journey. Our team is here to assist you with any inquiries you may have. Whether you're a prospective student, a current learner, or a potential partner, we value your connection.</p>
                <p>We look forward to hearing from you and being a part of your educational journey!</p>
            </div>
        </div>
    )
}

export default ContactPage