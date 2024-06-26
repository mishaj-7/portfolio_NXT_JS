'use client'


import React from 'react'
import SectionsHeading from './SectionsHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInview } from '@/lib/hook';
import { sendEmail } from '@/actions/sedEmail';
export default function Contact() {
    const {ref} = useSectionInview('Contact');


  return (
    <motion.section id='contact'
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial = {{
        opacity:0,

    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1,
    }}
    viewport={{
        once: true,
    }}

    >
      <SectionsHeading>Contact me</SectionsHeading>
          <p className='text-gray-700 -mt-4'>Connect me through <a className='underline' href="mailto:amstig100@gmail.com">amstig100@gmail.com</a>{" "}
              or this form.
          </p>
          <form className='mt-10 flex flex-col'
           action={ async (FormData) => {
            await sendEmail(FormData);
           }}
           >
              <input type="email" 
              required
              name='senderEmail' 
              maxLength={500} 
              className='h-14 px-4 rounded-lg borderBlack' 
              placeholder='your email'
              />
              <textarea className='h-52 my-3 rounded-lg borderBlack p-4' 
              placeholder='Your message' 
              name='message'
              required 
              maxLength={5000}
              />
              <button type='submit' 
              className='group flex items-center justify-center gap-2  h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950
        active:scale-105'> Send <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{" "}
              </button>
          </form>
    </motion.section>
  )
}
