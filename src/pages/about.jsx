import Counter from '../components/aboutPageCompo/counter';
import AboutCompo from '../components/homePageCompo/aboutCompo';
import '../styles/pageStyles/about.css'
import img from '../assets/aboutPage-img/abt-banner-img.png'
import img1 from '../assets/aboutPage-img/instructorImg/instructor1.jpg'
import img2 from '../assets/aboutPage-img/instructorImg/instructor2.jpg'
import img3 from '../assets/aboutPage-img/instructorImg/instructor3.jpg'
import img4 from '../assets/aboutPage-img/instructorImg/instructor4.jpg'
import scholarImg from '../assets/aboutPage-img/scholarship-img.jpg';
import { FaRegStar as Star } from "react-icons/fa";


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
        <div className="abt-page">
            <h1 className="align-centre pad-20">Home // <span>About</span></h1>
            <div className="pad-20 align-centre page-head">
                <span className="title-span">Start to Success</span>
                <h1 className='pad-20'>The Leading Global Marketplace for Learning and Instruction</h1>
            </div>
            <Counter id='count-div' />
            <div className="row abt-banner-img">
                <img src={img} alt="Banner-image" />
            </div>
            <AboutCompo />
            <div className="pad-20 align-centre experts-div">
                <span className="title-span">Our Instructor</span>
                <h1 className='pad-20'>Expert Instructor</h1>
                <div className="row instructor-div">
                    {
                        instructorInfo.map((e) => {
                            return (
                                <div className="instructor-card" key={e.id}>
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
            <div className="row pad-20 scholarship-div">
                <div className="row scholarship-img">
                    <img src={scholarImg} alt="Scholarship Image" />
                </div>
                <div className="col pad-20 scholar-div-txt">
                    <span className="title-span">Financial Aid</span>
                    <h1 className='width-100 align-left'>Our Scholarship Programs.</h1>
                    <p className='width-100 align-left'>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
                    <span className="width-fit btn scholar-btn">Financial Aid</span>
                </div>
            </div>
        </div>
    )
}

export default About;