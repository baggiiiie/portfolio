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
            className='
            h-screen relative
            flex flex-col md:flex-row
            overflow-hidden
            text-left
            max-w-full px-10 mx-auto
            justify-evenly items-center
        '>
            <h3 className='
                absolute top-24 uppercase
                tracking-[20px]
                text-gray-500 text-2xl
            '>
                Experiences
            </h3>
            <div className='
                w-full flex space-x-5 overflow-x-scroll 
                p-10 snap-x snap-mandatory 
                scrollbar scrollbar-track-gray-400/20
                scrollbar-thumb-slate-300'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    );
}

export default Experience;