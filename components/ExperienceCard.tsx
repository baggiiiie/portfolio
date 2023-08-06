'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
    return (
        <article
            className='
            flex flex-col rounded-lg items-centerr space-y-7 flex-shrink-0
            w-[300px] md:w-[600px] xl:w-[900px]
            snap-center bg-[#292929] p-10
            opacity-40 hover:opacity-100 transition-opacity duration-200
            cursor-pointer overflow-hidden'
        >
            <motion.img
                initial={{ y: -100, opacity: 0, }}
                transition={{ duration: 1.5 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}

                className="w-32 h-32 rounded-full
                xl:w-[200px] xl:h-[200px]
                object-cover object-center"
                src='sticker.png'
                alt='Experience Picture'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Position</h4>
                <p className='font-bold text-2xl mt-1'>Some info here</p>
                <div className='flex space-x-2 my-2'>
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
                    Started work... Ended ...
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>
                        something something here
                    </li>
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