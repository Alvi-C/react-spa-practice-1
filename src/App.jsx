import { useEffect, useState } from "react"
import CourseCart from "./components/CourseCart"
import CourseList from "./components/CourseList"


function App() {

  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])

  useEffect(() => {
    fetch('../public/fakeData.json')
			.then(res => res.json())
			.then(data => setCourses(data))
  },[])

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find(item => item.id == course.id)

    if (isExist) {
      return alert('Course already selected')
    } else {
      setSelectedCourse([...selectedCourse, course])
    }
  }

  return (
		<>
			<div className='bg-slate-100'>
				<h1 className='text-xl font-bold text-center py-8'>
					Course Registration
				</h1>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8'>
						<div className='lg:col-span-9'>
							<CourseList
								courses={courses}
								handleSelectCourse={handleSelectCourse}
							/>
						</div>
						<div className='lg:col-span-3'>
							<CourseCart selectedCourse={selectedCourse} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
