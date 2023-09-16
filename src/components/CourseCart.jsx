/* eslint-disable react/prop-types */

const CourseCart = ({ selectedCourse, remainingCreditHour, totalCreditHour, totalPrice }) => {

    return (
			<div className='p-3 bg-white rounded-xl'>
				<h3 className='text-base font-bold text-blue-600 mb-4'>
					Credit Hour Remaining {remainingCreditHour} hr
				</h3>
				<hr className='my-4' />
				<div>
					<h3 className='text-base font-bold'>Course Name</h3>
				</div>
				{selectedCourse.map(course => (
						<li
							key={course.id}
							className='text-gray-500 my-2 list-decimal list-inside'
						>
							{course.name}
						</li>
				))}
				<hr className='my-4' />
				<h3 className='text-base font-medium'>Total Credit Hour: {totalCreditHour}</h3>
				<hr className='my-4' />
				<h3 className='text-base font-medium mb-2'>Total Price: {totalPrice} usd</h3>
			</div>
		)
};

export default CourseCart;