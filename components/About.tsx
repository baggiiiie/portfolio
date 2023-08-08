'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5 }}
            className='
            pageDiv
            md:flex-row
            text-center md:text-left
            max-w-7xl 
        '>
            <div className='w-full absolute bg-gradient-to-l from-slate-300 top-[30%] left-0 h-[500px] skew-y-12 -z-10' />
            <h3 className='pageTitle'>About</h3>

            <motion.img
                className="
                -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
                object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                src='sticker.png'
                alt='some image'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>This is my background</h4>
                <p className='text-base'>
                    this is some background...
                </p>
            </div>
        </motion.div>
    );
}

export default About;