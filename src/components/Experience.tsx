'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { JobType } from '@/src/types';

type Props = {
    jobs: JobType[];
};

function Experience({ jobs }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='pageDiv'>
            <h3 className='pageTitle'>Experience</h3>
            <div className='pageContent'>
                <div className='horizontalScroll'>
                    {jobs.map((job) =>
                        <ExperienceCard
                            key={job._id}
                            job={job}
                        />
                    )}
                    <ExperienceCard job={jobs[0]} />
                    <ExperienceCard job={jobs[0]} />
                    <ExperienceCard job={jobs[0]} />
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;