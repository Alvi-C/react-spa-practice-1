import CourseCard from "./CourseCard";


const CourseList = () => {
    return (
			<div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
		)
};

export default CourseList;