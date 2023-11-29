import PageHeader from '../components/pageHeader'
import '../styles/pageStyles/contact.css'
import contactList from '../scripts/contactList'
import ContactCard from '../components/homePageCompo/contactCard'
import ContactForm from '../components/homePageCompo/contactForm'
function ContactPage() {
    window.scrollTo(0,0)
    return (
        <div className="contact-page" data-aos="fade-up">
            <PageHeader page='Contact Us' />
            <div className="row contact-page-subdiv">
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
                </div>
                <div className="row contact-subdiv-2" data-aos="zoom-in-left">
                    <ContactForm id='contact-page-form'/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage