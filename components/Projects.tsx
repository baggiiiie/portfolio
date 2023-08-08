'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='pageDiv'>
            <h3 className='pageTitle'>Projects</h3>
            <div className='
                relative w-full
                flex overflow-x-scroll overflow-y-hidden 
                snap-x snap-mandatory z-20
                scrollbar-thin scrollbar-track-gray-400/20
                scrollbar-thumb-slate-300
            '>
                {projects.map((project, i) =>
                    <div
                        key={i}
                        className='
                        w-screen h-screen
                        flex flex-col flex-shrink-0
                        snap-center items-center justify-center
                        space-y-5 p-20 md:p-44
                    '>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="sticker.png" alt="Project image" />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-slate-400'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>
                                &nbsp;project title
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                this is the project summary
                            </p>
                        </div>
                    </div>
                )}

            </div>
            <div className='w-full absolute bg-gray-500 top-[30%] left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects;