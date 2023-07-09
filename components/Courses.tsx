import { courses } from '@/data'
import Course from './Course'

const Courses = () => {
	return (
		<section className='px-4 pt-16 pb-20 bg-light-gradient md:px-10 md:pt-24 lg:px-40 lg:pb-36 lg:pt-28'>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 md:grid-flow-row-dense md:gap-x-4 md:gap-y-14 lg:gap-x-8 lg:gap-y-20'>
				<li className='px-7 py-6 bg-primary-gradient rounded-xl md:px-8 md:py-14 lg:px-8 lg:py-16'>
					<h2 className='text-white font-extrabold text-2xl max-w-sm md:text-[32px]/10 lg:max-w-xs'>
						Check out our most popular courses!
					</h2>
				</li>
				{courses.map((item) => (
					<li key={item.id}>
						<Course {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Courses
