"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import SectionsHeading from "./SectionsHeading";
import Project from "./Project";
import { useSectionInview } from "@/lib/hook";

export default function Projects() {
  const { ref } = useSectionInview("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionsHeading>My projects</SectionsHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
