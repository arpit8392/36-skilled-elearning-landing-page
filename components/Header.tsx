import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/assets/logo-dark.svg'

const Header = () => {
	return (
		<header className='bg-white p-4 flex items-center justify-between md:px-10 md:py-6 lg:px-40'>
			<Image src={Logo} alt='Skilled' />
			<Link
				href={'#'}
				className='px-6 py-3 bg-primary-dark text-white rounded-full text-body-sm hover:bg-secondary-2 lg:px-8 lg:py-4'>
				Get Started
			</Link>
		</header>
	)
}
export default Header
