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
				<AnimatePresence>
					{content && (
						<motion.div onClick={handleClose} className="projectCardContainer">
							<ProjectCard project={content} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

export default Projects;
