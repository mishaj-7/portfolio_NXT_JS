import authAppImg from "@/public/auth_app.png";
import nikeImg from "@/public/nike_image.png";
import todoImg from "@/public/todo_image.png";
import mentorowImg from '@/public/mentorow.png'
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
    title: "mentrow",
    description:
      "fully fledged web applicaiton for user to understand what are the services mentrow provide and their services to show case",
    tags: ["React", "react-dom", "tailwindcss", "whatsapp api integration", "eslint",'nodeJs', 'express js', 'mySQL'],
    imageUrl: mentorowImg,
    appUrl: "https://mentorow-home-page-wcm7.vercel.app/",
  },
  {
    title: "Authentication-app",
    description:
      "A full-stack authentication application built with React, Express, Node.js, MongoDB, and Tailwind CSS. Implements Redux Toolkit for state management.",
    tags: [
      "Ract",
      "Express",
      "Node Js",
      "mongoDB",
      "tailwind CSS",
      "redux_toolkit",
      "jwt",
    ],
    imageUrl: authAppImg,
    appUrl: "https://auth-app-wuly.onrender.com/",
  },
  {
    title: "Nike",
    description:
      "A responsive landing page inspired by Nike's design language. Built using React, Tailwind CSS, and custom hooks.",
    tags: ["React", "react-dom", "tailwindcss", "custom-hooks", "eslint"],
    imageUrl: nikeImg,
    appUrl: "https://nike-teal-three.vercel.app/",
  },
  {
    title: "todo",
    description:
      "A TypeScript-based CRUD application for managing tasks. Uses React with hooks for front-end development and ensures type safety throughout.",
    tags: ["typeScript", "TypeSafetey", "react-hooks", "class component"],
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
    date: "2016-2019",
  },
  {
    title: "Front-End Developer freelancing",
    location: "UAE",
    description:
      "I worked as a front-end developer while working full-time job as part time.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "full stack developer at Mentrow",
    location: "kochi-kerala",
    description:
      "I'm now a full-stack developer working at mentorow. My stack includes React, Node js, TypeScript, Tailwind,  and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;
