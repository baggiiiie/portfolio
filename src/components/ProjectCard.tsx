import React, { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ProjectType } from "@/src/types";
import { motion } from "framer-motion";

type Props = {
	project: ProjectType;
};

function ProjectCard({ project }: Props) {
	return (
		<motion.div
			className="projectCardContainer"
			layoutId={`project-card-container-${project._id}`}
			animate={{ y: 1 }}
			transition={{ duration: 0.1 }}
		>
			<motion.div
				className="projectCardImgContainer"
				layoutId={`project-img-container-${project._id}`}
				transition={{ duration: 0.1 }}
			>
				<img
					src={`${project.logo}`}
					alt={`${project.slug}`}
					className="projectCardImg"
				/>
			</motion.div>
			<motion.div className="projectCardTextContainer">
				<h3 className="font-bold text-lg my-2 ">{project.name}</h3>
				<p className="font-light text-base">{project.description}</p>
				<div
					className="relative flex flex-col space-y-3
                    pt-4 min-w-[150px] text-center mx-auto 
                    "
				>
					<div
						className="transition-all ease-in-out duration-300
                     text-white/40  hover:text-white"
					>
						<a href={project.projectUrl}>
							<span className="inline pr-1">Have a look</span>
							<ArrowRightCircleIcon
								className="inline w-5"
								href={project.projectUrl}
							/>
						</a>
					</div>
					<div
						className="transition-all ease-in-out duration-300
                     text-white/40  hover:text-white"
					>
						<a href={project.githubUrl}>
							<span className="inline pr-1">GitHub</span>
							<ArrowRightCircleIcon
								className="inline w-5"
								href={project.githubUrl}
							/>
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ProjectCard;
