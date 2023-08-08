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
            <h3 className='pageTitle'>Experiences</h3>
            <div className='pageContent'>
                <div className='horizontalScroll'>
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