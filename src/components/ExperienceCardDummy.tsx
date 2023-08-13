import { motion } from 'framer-motion';
import { JobType } from '@/src/types';

type Props = {
    job: JobType;
};

function ExperienceCardDummy({ job }: Props) {
    return (
        <article className='experienceCard'>
            <motion.div
                initial={{ y: -100, opacity: 0, }}
                transition={{ duration: 1.5 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            >
                <img
                    className='w-[80%]
                    mt-2 mx-auto
                    rounded-full
                    object-cover object-center
                    justify-center'
                    src={`${job.logo}`}
                    alt={`${job.name}`}
                />
            </motion.div>
            <div className='px-3 md:px-10'>
                <h4 className='font-bold sm:text-2xl md:text-3xl'>{job.jobTitle}</h4>
                <p className='sm:text-xl md:text-2xl mt-2 '>{job.name}</p>
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
                <p className='uppercase py-5 text-gray-300 text-sm'>
                    Started {job.startDate.toString()} <br />
                    Ended {job.endDate.toString()}
                </p>
                <ul className='hidden md:inline-block list-disc space-y-1 ml-5 text-lg'>
                    <li>
                        {job.description}
                    </li>
                    <li>
                        something something here
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCardDummy;