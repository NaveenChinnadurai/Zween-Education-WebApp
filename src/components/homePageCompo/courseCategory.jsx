import '../../styles/compoStyles/homeStyles/coursecategory.css'
import { SiBlueprint as Print} from "react-icons/si";
import { SiVorondesign as Design} from "react-icons/si";
import { SiPeakdesign as UiUx} from "react-icons/si";
import { SiBrandfolder as Brand } from "react-icons/si";
function CourseCategory() {

    const courseList=[
        {
            id:1,
            icon:<Print/>,
            title:'Printing',
            para:'Printing is the process of re-producing text and images using ink or toner.'
        },
        {
            id:2,
            icon:<Design/>,
            title:'Design',
            para:'Design is the process of creating something with a specific purpose in mind.'
        },
        {
            id:3,
            icon:<UiUx/>,
            title:'UI / UX',
            para:'UI and UX are two related but distinct concepts in the field of design websites.'
        },
        {
            id:4,
            icon:<Brand/>,
            title:'Branding',
            para:'Branding refers to the process of creating a unique name, design, symbol.'
        },
    ]
    return(
        <div className="height-fit coursecategory-div">
            <div className="category-title">
                <span className="title-span">All courses categories</span>
                <h1>Courses Categories</h1>
            </div>
            <div className="row height-100 courseCard">
                {
                    courseList.map((e)=>{
                        return(
                            <div className="height-100 border-radius-5 align-centre cur-pointer course-Card" key={e.id} data-aos="zoom-in-left">
                                <span>{e.icon}</span>
                                <h1>{e.title}</h1>
                                <p>{e.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseCategory;