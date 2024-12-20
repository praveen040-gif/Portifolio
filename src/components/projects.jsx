import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons for GitHub and project link


const Projects = () => {
  const projectData = [

    {
      title: 'TIC-TAC-TOE',
      imageUrl: './assets/images/tic.jpg',
      githubLink: 'https://github.com/praveen040-gif/Tic-Tac-Toe',
      liveLink: 'https://praveen040-gif.github.io/Tic-Tac-Toe/',
    },
    {
      title: 'DSA Problems',
      imageUrl: './assets/images/dsa.png',
      githubLink: 'https://github.com/praveen040-gif/DSA',
      liveLink: 'https://github.com/praveen040-gif/DSA',
    },
    {
      title: 'E-Mart',
      imageUrl: './assets/images/emart-cover.png', // Replace with actual image paths
      githubLink: 'https://github.com/praveen040-gif/E-Mart',
      liveLink: 'https://github.com/praveen040-gif/E-Mart',
    },


  ];

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
              <img src={project.imageUrl} alt={project.title} className="project-image"/>
              <h2 className="project-title">{project.title}</h2>
            
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub className="project-icon" />
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaExternalLinkAlt className="project-icon" />
              </a>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
