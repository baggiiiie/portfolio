'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
    return (
        <motion.div
            className='pageDiv'
        >
            <h3 className='pageTitle'>Skills</h3>
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