import React from 'react'
import SectionsHeading from './SectionsHeading'
import { ProjectsData } from '@/lib/data'
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
      <SectionsHeading>My projects</SectionsHeading>
      <div>
        {
          ProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};

type ProjectProps = (typeof ProjectsData)[number] //indexed access type" in TypeScript [number] index signature in this conrtext it indexed access type
function Project({title,
  description,
  tags,
  imageUrl,}:ProjectProps) {
  return (
    <section className='bg-green-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0'>
      
      <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='mt-2 leading-relaxed text-gray-700 '>{description}</p>
      <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
        {tags.map((tag, index) => (
          <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full '>{tag}</li>
       ))}
      </ul>
      </div>

      <Image src={imageUrl} alt='My projects' quality={95} className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl ' />
    </section>
  )
}
