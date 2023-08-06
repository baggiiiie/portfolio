'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircle({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 3
            }}
            className='relative flex justify-center items-center'>
            <div className='absolute rounded-full border border-[#6d3f3f] h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='absolute rounded-full border-2 border-[#b98b8b] opacity-20 h-[300px] w-[300px] mt-52 animate-ping' />
            <div className='absolute rounded-full border-2 border-[#f7ab0a] opacity-10 h-[400px] w-[400px] mt-52 animate-ping' />
            <div className='absolute rounded-full border border-[#f7ab0a] opacity-30 h-[500px] w-[500px] mt-52 animate-ping' />
            <div className='absolute rounded-full border border-[#7286ac] opacity-30 h-[600px] w-[600px] mt-52 animate-ping' />
        </motion.div>
    );
}

export default BackgroundCircle;