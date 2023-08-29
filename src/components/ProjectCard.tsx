import React, { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ProjectType } from "@/src/types";
import { motion } from "framer-motion";

type Props = {
	project: ProjectType;
};

function ProjectCard({ project }: Props) {
	return (
		// <motion.div
		// 	variants={{
		// 		hidden: {
		// 			opacity: 0,
		// 			transition: {
		// 				duration: 0.5,
		// 			},
		// 		},
		// 		visible: {
		// 			opacity: 0.8,
		// 			transition: {
		// 				delay: 0.04,
		// 				duration: 0.5,
		// 			},
		// 		},
		// 	}}
		// 	initial="hidden"
		// 	exit="hidden"
		// 	animate="visible"
		// 	// className="projectCard"
		// 	className="relative m-auto "
		// 	// layoutId={`project-container-${project._id}`}
		// >
		// 	<motion.div layoutId={`project-img-container-${project._id}`}>
		// 		<img
		// 			src={`${project.logo}`}
		// 			alt={`${project.slug}`}
		// 			className="projectCardImg h-[50%] rounded-b-none"
		// 			// layout
		// 		/>
		// 	</motion.div>
		// 	<motion.div className="projectCardText">
		// 		<p>
		// 			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
		// 			expedita.
		// 		</p>

		// 	</motion.div>
		// </motion.div>
		<motion.div
			className="projectCardBackdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.15 } }}
			transition={{ duration: 0.2, delay: 0.15 }}
			layoutId={`project-card-img-container-${project._id}`}
		>
			<motion.div className="projectCardImgContainer">
				<img
					src={`${project.logo}`}
					alt={`${project.slug}`}
					className="projectCardImg"
				/>
			</motion.div>
			<motion.div className="projectCardTextContainer">
				<h3 className="projectName">{project.name}</h3>
				<p className="projectDescription">{project.tagline}</p>
				<div
					className="relative 
                    pt-4 mx-auto transition-all ease-in-out duration-300
                    w-[50%] text-center text-white/40  hover:text-white"
				>
					<span className="inline pr-1">Have a look</span>
					<ArrowRightCircleIcon
						className="inline w-5
		                    "
						href={project.projectUrl}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ProjectCard;
