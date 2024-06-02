import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const github = "https://github.com/";
const Projects = () => {
  const projectList = [
    {
      title: "Website: Personal Portfolio",
      repoURL: github + "Aryan10/Aryan10.github.io",
      description: "This site is made using React.js and is well still under development (I hope I don't forget about it)"
    },
    {
      title: "Website: E-Commerce Platform",
      repoURL: github + "Nishant040305/Vend-Ventures",
      description: "An online marketplace made using MERN Stack. Worked on backend connectivity and API using Expressjs, Nodejs, Axios, MongoDB for user and product databases and socket.io for chatting between users. Made in one week for Weekend of Code 2024 @ MNNIT"
    },
    {
      title: 'Website: Currency Converter',
      repoURL: github + "Aryan10/SimpleCurrencyConverter",
      description: "My first website. Written in HTML/CSS/VanillaJS, it features rates, trends, graphs and other features like history and favourites. Made in one week for CodeSangam2023 @ MNNIT",
    },
    {
      title: 'Discord Bot (Z-Bot)',
      repoURL: github + "Aryan10/Z-Bot",
      description: 'Developed several discord bots using Node.js for various purposes such as moderation, utility, fun and informational commands. Formerly used MongoDB for storing user data for currency systems and web scraping for fetching live information. The open source Z-bot (4000 servers when it was hosted) provides various Pokemon-based information.',
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            repoURL={project.repoURL}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
