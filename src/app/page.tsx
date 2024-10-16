import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";

import { Analytics } from '@vercel/analytics/react';

import { getJobs, getProfile, getProjects } from "@/src/sanity/sanity.query";
import { JobType, ProfileType, ProjectType } from "@/src/types";

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
			className="
			bg-[rgb(36,36,36)] text-white h-screen
			snap-y  
			overflow-y-scroll overflow-x-hidden
			z-0
			scrollbar-thin scrollbar-track-gray-400/20
			scrollbar-thumb-slate-300
            scroll-smooth
    	"
		>
			<Header profile={profile} />

			<section id="hero" className="individualPage">
				<Hero profile={profile} />
			</section>

			<section id="about" className="individualPage">
				<About profile={profile} />
			</section>

			{/* <section id="experiences" className="individualPage">
				<Experience jobs={jobs} />
			</section> */}

			{/* <section id='skills' className='individualPage'>
				<Skills />
			</section> */}

			{/* <section id="projects" className="individualPage">
				<Projects projects={projects} />
			</section> */}

			<section id="contact" className="individualPage">
				<Contact profile={profile} />
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
			<Analytics />

		</main>
	);
};

export default Home;
