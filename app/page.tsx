import Courses from '@/components/Courses'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='overflow-hidden'>
			<Header />
			<Hero />
			<Courses />
		</main>
	)
}
