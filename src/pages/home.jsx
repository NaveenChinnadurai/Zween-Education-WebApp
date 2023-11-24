import '../styles/pageStyles/home.css'
import bannerImg from '../assets/banner-img.png'
import About from "../components/homePageCompo/about";
import CourseCategory from "../components/homePageCompo/courseCategory";
import CourseList from "../components/homePageCompo/coursesList";
import { FaLocationDot as Location } from "react-icons/fa6";
import { FaPhone as Phone } from "react-icons/fa";
import { MdOutlineEmail as Email } from "react-icons/md";

function Home() {

    const contactList = [
        {
            id: 1,
            icon: <Location />,
            title: 'Address',
            para: '1234 Main Street Bronx, NY 10456  Nearest of New York City.',
            para1: ''
        },
        {
            id: 2,
            icon: <Phone />,
            title: 'Phone',
            para: 'Head Office +880 1234 5555',
            para1: 'Branch office +880 6665 4321'
        },
        {
            id: 3,
            icon: <Email />,
            title: 'E-mail',
            para: 'demo@example.com',
            para1: 'support@example.com'
        }
    ]
    return (
        <div>
            <div className="home-banner-div">
                <div className="row banner-div">
                    <div className="col banner-txt">
                        <h2>The best online learning platform.</h2>
                        <h1>Raise the Bar on Your e-Learning Experience.</h1>
                    </div>
                    <div className="row img-div">
                        <img src={bannerImg} alt="Banner Image" />
                    </div>
                </div>
                <About />
            </div>
            <CourseCategory />
            <div className="col course-display">
                <span className="title-span">Best Courses</span>
                <h1>Our Courses</h1>
                <div className="courselist-div">
                    <CourseList />
                </div>
            </div>
            <div className=" contact-div">
                <div className="col course-display contact-title-div">
                    <span className="title-span">Contact Us</span>
                    <h1>Connect with us. We are weating for you message.</h1>
                    <div className="row contact-details">
                        {
                            contactList.map((e) => {
                                return (
                                    <div className="contact-card" key={e.id}>
                                        <div className="align-centre contact-card-div ">
                                            <span>{e.icon}</span>
                                            <h2>{e.title}</h2>
                                        </div>
                                        <p className="align-centre">{e.para}<br />{e.para1}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;