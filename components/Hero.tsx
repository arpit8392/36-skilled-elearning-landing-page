import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='md:relative px-4 pt-10 md:pl-10 lg:pl-40 flex flex-col gap-12 md:flex-row md:gap-0 md:py-24 lg:py-40'>
			<div className='flex flex-col gap-7 lg:gap-8 flex-1'>
				<h1 className='text-primary-dark font-extrabold text-[40px] leading-tight max-w-sm lg:text-[56px] lg:max-w-lg'>
					Maximize skill, minimize budget
				</h1>
				<div className='flex flex-col gap-6 items-start lg:gap-10'>
					<p className='text-secondary-1 text-base/7 font-medium lg:text-lg max-w-sm lg:max-w-md'>
						Our modern courses across a range of in-demand skills will give you
						the knowledge you need to live the life you want.
					</p>
					<Link
						href={'#'}
						prefetch={false}
						className='text-white bg-primary-gradient py-4 px-10 rounded-full hover:bg-primary-hover-gradient lg:text-lg font-bold'>
						Get Started
					</Link>
				</div>
			</div>
			<div className='md:absolute -top-48 -right-72'>
				{/* Hero Image */}
				<Image
					src={'/assets/image-hero-mobile@2x.webp'}
					alt='Hero Image'
					width={327}
					height={301}
					priority
					className='block w-auto md:hidden object-contain'
				/>
				<Image
					src={'/assets/image-hero-tablet@2x.webp'}
					alt='Hero Image'
					width={640}
					height={640}
					priority
					className='hidden md:block w-auto lg:hidden object-contain'
				/>
				<Image
					src={'/assets/image-hero-desktop@2x.webp'}
					alt='Hero Image'
					width={990}
					height={937}
					priority
					className='hidden lg:block w-auto object-contain'
				/>
			</div>
		</section>
	)
}
export default Hero
