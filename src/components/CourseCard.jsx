/* eslint-disable react/prop-types */


const CourseCard = ({ course, handleSelectCourse }) => {
	const { image, name, description, price, credit } = course

	return (
		<div className='bg-white p-2 rounded-xl'>
			<img alt='' src={image} className='w-full' />

			<div className='p-4'>
				<h3 className='text-lg font-medium text-gray-900'>{name}</h3>
				<p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
					{description}
				</p>
			</div>
			<div className=''>
				<div className='flex justify-between p-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							fill='currentColor'
							d='M12 20.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.76.76 0 0 1-.75.75Z'
						/>
						<path
							fill='currentColor'
							d='M13.5 18.75H7a.75.75 0 0 1 0-1.5h6.5A2.54 2.54 0 0 0 16.25 15a2.54 2.54 0 0 0-2.75-2.25h-3A4 4 0 0 1 6.25 9a4 4 0 0 1 4.25-3.75H16a.75.75 0 0 1 0 1.5h-5.5A2.54 2.54 0 0 0 7.75 9a2.54 2.54 0 0 0 2.75 2.25h3A4 4 0 0 1 17.75 15a4 4 0 0 1-4.25 3.75Z'
						/>
					</svg>
					<p className='text-gray-500'>Price: {price}</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.5'
							d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
						/>
					</svg>
					<p className='text-gray-500'>Credit: {credit}</p>
				</div>
				<button
					onClick={() => handleSelectCourse(course)}
					className='px-2 py-1 w-full bg-blue-500 text-white my-2 rounded-lg'
				>
					Select
				</button>
			</div>
		</div>
	)
}

export default CourseCard;