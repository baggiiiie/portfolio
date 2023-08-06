'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
    return (
        <motion.div
            className='relative
            flex flex-col
            text-center
            md:text-left xl:flex-row
            max-w-[2000px] xl:px-10 xl:space-y-0
            min-h-screen
            items-center justify-center
            mx-auto 
            '
        >
            <div className='w-full absolute bg-gray-500 top-[30%] left-0 h-[500px] skew-y-12 ' />
            <h3 className='
                absolute top-24 uppercase
                tracking-[20px]
                text-gray-500
                text-2xl
            '>
                Skills
            </h3>
            <h3 className='absolute top-36 uppercase
                text-gray-500 text-sm'
            >
                Hover over a skill for current proficiency
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    );
}

export default Skills;