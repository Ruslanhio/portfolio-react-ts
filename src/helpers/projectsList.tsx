import {v1} from 'uuid';
import project01 from './../img/projects/01.jpg'
import projecto1Big from './../img/projects/01-big.jpg'
import project02 from './../img/projects/02.jpg'
import projecto2Big from './../img/projects/02-big.jpg'
import project03 from './../img/projects/03.jpg'
import projecto3Big from './../img/projects/04-big.jpg'
import project04 from './../img/projects/04.jpg'
import projecto4Big from './../img/projects/04-big.jpg'
import project05 from './../img/projects/05.jpg'
import projecto5Big from './../img/projects/05-big.jpg'
import project06 from './../img/projects/06.jpg'
import projecto6Big from './../img/projects/06-big.jpg'


export type ProjectType = {
    id: string
    title: string
    skills: string
    img: string
    imgBig: string,
    gitHubLink?: string
}

export const projects: ProjectType[] = [
    {
        id: v1(),
        title: 'Gaming streaming portal',
        skills: 'React, Node.js, MongoDB',
        img: project01,
        imgBig: projecto1Big,
        gitHubLink: 'https://github.com'
    },
    {
        id: v1(),
        title: 'Video service',
        skills: 'Skills: React, PHP, MySql',
        img: project02,
        imgBig: projecto2Big,
        gitHubLink: 'https://github.com'
    },
    {
        id: v1(),
        title: 'Video portal',
        skills: 'Vue JS, Node.js, MongoDB',
        img: project03,
        imgBig: projecto3Big,
        gitHubLink: 'https://github.com'
    },
    {
        id: v1(),
        title: 'Dating app',
        skills: 'Skills: React Native',
        img: project04,
        imgBig: projecto4Big,
    },
    {
        id: v1(),
        title: 'Landing',
        skills: 'Vue JS, Node.js, MongoDB',
        img: project05,
        imgBig: projecto5Big,
    },
    {
        id: v1(),
        title: 'Gaming community',
        skills: 'React, PHP, MySql',
        img: project06,
        imgBig: projecto6Big,
    }
]
// export const projects = projectsInitial.map(item => {
//     const uniqueId = v1();
//     return { ...item, id: `${uniqueId}` };
// });

