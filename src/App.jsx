import CourseCart from "./components/CourseCart"
import CourseList from "./components/CourseList"


function App() {


  return (
		<>
			<div className='bg-slate-100 h-screen'>
				<h1 className='text-xl font-bold text-center py-8'>
					Course Registration
				</h1>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8'>
            <div className='lg:col-span-9'>
              <CourseList/>
            </div>
            <div className='rounded-lg bg-white lg:col-span-3'>
              <CourseCart/>
            </div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
