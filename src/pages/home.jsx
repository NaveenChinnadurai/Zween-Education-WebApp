import '../styles/pageStyles/home.css'
import bannerImg from '../assets/banner-img.png'
import About from "../components/aboutPageCompo/aboutCompo";
import CourseCategory from "../components/homePageCompo/courseCategory";
import CourseCard from "../components/homePageCompo/coursesCard";
import ContactForm from '../components/contactPageCompo/contactForm';
import LogoDisplay from '../components/homePageCompo/logosList';
import img from '../assets/img1.png'
import List from '../scripts/courseList'
import img1 from '../assets/contact-img.png'
import ContactCard from '../components/contactPageCompo/contactCard';
import contactList from '../scripts/contactList';

function Home() {
    window.scrollTo(0,0)
    return (
        <div>
            <div className="home-banner-div">
                <div className="row width-100 space-btwn banner-div">
                    <div className="col height-100 banner-txt animate__animated animate__fadeInLeftBig">
                        <h2>The best online learning platform.</h2>
                        <h1>Raise the Bar on Your e-Learning Experience.</h1>
                    </div>
                    <div className="row img-div animate__animated animate__fadeInRightBig">
                        <img src={bannerImg} alt="Banner Image" />
                    </div>
                </div>
                <div className="home-logo-display">
                    <LogoDisplay />
                </div>
                <About />
            </div>
            <CourseCategory />
            <div className="col width-100 course-display">
                <span className="title-span">Best Courses</span>
                <h1>Our Courses</h1>
                <div className="row width-100 courselist-div">
                    <div className="row course-list">
                        {
                            List.map((e) => {
                                return (
                                    <CourseCard
                                        id={e.id}
                                        image={img}
                                        date={e.date}
                                        cat={e.category}
                                        title={e.title}
                                        lesson={e.lesson1}
                                        lecture={e.lesson2}
                                        rate={e.ratings}
                                        price={e.price}
                                        animation="zoom-in-right"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className=" contact-div" data-aos="fade-up">
                <div className="col course-display contact-title-div">
                    <span className="title-span">Contact Us</span>
                    <h1>Connect with us. We are waiting for you message.</h1>
                    <div className="row width-100 contact-details">
                        {
                            contactList.map((e) => {
                                return (
                                    <ContactCard
                                        id='contact-card-div'
                                        icon={e.icon}
                                        para={e.para}
                                        para1={e.para1}
                                        title={e.title}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row width-100 contactform-div">
                <div className="height-100 contactform-img" data-aos="zoom-in-left">
                    <img src={img1} alt="Contact Image " className='height-100' />
                </div>
                <ContactForm animate="zoom-in-right"/>
            </div>
        </div>
    )
}

export default Home;