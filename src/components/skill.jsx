import React from 'react';


const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-content">
        <div className="skills-category">
          <h2>Programming Languages</h2>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Web Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Databases</h2>
          <ul>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
