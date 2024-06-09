import auth_app_image from '@/public/auth_app.png';
import nike_image from '@/public/nike_image.png';
import todo_image from '@/public/todo_image.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    }
] as const ;


export const ProjectsData = [
    {
        title: 'Authentication-app',
        description: 'this is complex app useing lot techs',
        tags: ['Ract', 'express', 'NodeJs', 'mongoDB', 'tailwind', 'redux_toolkit'],
        imageUrl: auth_app_image
    },
    {
        title: 'Nike',
        description: 'this is nike cutting edge app',
        tags: ['React', 'react-dom', 'tailwindcss', 'hooks'],
        imageUrl: nike_image,

    },
    {
        title: 'todo',
        description: 'this is using latest type script for type safety',
        tags: ['typeScript', 'typeSafetey', 'crud', 'hooks'],
        imageUrl: todo_image,
    },
] as const; // this implicitly read only properties