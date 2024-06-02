import React from 'react';
import { Tooltip } from 'react-tooltip';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

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
            <div class="education-second">Computer Science & Engineering | First Year</div>
            <div class="education-second">CPI: 9.14 (as of 1st Sem) </div>
            </p>
          </section>
        </div>
        <div className="right-column">
          <section className="home-section">
            <h2 className="default-cursor">Skills</h2>
            <ul className="skillz">
              <li>C/C++</li>
              <li>Python</li>
              <li>Nodejs</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Github</li>
              <a href="/skills">View all</a>
            </ul>
          </section>
          <section className="home-section">
            <h2 className="default-cursor">Links</h2>
            <ul className="icons-list">
              <Tooltip id="discord-username" />
              <Tooltip id="linkedin-username" />
              <Tooltip id="codeforces-username" />
              <Tooltip id="leetcode-username" />
              <Tooltip id="github-username" />
              <li>
                <a data-tooltip-id="linkedin-username" data-tooltip-content="@ultraaryan10" data-tooltip-place="top"
                href="https://linkedin.com/in/ultraaryan10" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li>
                <a data-tooltip-id="github-username" data-tooltip-content="@Aryan10" data-tooltip-place="top"
                href="https://github.com/Aryan10" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a data-tooltip-id="discord-username" data-tooltip-content="@aryan.10" data-tooltip-place="top"
                href="https://discord.com/users/273865811133857792" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                  <Tooltip place="top" type="dark" effect="float"/>
                </a>
              </li>
              <li>
                <a data-tooltip-id="leetcode-username" data-tooltip-content="@ultraaryan10" data-tooltip-place="top"
                href="https://leetcode.com/ultraaryan10" target="_blank" rel="noopener noreferrer">
                  <img alt="" src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=avif&w=256" height="32" width="32"></img>
                </a>
              </li>
              <li>
                <a data-tooltip-id="codeforces-username" data-tooltip-content="@ultraaryan10" data-tooltip-place="top"
                href="https://codeforces.com/profile/ultraaryan10" target="_blank" rel="noopener noreferrer">
                  <img alt="" src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3521352-2944796.png?f=webp" height="32" width="32"></img>
                </a>
              </li>
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