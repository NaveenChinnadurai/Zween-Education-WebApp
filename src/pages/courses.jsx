import CourseCard from '../components/homePageCompo/coursesCard';
import PageHeader from '../components/pageHeader';
import '../styles/pageStyles/courses.css'
import List from '../scripts/courseList'
import img from '../assets/img1.png'
function Courses() {
    window.scrollTo(0,0)
    return (
        <div className="courses-div">
            <PageHeader page="Courses"/>
            <div className="align-centre page-head">
                <span className="title-span">All Courses</span>
                <h1 className='pad-20'>The Leading Global Marketplace for Learning and Instruction</h1>
            </div>
            <div className="row course-page-list-div">
                {
                    List.map((e) => {
                        return (
                            <CourseCard
                                className='course-page-card'
                                id={e.id}
                                image={img}
                                date={e.date}
                                cat={e.category}
                                title={e.title}
                                lesson={e.lesson1}
                                lecture={e.lesson2}
                                rate={e.ratings}
                                price={e.price}
                            />
                        )
                    })
                }
            </div>
        </div> 
    )
}

export default Courses;