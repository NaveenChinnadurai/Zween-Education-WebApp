import '../../styles/compoStyles/homeStyles/coursesList.css'
import { MdOutlinePlayLesson as Lesson } from "react-icons/md";
import { BsPersonVcard as Person } from "react-icons/bs";
import { FaRegStar as Star } from "react-icons/fa";
import { FaCartShopping as Shop } from "react-icons/fa6";

function CourseCard(props) {
    return (
        <div className="course-card-list" key={props.id} data-aos={props.animation}>
            <div className="row course-img-div">
                <img src={props.image} alt="Course-Image" />
            </div>
            <div className="course-subdiv">
                <div className="row course-div-1">
                    <span>{props.date}</span>
                    <span className='hot-span-course'>{props.cat}</span>
                </div>
                <h2>{props.title}</h2>
                <div className="row course-div-2">
                    <span className='row'><Lesson className='course-icon' />{props.lesson} lessons</span>
                    <span className='row'><Person className='course-icon' />{props.lecture} Lectures</span>
                    <span className='row'><Star className='course-icon' />{props.rate}</span>
                </div>
                <div className="row course-div-1">
                    <span className='course-price'>${props.price} USD</span>
                    <span><Shop className='course-icon' />Buy Course</span>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;