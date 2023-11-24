import '../../styles/compoStyles/homeStyles/about.css'
import aboutImg from '../../assets/abt-img.jpg'
import { FcReadingEbook as Book} from "react-icons/fc";
import { TbCertificate as Certificate } from "react-icons/tb";

function About() {

    const aboutCard = [
        {
            id: 1,
            icon:<Book/>,
            title: 'Creat Account',
            para: 'e-learning eliminates the need for classroom settings, which can be expensive to main tain.',        },
        {
            id: 2,
            icon:<Certificate/>,
            title: 'Get Certification',
            para: 'e-learning can be accessed from anywhere with an internet connection, making it ideal for learners.',
        }
    ]
    return (
        <div className='row  about-div'>
            <div className=" about-txt">
                <span className='title-span'>About Us</span>
                <h1>About our next level e-Course.</h1>
                <p>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
                <div className="aboutCard-div">
                    {
                        aboutCard.map((e) => {
                            return (
                                <div className='about-card' key={e.id}>
                                    <div className='row'>
                                        <span>{e.icon}</span>
                                        <h2>{e.title}</h2>
                                    </div>
                                    <p>{e.para}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="abt-img-div">
                <img src={aboutImg} alt="About Image" className='width-100'/>
            </div>
        </div>
    )
}

export default About;