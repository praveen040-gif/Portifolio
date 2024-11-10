import React from 'react';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <h1 className="main-heading">Gangisetty Durga Praveen</h1>
      <p className="subtext">Aspiring Software Developer with a Passion for Learning
</p>
      <div className="button-group">
        <a href="https://github.com/praveen040-gif" className="btn github-btn" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="/assets/Gangisetty_Durga_Praveen_.pdf" download className="btn resume-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
