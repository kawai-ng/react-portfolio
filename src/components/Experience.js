import React from 'react';
import '../css/experience.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import cambium_logo from '../images/cambium-logo.png';
import ucm_logo from '../images/ucmo-logo.png';
import ccsc_logo from '../images/ccsc-logo.png';
import new_tab from '../images/new-tab-icon.png';

export default function Experience() {
    function toggleExperience(toggler) {
        if (toggler === "cambium") {
            document.getElementById("cambium-card").style.display = "block";
            document.getElementById("ucm-card").style.display = "none";
            document.getElementById("ccsc-card").style.display = "none";
            //document.getElementById("cambium").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15)";
            document.getElementById("cambium").style.zIndex = "5";
            //document.getElementById("ucm").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("ucm").style.zIndex = "4";
            //document.getElementById("ccsc").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("ccsc").style.zIndex = "3";
        }

        if (toggler === "ucm") {
            document.getElementById("cambium-card").style.display = "none";
            document.getElementById("ucm-card").style.display = "block";
            document.getElementById("ccsc-card").style.display = "none";
            //document.getElementById("cambium").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("cambium").style.zIndex = "4";
            //document.getElementById("ucm").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), -10px 0 4px -4px rgba(0,0,0,.15)";
            document.getElementById("ucm").style.zIndex = "5";
            //document.getElementById("ccsc").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("ccsc").style.zIndex = "3";
        }

        if (toggler === "ccsc") {
            document.getElementById("cambium-card").style.display = "none";
            document.getElementById("ucm-card").style.display = "none";
            document.getElementById("ccsc-card").style.display = "block";
            //document.getElementById("cambium").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("cambium").style.zIndex = "4";
            //document.getElementById("ucm").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), 0 -10px 4px -4px rgba(0,0,0,.15) inset";
            document.getElementById("ucm").style.zIndex = "3";
            //document.getElementById("ccsc").style.boxShadow = "10px 0 4px -4px rgba(0,0,0,.15), -10px 0 4px -4px rgba(0,0,0,.15)";
            document.getElementById("ccsc").style.zIndex = "5";
        }
    }

    return (
        <div className='experience-wrapper' id='experience'>
            <div className='section-heading-wrapper'>
                <h1>Experience</h1>
                <div className='section-heading-underline'></div>
            </div>

            <div className='experience-content-big-wrapper'>
                <Slide>
                    <div className='experience-colorful-sidebar'>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                        <div className='colorful-bar'></div><div className='colorful-bar'></div><div className='colorful-bar'></div>
                    </div>
                </Slide>
                <Fade>
                    <div className='experience-content-wrapper'>
                        <div className='experience-nav'>
                            <div className='experience-nav-selection' id='cambium' onClick={() => toggleExperience("cambium")}>
                                <div className='experience-nav-selection-border-wrapper'></div>
                                <img src={cambium_logo} alt="Cambium Carbon logo"/>
                                <div className='experience-nav-selection-overlay'>
                                    <div className='experience-nav-selection-overlay-text'>Cambium Carbon</div>
                                </div>
                            </div>
                            <div className='experience-nav-selection' id='ucm' onClick={() => toggleExperience("ucm")}>
                                <div className='experience-nav-selection-border-wrapper'></div>
                                <img src={ucm_logo} alt="University of Central Missouri logo"/>
                                <div className='experience-nav-selection-overlay'>
                                    <div className='experience-nav-selection-overlay-text'>University of Central Missouri</div>
                                </div>
                            </div>
                            <div className='experience-nav-selection' id='ccsc' onClick={() => toggleExperience("ccsc")}>
                                <div className='experience-nav-selection-border-wrapper'></div>
                                <img src={ccsc_logo} alt="Consortium for Computing Sciences in Colleges logo"/>
                                <div className='experience-nav-selection-overlay'>
                                    <div className='experience-nav-selection-overlay-text'>CCSC Midwest</div>
                                </div>
                            </div>
                        </div>

                        <div className='experience-card' id='cambium-card'>
                            <div className='experience-card-header'>
                                <div className='experience-card-header-title'>
                                    <h2>Fullstack Developer</h2>
                                    <h3>
                                        Cambium Carbon 
                                        <img className='new-tab-icon' src={new_tab} alt='opens link in new tab' onClick={() => window.open('https://www.cambiumcarbon.com/','_blank')}/>
                                    </h3>
                                    <p>July 2020 - Present</p>
                                </div>
                                <div className='experience-card-header-image'>
                                    <img src={cambium_logo} alt="Cambium Carbon logo"/>
                                </div>
                            </div>
                            <div className='experience-card-content'>
                                <p>
                                    Cambium Carbon is a social impact venture born out of the World Resources Institute and nurtured 
                                    through Yale University's Entrepreneurship Program. The aim of Cambium Carbon is to upcycle wood,
                                    build reforestation hubs, create local jobs and combat climate change.
                                </p>
                                <h2>Responsibilities:</h2>
                                <ul>
                                    <li>Constructed the official website from design to deployment through Agile development</li>
                                    <li>Collaborated with team members and designers to ensure the requirements and user experience of the E-commerce platform</li>
                                    <li>Self-taught crucial technologies such as AWS, Figma and Search Engine Optimization</li>
                                    <li>Improved website visibility and traffic with more than 150 new users monthly through SEO research and implementation</li>
                                    <li>Performed maintenance and timely bug fixes on the website</li>
                                </ul>
                            </div>
                        </div>

                        <div className='experience-card' id='ucm-card'>
                            <div className='experience-card-header'>
                                <div className='experience-card-header-title'>
                                    <h2>Computer Science Tutor</h2>
                                    <h3>University of Central Missouri</h3>
                                    <p>January 2019 - May 2020</p>
                                </div>
                                <div className='experience-card-header-image'>
                                <img src={ucm_logo} alt="University of Central Missouri logo"/>
                                </div>
                            </div>
                            <div className='experience-card-content'>
                                <h2>Responsibilities:</h2>
                                <ul>
                                    <li>Provided academic support in multiple computer science subjects such as algorithms, data structures, programming languages</li>
                                    <li>Taught study skills and best practices to excel in the respective subjects</li>
                                    <li>Assisted with university wide workshops and presentations through event setup and sharing personal experiences</li>
                                </ul>
                            </div>
                        </div>

                        <div className='experience-card' id='ccsc-card'>
                            <div className='experience-card-header'>
                                <div className='experience-card-header-title'>
                                    <h2>Consortium of Computing Sciences in College (CCSC) Midwest Participant</h2>
                                    <p>August 2018, August 2019</p>
                                </div>
                                <div className='experience-card-header-image'>
                                    <img src={ccsc_logo} alt="Consortium for Computing Sciences in Colleges logo"/>
                                </div>
                            </div>
                            <div className='experience-card-content'>
                                <ul>
                                    <li>Participated in the student programming competition where I was in a member of a team of three attempting to solve complex programming questions</li>
                                    <li>Participated in conferences where I learnt technologies such as SASS and the newest developments in artificial intelligence and machine learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}