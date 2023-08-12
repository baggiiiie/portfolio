'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/types';
import ProjectCardDummy from './ProjectCardDummy';

type Props = {
    projects: ProjectType[];
};

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='pageDiv'
        >
            <h3 className='pageTitle'>Projects</h3>
            <div className='pageContent'>
                <div className='
                    relative
                    grid gap-5 
                    max-[500px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 
                    justify-center
                    pb-10 lg:pb-2
                '>
                    {projects.map((project) =>
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    )}
                    <ProjectCardDummy />
                    <ProjectCardDummy />
                    <ProjectCardDummy />
                    <ProjectCardDummy />
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;