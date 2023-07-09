import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='overflow-hidden scroll-smooth'>
			<Header />
			<Hero />
			<Courses />
			<Footer />
		</main>
	)
}
