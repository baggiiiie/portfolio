import { motion } from "framer-motion";
import { JobType } from "@/src/types";
import { buildLegacyTheme } from "sanity";
import { buildStaticPaths } from "next/dist/build/utils";

type Props = {
	job: JobType;
};

function ExperienceCard({ job }: Props) {
	const bulletPoints: string[] = job.description.split(/\r?\n/);
	return (
		<article className="group experienceCardContainer">
			<div className="experienceCard">
				<div className="experienceCardFront">
					<motion.img
						initial={{ y: -50, opacity: 0 }}
						transition={{ duration: 1.5 }}
						// animate={{ opacity: 1, y: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						// viewport={{ once: true }}
						className="
                        mx-auto
                        object-cover object-center
                        justify-center"
						src={`${job.logo}`}
						alt={`${job.name}`}
					/>
					<h4 className="font-bold text-gray-300 text-lg sm:text-xl md:text-2xl">
						{job.jobTitle}
					</h4>
					<p className="font-light text-gray-300 text-base sm:text-lg md:text-xl mt-2 ">
						{job.name}
					</p>
					<p className="uppercase py-5 text-gray-400 text-sm md:text-base lg:text-lg">
						Started {job.startDate.toString()} <br />
						Ended {job.endDate.toString()}
					</p>
				</div>
				<div className="experienceCardBack">
					{/* <div className='space-x-2 my-2'>
                        <img
                            className='h-10 w-10 rounded-full'
                            src="sticker.png" alt="Skills Picture"
                        />
                    </div> */}
					<ul className="list-disc space-y-1 ml-5 max-[400px]:text-xs leading-5 text-sm md:text-base">
						{bulletPoints.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
}

export default ExperienceCard;
