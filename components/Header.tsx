'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
    return (
        <header className='
                sticky top-0 flex items-start justify-between 
                max-w-7xl mx-auto 
                z-20 xl:items-center
                p-5'>
            <motion.div
                initial={{
                    x: -500,
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'
            >
                <SocialIcon
                    url='https://www.linkedin.com'
                    fgColor='white'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.github.com/baggiiiie'
                    fgColor='white'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/baggiiiie'
                    fgColor='white'
                    bgColor='transparent'
                />
            </motion.div>

            {/* <Link href='#contact'> */}
            <motion.div
                initial={{
                    x: 500,
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className='cursor-pointer flex flex-row items-center'>
                <SocialIcon
                    network='email'
                    fgColor='white'
                    bgColor='transparent'
                />
                <a href='#contact'><p className='hidden md:inline-flex text-sm text-gray-400'>
                    Get in touch!
                </p></a>
            </motion.div>
            {/* </Link> */}
        </header>
    );
}

export default Header;