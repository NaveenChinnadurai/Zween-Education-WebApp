import CourseCard from '../components/homePageCompo/coursesCard';
import PageHeader from '../components/pageHeader';
import '../styles/pageStyles/courses.css'
import List from '../scripts/courseList'
function Courses() {
    window.scrollTo(0,0)
    return (
        <div className="courses-div" data-aos="fade-up">
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
                                image={e.img}
                                date={e.date}
                                cat={e.category}
                                title={e.title}
                                lesson={e.lesson1}
                                lecture={e.lesson2}
                                rate={e.ratings}
                                price={e.price}
                                animation="zoom-out-up"
                            />
                        )
                    })
                }
            </div>
        </div> 
    )
}

export default Courses;