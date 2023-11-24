import '../../styles/compoStyles/about.css'
import aboutImg from '../../assets/about-img.png'

function About() {

    const aboutCard = [
        {
            id: 1,
            title: 'Creat Account',
            para: 'e-learning eliminates the need for classroom settings, which can be expensive to main tain.',
            icon: 10,
        },
        {
            id: 2,
            title: 'Get Certification',
            para: 'e-learning can be accessed from anywhere with an internet connection, making it ideal for learners.',
            icon: 10,
        }
    ]
    return (
        <div className='row about-div'>
            <div className="about-txt">
                <span className='title-span'>About Us</span>
                <h1>About our next level e-Course.</h1>
                <p>e-learning allows learners to access course materials and complete assignments at their own pace and on their own schedule. This is particularly beneficial for adult learners.</p>
                <div className="aboutCard-div">
                    {
                        aboutCard.map((e) => {
                            return (
                                <div className='about-card' key={e.id}>
                                    <div className='row'>
                                        <span>H</span>
                                        <h2>{e.title}</h2>
                                    </div>
                                    <p>{e.para}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="img-div">
                <img src={aboutImg} alt="About Image" />
            </div>
        </div>
    )
}

export default About;