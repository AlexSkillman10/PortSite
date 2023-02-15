import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Gamepad to Keyboard/Mouse',
      description: 'Adds the ability to control Windows using a standard gampad, with customizable controls.',
      //image link to XboxGitCap.png in the public folder
      image: 'XboxGitCap.png',
      url: 'https://github.com/AlexSkillman10/XBOXtoKeyMouse',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is the second project',
      image: 'https://via.placeholder.com/200x200',
      url: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Project 2',
      description: 'This is the second project',
      image: 'https://via.placeholder.com/200x200',
      url: 'https://example.com/project2',
    },
  ];

  return (
    <div>
      <header>
        Alex Skillman
      </header>
      <div className="about-container">
        <div className="about">
          <img src="https://via.placeholder.com/200x200" alt="Your Name" />
          <h2>About Me</h2>
          <p>
            Something Something Software Engineer
          </p>
        </div>
      </div>
      <div className="grid-container">
        {projects.map((project) => (
          <div key={project.id} className="grid-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
