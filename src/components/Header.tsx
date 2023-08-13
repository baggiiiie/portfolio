'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { ProfileType } from '@/src/types';

type Props = {
    profile: ProfileType;
};

function Header({ profile }: Props) {
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
                {Object.entries(profile.socialLinks).map((link, i) =>
                    <SocialIcon
                        key={i}
                        url={`${link[1]}`}
                        fgColor='white'
                        bgColor='transparent'
                    />
                )}
            </motion.div>

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
                {/* <a href={'#contact'}> */}
                <SocialIcon
                    network='email'
                    fgColor='white'
                    bgColor='transparent'
                    url='#contact'
                />
                <a href='#contact'>
                    <p className='hidden md:inline-flex text-sm text-gray-400'>
                        Get in touch!
                    </p>
                </a>
                {/* </a> */}
            </motion.div>
        </header>
    );
}

export default Header;