'use client'

import React from 'react'
import SectionsHeading from './SectionsHeading'
import { skillsData } from '@/lib/data'
import { useSectionInview } from '@/lib/hook';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index:number)=> ({
        opacity: 1,
        y: 0,
        transition: {
            delay:0.05 * index,
        },
    }),
};

export default function Skills() {

    const { ref } = useSectionInview('Skills');
    return (
        <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' >
            <SectionsHeading>My skills</SectionsHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skills, index) => (
                        <motion.li key={index} className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        variants={fadeInAnimationVariants}
                        initial= 'initial'
                        whileInView='animate'
                        viewport={{
                            once:true,
                        }}
                        custom={index}
                        >{skills}</motion.li>
                    ))
                }
            </ul>
        </section >
    );
};
