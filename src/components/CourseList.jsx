/* eslint-disable react/prop-types */
import CourseCard from "./CourseCard";



const CourseList = ({ courses, handleSelectCourse }) => {

	return (
		<div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
			{courses.map(course => (
                <CourseCard
                    key={course.id}
                    course={course}
                    handleSelectCourse={handleSelectCourse}
                />
			))}
		</div>
	)
}

export default CourseList;