import Image from 'next/image'
import Link from 'next/link'

const Course = ({ title, details, link, icon }: Course) => {
	return (
		<article className='relative px-7 pt-14 pb-8 bg-white shadow rounded-xl flex flex-col gap-6 md:px-8 md:pt-16 md:pb-10 h-full justify-between'>
			<div className='absolute -top-7'>
				<Image
					src={`/assets/${icon}`}
					alt={title}
					width={56}
					height={56}
					className=' w-auto object-contain'
				/>
			</div>

			<div className='flex flex-col gap-4 lg:gap-6'>
				<h3 className='text-xl font-extrabold text-primary-dark lg:text-2xl'>{title}</h3>
				<p className='text-secondary-1 text-base/8 font-medium lg:text-lg'>{details}</p>
			</div>
			<Link
				prefetch={false}
				href={link}
				className='text-accent-1 font-bold text-lg hover:text-accent-2'>
				Get Started
			</Link>
		</article>
	)
}
export default Course
