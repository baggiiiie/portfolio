import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

type Props = {};

function ProjectCard({}: Props) {
    return (
        <div className='group projectCardContainer'>
            <div className='projectCard'>
                <div className='projectCardFront'>
                    <img src="sticker.png" alt="Project Pic" className='projectCardFrontImg' />
                </div>
                <div className='projectCardBack'>
                    <div className='flex min-h-full flex-col items-center justify-center break-words'>
                        <h1 className='text-xl md:text-2xl font-bold p-2 md:p-5 lg:px-8'>something something</h1>
                        <p className='text-base pb-2 max-[500px]:hidden'>something</p>
                        <a href='https://www.google.com'>
                            <span className='heroButton min-[500px]:inline relative hidden border-white/40 text-white/40'>Have a look</span>
                            <ArrowRightCircleIcon className='w-8 text-white/40 max-[500px]:inline hidden hover:text-[#f7ab0a]/40
                            transition-all ease-in-out duration-500' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;