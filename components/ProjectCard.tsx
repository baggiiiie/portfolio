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
                            <a href='https://www.google.com' className='heroButton'>Have a look</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;