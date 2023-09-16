

const CourseCard = () => {
    return (
			<div className='bg-white p-2 rounded-xl'>
				<img
					alt='Lava'
					src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					className='h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]'
				/>

				<div className='p-4'>
					<h3 className='text-lg font-medium text-gray-900'>
						Finding the Journey to Mordor
					</h3>
					<p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
						dolores, possimus pariatur animi temporibus nesciunt praesentium
						dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
						minus soluta, voluptates neque explicabo tempora nisi culpa eius
						atque dignissimos. Molestias explicabo corporis voluptatem?
					</p>
				</div>
				<div className="bottom-0">
					<div className='flex justify-between p-2'>
						<p className='text-gray-500'>Price: BDT 20000</p>
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
						<p className='text-gray-500'>Credit: 10 hr</p>
					</div>
                    <button className='px-2 py-1 w-full bg-blue-500 text-white my-2 rounded-lg'>Select</button>
				</div>
			</div>
		)
};

export default CourseCard;