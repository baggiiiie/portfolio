import React from 'react';

type Props = {};

function ProjectCard({}: Props) {
    return (
        <div className='flex items-center justify-center'>
            <div className='group h-48 w-48 [perspective:500px]'>
                <div className='projectCard'>
                    <div className='projectCardFront'>
                        <img src="sticker.png" alt="" className='projectCardFrontImg' />
                    </div>
                    <div className='projectCardBack'>
                        <div className='flex min-h-full flex-col items-center justify-center'>
                            <h1 className='text-3xl font-bold'>something</h1>
                            <p className='text-lg'>something</p>
                            <p className='text-base'>something</p>
                            <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;