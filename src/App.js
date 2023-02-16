import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Gamepad to Keyboard/Mouse',
      description: 'Adds the ability to control Windows using a standard gamepad, with customizable controls.',
      image: "/images/XboxGitCap.PNG",
      url: 'https://example.com/project2',
      githubUrl: 'https://github.com/AlexSkillman10/XBOXtoKeyMouse'
    },
    {
      id: 2,
      title: 'This Website',
      description: 'My first real foray in React, this website was custom built off of npx create-react-app to host and present some of my work.',
      image: "/images/TempWebCap.PNG",
      url: 'https://example.com/project2',
      githubUrl: 'https://github.com/AlexSkillman10/PortSite'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is the third project',
      image: 'https://via.placeholder.com/200x200',
      url: 'https://example.com/project3',
      githubUrl: 'https://github.com/example/project3'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'This is the fourth project',
      image: 'https://via.placeholder.com/200x200',
      url: 'https://example.com/project3',
      githubUrl: 'https://github.com/example/project3'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'This is the fifth project',
      image: 'https://via.placeholder.com/200x200',
      url: 'https://example.com/project3',
      githubUrl: 'https://github.com/example/project3'
    },
  ];

  return (
    <div>
      <header>
        Alex Skillman
      </header>
      <h2 className="section-header">About me</h2>
      <div className="about-container">
        <div className="about">
          <img src="https://via.placeholder.com/200x200" alt="Your Name" />
          <h2>About Me</h2>
          <p>
            Something Something Software Engineer
          </p>
        </div>
      </div>
      <h2 className="section-header">Projects</h2>
      <div className="grid-container">
        {projects.map((project) => (
          <div key={project.id} className="grid-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <a href={project.url} target="_blank" rel="noopener noreferrer">Project Details</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
