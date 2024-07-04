'use client'


import React from 'react'
import SectionsHeading from './SectionsHeading';
import { motion } from 'framer-motion';
import { useSectionInview } from '@/lib/hook';
import { sendEmail } from '@/actions/sedEmail';
import { BiMailSend, BiPhone } from 'react-icons/bi';
import SubmitBtn from './Submit-btn';
import toast from 'react-hot-toast'

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
          
          <div className='text-gray-700 -mt-4 flex flex-col justify-center items-center'>
              connect me directly
              <div className='flex flex-row gap-2 mt-3 mb-3'>
                  <a 
                   href="tel:+919645865551" className='px-7 flex rounded-full py-2 items-center gap-3 border hover:bg-black hover:bg-opacity-10 '>
                      <BiPhone />
                  </a>
                  <a className='px-7 flex rounded-full py-3 items-center gap-2 border hover:bg-black hover:bg-opacity-10' href="mailto:amstig100@gmail.com">
                      <BiMailSend />
                  </a>
              </div>
              or send a message.
          </div>

          <form className='mt-10 flex flex-col'
           action={ async (FormData) => {
               const { data, error } =  await sendEmail(FormData);
            if(error) {
                toast.error(error)
                return;
            }
            toast.success('message sent successfully!')
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
              <SubmitBtn />
          </form>
    </motion.section>
  )
    
}