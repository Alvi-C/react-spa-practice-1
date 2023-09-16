import { useEffect, useState } from "react"
import CourseCart from "./components/CourseCart"
import CourseList from "./components/CourseList"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  let [remainingCreditHour, setRemainingCreditHour] = useState(20)
  let [totalCreditHour, setTotalCreditHour] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    fetch('../public/fakeData.json')
			.then(res => res.json())
			.then(data => setCourses(data))
  },[])


  const handleSelectCourse = (course) => {

    const isExist = selectedCourse.find(item => item.id === course.id)

    if (isExist) {
      toast.error('The course is already selected', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
    } else if (remainingCreditHour - parseInt(course.credit) < 0) {
      toast.error('Not enough credit hour', {
				position: 'bottom-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
    }else if (totalCreditHour + parseInt(course.credit) > 20) {
      toast.error('Credit hour is full', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
    } else {
      setRemainingCreditHour(remainingCreditHour - parseInt(course.credit))
      setTotalCreditHour(totalCreditHour + parseInt(course.credit))
      setTotalPrice(totalPrice + course.price)
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
					<div className='grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8 mx-2'>
						<div className='lg:col-span-9'>
							<CourseList
								courses={courses}
								handleSelectCourse={handleSelectCourse}
							/>
							<ToastContainer />
						</div>
						<div className='lg:col-span-3'>
							<CourseCart
								selectedCourse={selectedCourse}
								remainingCreditHour={remainingCreditHour}
								totalCreditHour={totalCreditHour}
								totalPrice={totalPrice}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App

// Not enough credit hour
// Credit hour is full