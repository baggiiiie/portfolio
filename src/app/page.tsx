import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Experience from '@/src/components/Experience';
import Projects from '@/src/components/Projects';
import Contact from '@/src/components/Contact';

import { getJobs, getProfile, getProjects } from '@/src/sanity/sanity.query';
import { JobType, ProfileType, ProjectType } from '@/src/types';
import { GetStaticProps } from 'next';

type Props = {
    // profiles: ProfileType[];
    // projects: ProjectType[];
    // jobs: JobType[];
};

// const Home = async ({ profiles, projects, jobs }: Props) => {
const Home = async ({}: Props) => {
    const profiles: ProfileType[] = await getProfile();
    const jobs: JobType[] = await getJobs();
    const projects: ProjectType[] = await getProjects();
    const profile: ProfileType = profiles[0];

    return (
        <main
            className='
			bg-[rgb(36,36,36)] text-white h-screen
			snap-y  
			overflow-y-scroll overflow-x-hidden
			z-0
			scrollbar scrollbar-track-gray-400/20
			scrollbar-thumb-slate-300
            scroll-smooth
    	'>

            <Header profile={profile} />

            <section id='hero' className='individualPage'>
                <Hero profile={profile} />
            </section>

            <section id='about' className='individualPage'>
                <About profile={profile} />
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

// export async function getStaticProps() {
//     const profiles = await getProfile();
//     const jobs = await getJobs();
//     const projects = await getProjects();

//     return {
//         props: {
//             profiles,
//             jobs,
//             projects,
//         },

//         revalidate: 100
//     };
// };
