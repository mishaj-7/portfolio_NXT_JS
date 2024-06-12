import React from 'react';
import { projectsData } from '@/lib/data';
import SectionsHeading from './SectionsHeading';
import Project from './Project';



export default function Projects() {
  return (
    <section>
      <SectionsHeading>My projects</SectionsHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};


