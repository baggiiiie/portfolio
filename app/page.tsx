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
			bg-[rgb(36,36,36)] 2text-white h-screen
			snap-y  
			overflow-y-scroll overflow-x-hidden
			z-0
			scrollbar scrollbar-track-gray-400/20
			scrollbar-thumb-slate-300
    	'>

			<Header />

			<section id='hero' className='individualPage'>
				<Hero />
			</section>

			<section id='about' className='individualPage'>
				<About />
			</section>

			<section id='experiences' className='individualPage'>
				<Experience />
			</section>

			{/* <section id='skills' className='individualPage'>
				<Skills />
			</section> */}

			<section id='projects' className='individualPage'>
				<Projects />
			</section>

			<section id='contact' className='individualPage'>
				<Contact />
			</section>

			{/* <Link href='#hero'>
				<footer className='sticky bottom-5 cursor-pointer'>
					<div className='flex items-center justify-center sm:justify-end'>
						<img
							className='h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src="sticker.png" alt="Footer" />
					</div>
				</footer>
			</Link> */}
		</main>
	);
}
