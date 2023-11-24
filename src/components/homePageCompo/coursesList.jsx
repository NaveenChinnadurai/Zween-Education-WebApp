import '../../styles/compoStyles/homeStyles/coursesList.css'
import img from '../../assets/img1.png'
import List from '../../scripts/courseList'
import { MdOutlinePlayLesson as Lesson } from "react-icons/md";
import { BsPersonVcard as Person} from "react-icons/bs";
import { FaRegStar as Star } from "react-icons/fa";
import { FaCartShopping as Shop } from "react-icons/fa6";

function CourseList() {

    return (
        <div className="row courses-list">
            {
                List.map((e) => {
                    return (
                        <div className="course-card-list" key={e.id}>
                            <div className="row course-img-div">
                                <img src={img} alt="Course-Image" />
                            </div>
                            <div className="course-subdiv">
                                <div className="row course-div-1">
                                    <span>{e.date}</span>
                                    <span className='hot-span-course'>{e.category}</span>
                                </div>
                                <h2>{e.title}</h2>
                                <div className="row course-div-2">
                                    <span className='row'><Lesson className='course-icon'/>{e.lesson1} lessons</span>
                                    <span className='row'><Person className='course-icon'/>{e.lesson2} Lectures</span>
                                    <span className='row'><Star className='course-icon'/>{e.ratings}</span>
                                </div>
                                <div className="row course-div-1">
                                    <span className='course-price'>${e.price} USD</span>
                                    <span><Shop className='course-icon'/>Buy Course</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseList;