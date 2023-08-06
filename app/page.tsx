import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
	return (
		<main
			className='
			bg-[rgb(36,36,36)] text-white h-screen
			snap-y snap-mandatory
			overflow-y-scroll overflow-x-hidden
			z-0
			scrollbar scrollbar-track-gray-400/20
			scrollbar-thumb-slate-300
    	'>

			<Header />

			<section id='hero' className='snap-start pt-10'>
				<Hero />
			</section>

			<section id='about' className='snap-center'>
				<About />
			</section>

			<section id='experiences' className='snap-center'>
				<Experience />
			</section>

			<section id='skills' className='snap-start'>
				<Skills />
			</section>

			<section id='projects' className='snap-start'>
				<Projects />
			</section>

			<section id='contact' className='snap-start'>
				<Contact />
			</section>

			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<img
							className='h-5 w-5 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src="sticker.png" alt="Footer" />
					</div>
				</footer>
			</Link>
		</main>
	);
}
