'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
    return (
        <article className='experienceCard'>
            <motion.img
                initial={{ y: -100, opacity: 0, }}
                transition={{ duration: 1.5 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}

                className="w-32 h-32 rounded-full
                xl:w-[100px] xl:h-[100px]
                object-cover object-center"
                src='sticker.png'
                alt='Experience Picture'
            />
            <div className='px-0 md:px-10'>
                <h4 className='font-bold sm:text-2xl md:text-4xl'>Position</h4>
                <p className='sm:text-xl md:text-2xl mt-1 '>Some info here</p>
                <div className='hidden md:flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10 rounded-full'
                        src="sticker.png" alt="Skills Picture" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="sticker.png" alt="Skills Picture" />
                    <img
                        className='h-10 w-10 rounded-full'
                        src="sticker.png" alt="Skills Picture" />
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Started work... <br />
                    Ended ...
                </p>
                <ul className='hidden md:inline-block list-disc space-y-1 ml-5 text-lg'>
                    <li>
                        something something here
                    </li>
                    <li>
                        something something here
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;