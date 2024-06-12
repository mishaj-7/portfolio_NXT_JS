'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative '>
          <motion.div
            initial={{ opacity: 0, scale:0}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration:0.2,
            }}
           >
            <Image
            src='/mishajphotospecs.png'
            alt='mishaj image'
            width="192"
            height='192'
            quality='25'
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
           />
          </motion.div>
          <motion.span className='absolute text-3xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay:0.5,
              duration:0.7,
            }}
          >
            👋
          </motion.span>
         </div>  
      </div>
      
      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Mohamed Mishaj k.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">MERN (stack)</span>
      </motion.p>
      
      <motion.div className='flex flex-col sm:flex-row  items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:0.1,
        }}
      >
        <Link href='#contact' className='group bg-gray-900 text-white px-7 flex rounded-full py-3 items-center gap-2 outline-none focus:scale-110  hover:scale-110 hover:bg-gray-950 active:scale-105 transition'> Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> </Link>
        
        <a className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
          href='/CV.pdf'  
          download={true}
        > Download CV<HiDownload className='opacity-60 group-hover:' /> </a>
        
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950'
          href='https://www.linkedin.com/in/mishaj-k-b195aa195/ '
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
          href='https://github.com/mishaj-7'
          target='_blank'
        >
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  )
}
