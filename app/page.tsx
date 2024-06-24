'use client'

import Hero from '@/components/Hero'
import SectionDevider from '@/components/Section-devider'
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/skills';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
