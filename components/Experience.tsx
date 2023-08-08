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
                absolute m-auto 
                left-0 right-0 bottom-0 top-[10%]
                w-3/4 h-4/5
                items-center
            '>
                <div className='
            
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

                w-full flex space-x-5 overflow-x-scroll 
                 px-[40%] snap-x snap-mandatory 
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