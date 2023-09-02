"use client";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/src/types";
import project from "../schemas/project";

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
							layoutId={`project-card-container-${project._id}`}
						>
							<motion.div
								layoutId={`project-img-container-${project._id}`}
								animate={{ y: 1 }}
								className="projectCoverImgContainer"
							>
								<img
									src={`${project.logo}`}
									alt={`${project.slug}`}
									className="projectCoverImg"
								/>
							</motion.div>
						</motion.div>
					))}
				</div>
				{/* <p className="text-gray-500 hover:text-gray-300 transition-all duration-300 mt-10 text-center font-light text-sm">
					The card opening effect is achieved with framer motion, double opening
					a card results in a weird zooming behavior, which hasn't been resolved
					yet but i really wanna use this effect :(
				</p> */}
				{/* <motion.div
					layoutId="card-container"
					className="bg-black"
					onClick={() => setContent(projects[0])}
					animate={{ opacity: 1, y: 1 }}
				>
					<motion.div layoutId="img-container">
						<motion.img layoutId="img" src="sticker.png" alt="" />
					</motion.div>
				</motion.div> */}
				<AnimatePresence>
					{content && (
						<>
							{/* <motion.div
								layoutId="card-container"
								className=" fixed top-0 bg-black w-[300px] h-[300px]"
								onClick={handleClose}
								animate={{ opacity: 1, y: 1 }}
							>
								<motion.div
									layoutId="img-container"
									className="relative object-cover"
								>
									<motion.img
										layoutId="img"
										src="sticker.png"
										alt=""
										className=" h-[150px]"
									/>
								</motion.div>
							</motion.div> */}
							<motion.div onClick={handleClose} className="projectCardBackdrop">
								<ProjectCard project={content} />
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

export default Projects;
