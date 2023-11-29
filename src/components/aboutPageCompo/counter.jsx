import '../../styles/compoStyles/aboutStyles/counter.css'
import img1 from '../../assets/aboutPage-img/about-img1.svg'
import img2 from '../../assets/aboutPage-img/abt-img2.svg'
import img3 from '../../assets/aboutPage-img/abt-img3.svg'
import img4 from '../../assets/aboutPage-img/abt-img4.svg'
function Counter(props) {
    const counterList=[
        {
            id:1,
            img:img1,
            count:'25+',
            txt:'Years of eLearning Education Experience'
        },
        {
            id:2,
            img:img2,
            count:'36K+',
            txt:'Students Enrolled in Zween Courses'
        },
        {
            id:3,
            img:img3,
            count:'170+',
            txt:"Experienced Teacher's service."
        },
        {
            id:4,
            img:img4,
            count:'160+',
            txt:'Innovative Foreign eLearning Courses'
        },
    ]
    return(
        <div className="row counter-div" id={props.id}>
            {
                counterList.map((e)=>{
                    return(
                        <div className="pad-20 align-centre counter-card" key={e.id} data-aos="zoom-in-right">
                            <img src={e.img} alt="" />
                            <h1>{e.count}</h1>
                            <p>{e.txt}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Counter