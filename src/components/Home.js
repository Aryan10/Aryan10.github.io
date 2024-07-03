import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials, badges } from './data/socials';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="left-column">
          <header className="home-header">
            <h1 class="first-words">Hey there,<br></br>I'm Shivam <a class="last-name" href="/">Aryan</a>!</h1>
          </header>
          <section className="home-section">
            <h2 className='default-cursor'>About Me</h2>
            <p className="about-me">An aspiring developer who loves coding solutions.
            <br></br>I am into Competitive Programming, Machine Learning,&nbsp;
            <br class="hidden-mobile"></br>Data Science, Software, App and Web Development!</p>
          </section>
          <section className="home-section">
            <h2 className="default-cursor">Education</h2>
            <p><div class="education-first">Graduating in B. Tech @ NIT Allahabad | 2023-2027</div>
            <div class="education-second">Computer Science & Engineering</div>
            <div class="education-second"><Link to="/education">9.41 CPI</Link> (as of 1st Year) </div>
            </p>
          </section>
        </div>
        <div className="right-column">
          <section className="home-section">
            <h2 className="default-cursor">Skills</h2>
            <ul className="skillz">
              <li>C/C++</li>
              <li>Python</li>
              <li>MERN Stack</li>
              <li>Github</li>
              <Link to="/skills">View all</Link>
            </ul>
          </section>
          <section className="home-section mobile-only">
            <h2 className="default-cursor">Projects</h2>
            <Link to="/projects">View all</Link>
          </section>
          <section className="home-section">
            <h2 className="default-cursor">Connect</h2>
            <Tooltip place="top" type="dark" effect="float"/>
            <ul className="icons-list">
              {Object.keys(socials).map(function (key, index) {
                const item = socials[key];
                console.log(item);
                return (
                  <li>
                    <Tooltip id={key} />
                    <a
                      href={item["href"]}
                      data-tooltip-id={key}
                      data-tooltip-content={item["tooltip"]}
                      data-tooltip-place="top" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={item["icon"]} size="2x" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {Object.keys(badges).map(function (key, index) {
                const item = badges[key];
                return (
                  <li>
                    <Tooltip id={key} />
                    <a
                      href={item["href"]}
                      data-tooltip-id={key}
                      data-tooltip-content={item["tooltip"]}
                      data-tooltip-place="top" target="_blank" rel="noopener noreferrer">
                        <img alt={key} src={item["src"]}></img>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="home-section">
            <h2 className="default-cursor">Contact</h2>
            <a href="mailto:aryan.shivam.10@gmail.com">aryan.shivam.10@gmail.com</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;