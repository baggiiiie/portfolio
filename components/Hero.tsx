'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "So you've found my website",
            "Well, welcome i guess",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
            <BackgroundCircle />
            <img src='../public/sticker.png' alt='profile pic' />
            <h1>
                <span>{text}</span>
                <Cursor />
            </h1>
        </div>
    );
}