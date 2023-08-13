'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ProfileType } from '@/types';
import { PortableText } from '@portabletext/react';

type Props = {
    profile: ProfileType;
};

function About({ profile }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5 }}
            className='pageDiv'>
            <h3 className='pageTitle md:mt-0'>About</h3>
            <div className='
                pageContent
                flex flex-col
                md:flex-row
                text-center md:text-left
                max-w-7xl '>
                <motion.img
                    className="m-auto mb-10 
                    md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
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
                <div className=' space-y-10 px-0 md:px-10'>
                    <h4 className='relative text-4xl font-semibold md:mt-10 break-all'>{profile.shortBio}</h4>
                    <p className='relative my-auto '>
                        this is a test message
                    </p>
                    <PortableText value={profile.fullBio} />
                </div>
            </div>
        </motion.div>
    );
}

export default About;