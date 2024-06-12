import authAppImg from '@/public/auth_app.png';
import nikeImg from '@/public/nike_image.png';
import todoImg from '@/public/todo_image.png';

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


export const projectsData = [
    {
        title: 'Authentication-app',
        description: '0s, when an unknown printer took a gallecimen book. It has survived not only five centuries, but alsessentially un',
        tags: ['Ract', 'express', 'NodeJs', 'mongoDB', 'tailwind', 'redux_toolkit'],
        imageUrl: authAppImg
    },
    {
        title: 'Nike',
        description: 'f letters, as opposed to using Cont here, making it look like readable E and web page editopsum as their default',
        tags: ['React', 'react-dom', 'tailwindcss', 'hooks', 'haid', 'da9d'],
        imageUrl: nikeImg

    },
    {
        title: 'todo',
        description: 'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the und',
        tags: ['typeScript', 'typeSafetey', 'crud', 'hooks'],
        imageUrl: todoImg
    },
] as const; // this implicitly read only properties