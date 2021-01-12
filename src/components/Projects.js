import React, { useState } from 'react';
import '../css/main.css'
import '../css/projects.css'
import Fade from 'react-reveal/Fade';
import cambium1 from '../images/cambium-carbon-website.png';
import cambium2 from '../images/cambium-carbon-website-2.png';
import cambium3 from '../images/cambium-carbon-website-3.png';
import left_border from '../images/project-image-border-left.png';
import right_border from '../images/project-image-border-right.png';
import next_icon from '../images/next.png';
import previous_icon from '../images/previous.png';

export default function Projects() {
    const [projectNum, setProjectNum] = useState(0);
    const project1Array = [cambium1, cambium2, cambium3];

    function ChangeProjectNum(command) {
        if (command === 'previous' && projectNum > 0) {
            document.getElementById("project-number-" + projectNum).classList.add("project-number-larger");
            document.getElementById("project-number-" + projectNum).classList.remove("project-number-current");
            document.getElementById("project-number-" + (parseInt(projectNum)-1)).classList.add("project-number-current");
            document.getElementById("project-number-" + (parseInt(projectNum)-1)).classList.remove("project-number-smaller");

            if (projectNum-1 === 0) {
                document.getElementById('previous-button').style.opacity = '0';
                document.getElementById('previous-button').disabled = 'true';
            }
            if (projectNum-1 < 2) {
                document.getElementById('next-button').style.opacity = '1';
                document.getElementById('next-button').disabled = 'false';
            }

            setProjectNum(projectNum-1);
        }

        if (command === 'next' && projectNum < 2) {
            document.getElementById("project-number-" + projectNum).classList.add("project-number-smaller");
            document.getElementById("project-number-" + projectNum).classList.remove("project-number-current");
            document.getElementById("project-number-" + (parseInt(projectNum)+1)).classList.add("project-number-current");
            document.getElementById("project-number-" + (parseInt(projectNum)+1)).classList.remove("project-number-larger");

            if (projectNum+1 > 0) {
                document.getElementById('previous-button').style.opacity = '1';
                document.getElementById('previous-button').disabled = 'false';
            }
            if (projectNum+1 === 2) {
                document.getElementById('next-button').style.opacity = '0';
                document.getElementById('next-button').disabled = 'true';
            }

            setProjectNum(projectNum+1);
        }
    }

    return (
        <div className='projects-wrapper' id='projects'>
            <div className='section-heading-wrapper'>
                <h1>Projects</h1>
                <div className='section-heading-underline'></div>
            </div>

            <Fade>
                <div className='project-screen-wrapper'>
                    <div className='project-screen-left-wrapper'>
                        <h2>Cambium Carbon Website</h2>
                        <p>
                            Built the official website of Cambium Carbon to spread their message and showcase their
                            products for a meaningful contribution to combat climate change.
                        </p>

                        <p>
                            Played a role in making design decisions and a key role in translating wireframes from
                            Figma into code. I also self-taught AWS and SEO in the process and continued to support
                            the website through SEO research to gain more traffic.
                        </p>

                        <p>
                            Key technologies: AWS | SEO | React | JavaScript | SQL | Figma
                        </p>
                    </div>
                    <div className='project-screen-right-wrapper'>
                        <div className='project-image-wrapper'>
                            <img className='project-image-wrapper-left-border' src={left_border} alt='left border for project screen'/>
                            <div className='project-image'>
                                <img src={project1Array[projectNum]} alt='Cambium Carbon Website thumbnail'/>
                            </div>
                            <img className='project-image-wrapper-right-border' src={right_border} alt='right border for project screen'/>
                        </div>
                        <div className='project-image-number-wrapper'>
                            <img id='previous-button' src={previous_icon} alt='next arrow' onClick={() => ChangeProjectNum('previous')}/>
                            <div className='project-image-number'>
                                <p id='project-number-0' className='project-number-current'>1</p>
                                <p id='project-number-1' className='project-number-larger'>2</p>
                                <p id='project-number-2' className='project-number-larger'>3</p>
                                <p id='project-number-3' className='project-number-larger'>4</p>
                            </div>
                            <img id='next-button' src={next_icon} alt='next arrow' onClick={() => ChangeProjectNum('next')}/>
                        </div>

                        <div className='project-navigation-buttons-wrapper'>
                            <a href="https://master.dq9toxzabccma.amplifyapp.com/" target='_blank' rel="noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}