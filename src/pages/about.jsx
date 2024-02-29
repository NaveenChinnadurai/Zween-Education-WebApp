import Counter from '../components/aboutPageCompo/counter';
import AboutCompo from '../components/aboutPageCompo/aboutCompo';
import '../styles/pageStyles/about.css'
import img from '../assets/aboutPage-img/abt-banner-img.png'
import img1 from '../assets/aboutPage-img/instructorImg/instructor1.jpg'
import img2 from '../assets/aboutPage-img/instructorImg/instructor2.jpg'
import img3 from '../assets/aboutPage-img/instructorImg/instructor3.jpg'
import img4 from '../assets/aboutPage-img/instructorImg/instructor4.jpg'
import scholarImg from '../assets/aboutPage-img/scholarship-img.jpg';
import { FaRegStar as Star } from "react-icons/fa";
import PageHeader from '../components/pageHeader';
import { Link } from 'react-router-dom';


function About() {
    const instructorInfo = [
        {
            id: 1,
            img: img1,
            iname: 'Jerrery Way',
            ratings: '4.3'
        },
        {
            id: 2,
            img: img2,
            iname: 'Justin Jackson',
            ratings: '4.6'
        },
        {
            id: 3,
            img: img3,
            iname: 'Rob Percival',
            ratings: '4.9'
        },
        {
            id: 4,
            img: img4,
            iname: 'Andrew Ng',
            ratings: '4.0'
        }
    ]
    return (
        <div className="abt-page" data-aos="fade-up">
            <PageHeader page="About" />
            <div className="pad-20 align-centre page-head" >
                <span className="title-span">Start to Success</span>
                <h1 className='pad-20'>The Leading Global Marketplace for Learning and Instruction</h1>
            </div>
            <div className="row abt-banner-img" data-aos="zoom-in-up">
                <img src={img} alt="Banner-image" />
            </div>
            <Counter id='count-div' />
            <AboutCompo />
            <div className="pad-20 align-centre experts-div">
                <span className="title-span">Our Instructor</span>
                <h1 className='pad-20'>Expert Instructor</h1>
                <div className="row instructor-div">
                    {
                        instructorInfo.map((e) => {
                            return (
                                <div className="instructor-card" key={e.id} data-aos="flip-left">
                                    <img src={e.img} alt={e.iname} />
                                    <p className="row align-centre instructor-rate">{e.ratings} <span><Star /></span>(Rating)</p>
                                    <h2>{e.iname}</h2>
                                    <p>MSC, Instructor</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="about-quote">
                <h1>"</h1>
                <h2>Empower your mind, shop the knowledge! Unleash the potential of learning with our curated collection of wisdom. Transform your curiosity into expertise, one click at a time. Welcome to a smarter way to shop, where education is the ultimate currency!</h2>
            </div>
            <div className="row pad-20 scholarship-div">
                <div className="row scholarship-img" data-aos="fade-down-right">
                    <img src={scholarImg} alt="Scholarship Image" />
                </div>
                <div className="col pad-20 scholar-div-txt" data-aos="fade-down-left">
                    <span className="title-span">Financial Aid</span>
                    <h1 className='width-100 align-left'>Our Scholarship Programs.</h1>
                    <p className='width-100 align-left'>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
                    <span className="width-fit btn scholar-btn">Financial Aid</span>
                </div>
            </div>
            <div className="row about-login-div">
                <div className='col'>
                    <h1>Create an account to get started with our platform</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iste perspiciatis rerum dignissimos animi quibusdam cumque adipisci quas amet voluptate.</p>
                </div>
                <Link to="/register" className="btn">Signup Now</Link>
            </div>
        </div>
    )
}

export default About;