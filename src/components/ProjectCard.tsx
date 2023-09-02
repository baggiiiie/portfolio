import React, { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ProjectType } from "@/src/types";
import { motion } from "framer-motion";

type Props = {
	project: ProjectType;
};

function ProjectCard({ project }: Props) {
	console.log(project.description);
	return (
		<motion.div
			className="projectCardContainer"
			animate={{ y: 1 }}
			layoutId={`project-card-container-${project._id}`}
		>
			<motion.div
				animate={{ y: 1 }}
				className="projectCardImgContainer"
				layoutId={`project-img-container-${project._id}`}
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
					className="relative 
                    pt-4 mx-auto transition-all ease-in-out duration-300
                    w-[50%] text-center text-white/40  hover:text-white"
				>
					<a href={project.projectUrl}>
						<span className="inline pr-1">Have a look</span>
						<ArrowRightCircleIcon
							className="inline w-5"
							href={project.projectUrl}
						/>
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ProjectCard;
