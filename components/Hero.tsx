'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "So you've found my website",
            "Well, welcome i guess",
            "Have a look around",
        ],
        loop: 1,
        delaySpeed: 2000,
    });

    return (
        <div className='
            pageDiv
            text-center mt-[-30px]
        '>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-20 w-20 mx-auto object-cover'
                src='sticker.png' alt='profile pic' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    my personal space
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experiences'>
                        <button className='heroButton'>Experiences</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <Link href='#contact'>
                        <button className='heroButton'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}