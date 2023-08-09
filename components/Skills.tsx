'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
    return (
        <motion.div className='pageDiv'>
            <h3 className='pageTitle'>Skills</h3>
            <div className='pageContent'>
                <div className='grid grid-cols-4 gap-5'>
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;