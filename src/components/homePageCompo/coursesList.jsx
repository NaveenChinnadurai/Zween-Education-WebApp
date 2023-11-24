import '../../styles/compoStyles/homeStyles/coursesList.css'
import img from '../../assets/img1.png'
import List from '../../scripts/courseList'

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
                                    <span>{e.category}</span>
                                </div>
                                <h2>{e.title}</h2>
                                <div className="row course-div-2">
                                    <span>{e.lesson1} lessons</span>
                                    <span>{e.lesson2} lessons</span>
                                    <span>{e.ratings}</span>
                                </div>
                                <div className="row course-div-1">
                                    <span className='course-price'>${e.price} USD</span>
                                    <span>Buy Course</span>
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