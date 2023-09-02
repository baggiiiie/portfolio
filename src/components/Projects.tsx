"use client";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/src/types";

type Props = {
	projects: ProjectType[];
};

function Projects({ projects }: Props) {
	const [content, setContent] = useState<ProjectType | null>(null);
	const handleClose = useCallback(() => {
		setContent(null);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="pageDiv"
		>
			<h3 className="pageTitle">Projects</h3>
			<div className="pageContent">
				<div className="projectGrid">
					{projects.map((project) => (
						<motion.div
							onClick={() => content === null && setContent(project)}
							key={project._id}
							className="projectCoverContainer"
							// layoutId={`project-card-container-${project._id}`}
							layoutId={`project-card-img-container-${project._id}`}
						>
							<img
								src={`${project.logo}`}
								alt={`${project.slug}`}
								className="projectCoverImg"
							/>
						</motion.div>
					))}
				</div>
				<p className="text-gray-500 hover:text-gray-300 transition-all duration-300 mt-10 text-center font-light text-sm">
					The card opening effect is achieved with framer motion, double opening
					a card results in a weird zooming behavior, which hasn't been resolved
					yet but i really wanna use this effect :(
				</p>
				<AnimatePresence>
					{content && (
						<>
							<motion.div
								onClick={handleClose}
								className="projectCardContainer"
								layoutId={`project-card-container-${content._id}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ProjectCard project={content} />
							</motion.div>
							{/* <motion.div
								variants={{
									hidden: {
										opacity: 0,
										transition: {
											duration: 0.16,
										},
									},
									visible: {
										opacity: 0.8,
										transition: {
											delay: 0.04,
											duration: 0.2,
										},
									},
								}}
								initial="hidden"
								exit="hidden"
								animate="visible"
							/> */}
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

export default Projects;
