'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function Experience({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='pageDiv'>
            <div className='w-full absolute bg-gradient-to-l from-slate-300 to-slate-500 top-[30%] left-0 h-[500px] -skew-y-12 -z-10' />
            <h3 className='pageTitle'>Experiences</h3>
            <div className='
                w-3/4 h-4/5
                m-auto
            '>
                <div className='
                w-full flex space-x-5 overflow-x-scroll 
                m-auto mt-40 px-[40%] snap-x snap-mandatory 
                h-3/4 max-h-[600px] min-h-[400px]
                scrollbar-thin scrollbar-track-gray-400/20
                scrollbar-thumb-slate-300
            '>
                    {/* scrollbar is removed, add a page indicator? e.g., 1/3 */}
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;