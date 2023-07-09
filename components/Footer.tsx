import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/assets/logo-light.svg'

const Footer = () => {
	return (
		<footer className='bg-primary-dark px-4 py-9 flex items-center justify-between md:px-10 md:py-9 lg:px-40 lg:py-8'>
			<Image src={Logo} alt='Skilled' />
			<Link
				href={'#'}
				className='px-6 py-3 bg-secondary-gradient text-white rounded-full text-body-sm hover:opacity-50 lg:px-8 lg:py-4'>
				Get Started
			</Link>
		</footer>
	)
}
export default Footer
