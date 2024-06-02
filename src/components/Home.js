import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to My Personal Website</h1>
        <p>Hello! My name is [Your Name].</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a [Your Profession] with a passion for [Your Interests].</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>[Your Education Details]</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
      <section>
        <h2>Links</h2>
        <ul>
          <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
