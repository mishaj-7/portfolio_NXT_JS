"use client"


import SectionHeading from '@/components/SectionsHeading';
import { useSectionInview } from '@/lib/hook';
import { motion } from 'framer-motion';

export default function About() {
  const {ref} = useSectionInview('About');
  
  // const { ref, inView } = useInView({
  //   threshold:0.75,
  // });
  // //console.log(inView)
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('About')
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  
  return (
      <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id='about'
          
          
      >
          <SectionHeading>about me</SectionHeading>
          <p className="mb-3">
          After graduating with a Computer Science degree,
          I initially worked as a <span className="font-medium">Network Engineer</span> abroad, though my true passion was in software development.
          Driven by this passion, I began freelancing,
          creating static webpages with <span className="italic">HTML, CSS, and JavaScript</span> to gain practical experience.
          To further elevate my skills, I joined Mentorow as an intern,
          working on projects with a core stack of <span className="font-medium">React, Node.js, Express, and MongoDB. </span>
          I am also familiar with TypeScript, Figma for design, and AWS for hosting and deployment,
          with expertise in Linux/Unix for server management. <span className="font-medium">currently looking for a full-time position as a Full Stack Developer.</span>
        <br />
          </p>
          <p><span className="underline">I love</span> the feeling of finally figuring out a solution to a problem.
          When I'm not coding, I enjoy watching football, playing PS5, and learning about new things.
          I'm currently exploring <span className="font-medium">mentalism</span> through online blogs and videos,
          and I plan to start a <span className="font-medium">YouTube channel</span> discussing <span className="font-medium">football</span></p>
    </motion.section>
  )
}
