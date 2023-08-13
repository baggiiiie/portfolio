import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { ProjectType } from '@/src/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
    project: ProjectType;
};

function ProjectCard({ project }: Props) {
    return (
        <div className='group projectCardContainer'>
            <div className='projectCard'>
                <div className='projectCardFront'>
                    <Image src={`${project.logo}`} alt={`${project.slug}`} className='projectCardFrontImg'
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className='projectCardBack'>
                    <div className='flex min-h-full flex-col items-center justify-center break-words'>
                        <h1 className='text-xl md:text-2xl font-bold p-2 md:p-5 lg:px-8 mb-2'>{project.name}</h1>
                        {/* <p className='text-base pb-2 max-[500px]:hidden'>something</p> */}
                        {/* <PortableText value={project.description} /> */}
                        <a href={`${project.projectUrl}`}>
                            <span className='heroButton relative
                                min-[651px]:inline hidden
                                border-white/40 text-white/40
                            '>Have a look</span>
                            <ArrowRightCircleIcon className='w-8 text-white/40 max-[650px]:inline hidden hover:text-[#f7ab0a]/40
                            transition-all ease-in-out duration-500' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;