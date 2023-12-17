import React from 'react';
import ProjectCard from './ProjectCard';
import wanderlust from '../../assets/projects/wanderlust.png'
import reactPort from '../../assets/projects/reactPortfolio.png'
import reactRepo from '../../assets/projects/reactRepo.png'
import portfolio from '../../assets/projects/portfolio.jpg'
import simon from '../../assets/projects/simon.jpg'
import news from '../../assets/projects/news.jpg'

const Projects = (props) => {
    const projects = [
        {
            name: "Wanderlust Travel Website",
            img: wanderlust,
            des: "WanderLust - Website for Travel enthusiasts , Made using MERN stack with mongoDB as DB , node.js for backend",
            lag: "MERN Stack",
            link: "https://github.com/abhayprasad565/WanderLust-Travel-Website"
        },
        {
            name: "React Portfolio website",
            img: reactPort,
            des: "Portfolio using React implementing React router , contextApi and TailwindCSS  with Dark and Light Modes",
            lag: "React , HTML , Tailwind",
            link: "https://github.com/abhayprasad565/portfolio-React"
        },
        {
            name: "HTML CSS JS Portfolio website",
            img: portfolio,
            des: "Portfolio using HTML , CSS , JS and parralax Animations using DOM manipulation",
            lag: "HTML , CSS , JS ",
            link: "https://github.com/abhayprasad565/abhayprasad565-portfolio"
        },
        {
            name: "News Webisite using NewsApi.org",
            img: news,
            des: "News wesbite to fetch news directly from newsapi.org using bootstrap html and css",
            lag: "HTML , CSS , JS Bootstrap ",
            link: "https://github.com/abhayprasad565/News-Website"
        },
        {
            name: "React projects MasterRepo",
            img: reactRepo,
            des: "A Master repo to store all react mini projects made to implement react features like react-router , contextApi , states , Hooks",
            lag: "React , HTMl , react-router etc",
            link: "https://github.com/abhayprasad565/React_projects"
        },
        {
            name: "Simon Says game ",
            img: simon,
            des: "memmory engancing user interactive game using HTML , CSS and JS",
            lag: "HTMl , CSS , JS",
            link: "https://github.com/abhayprasad565/Simon-Say-game"
        },
    ];
    return (
        <div className='w-full sm:h-screen h-fit  text-custom-textColor p-4 '>
            <div className='w-full justify-center items-center flex flex-row text-5xl font-semibold'>
                <div>My</div>
                <div className='text-custom-linkActive px-2'>Projects</div>
            </div>
            <div className='w-full min-h-fit flex flex-row flex-wrap items-center justify-center'>
                {
                    projects.map((c, i) => (
                        <ProjectCard name={c.name} img={c.img} des={c.des} lag={c.lag} link={c.link} key={i}
                            darkMode={props.darkMode} >
                        </ProjectCard>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
