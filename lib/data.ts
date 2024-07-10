import authAppImg from "@/public/auth_app.png";
import nikeImg from "@/public/nike_image.png";
import todoImg from "@/public/todo_image.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Authentication-app",
    description:
      "A full-stack authentication application built with React, Express, Node.js, MongoDB, and Tailwind CSS. Implements Redux Toolkit for state management.",
    tags: ["Ract", "Express", "Node Js", "mongoDB", "tailwind CSS", "redux_toolkit", "jwt"],
    imageUrl: authAppImg,
    appUrl: "https://auth-app-wuly.onrender.com/",
  },
  {
    title: "Nike",
    description:
      "A responsive landing page inspired by Nike's design language. Built using React, Tailwind CSS, and custom hooks.",
    tags: ["React", "react-dom", "tailwindcss", "custom-hooks", "eslint",],
    imageUrl: nikeImg,
    appUrl: "https://nike-teal-three.vercel.app/",
  },
  {
    title: "todo",
    description:
      "A TypeScript-based CRUD application for managing tasks. Uses React with hooks for front-end development and ensures type safety throughout.",
    tags: ["typeScript", "TypeSafetey",'react-hooks', 'class component'],
    imageUrl: todoImg,
    appUrl: "https://type-script-todo-eta.vercel.app/",
  },
] as const; // this implicitly read only properties

export const skillsData = [
  "React js",
  "Node js",
  "Express",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Aws",
  "linux/unix",

  "Next.js",
  "CSS",
  "Git",
  "Tailwind-css",
  "Redux",
  "Redux-toolkit",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Graduated RVS collage",
    location: "coimbatore",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a front-end developer like freelancer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "kerala",
    description:
      "I worked as a front-end developer while working full-time job as part time. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer MERN",
    location: "kochi",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Node js, TypeScript, Tailwind,  and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;