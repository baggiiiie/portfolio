import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import { getJobs, getProfile, getProjects } from '@/sanity/sanity.query';
import { JobType, ProfileType, ProjectType } from '@/types';

type Props = {};

const Home = async ({}: Props) => {
    const profile: ProfileType = await getProfile();
    const jobs: JobType[] = await getJobs();
    const projects: ProjectType[] = await getProjects();

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
                <Experience jobs={jobs} />
            </section>

            {/* <section id='skills' className='individualPage'>
				<Skills />
			</section> */}

            <section id='projects' className='individualPage'>
                <Projects projects={projects} />
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
};

export default Home;