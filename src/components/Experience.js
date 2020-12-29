import React from 'react';
import cambium_logo from '../images/cambium-logo.png';
import ucm_logo from '../images/ucmo-logo.png';
import ccsc_logo from '../images/ccsc-logo.png';

export default function Experience() {
    return (
        <div className='experience-wrapper'>
            <h1>Experience</h1>

            <div className='experience-content-wrapper'>
                <div className='experience-nav'>
                    <div className='experience-nav-selection'>
                        <img src={cambium_logo} alt="Cambium Carbon logo"/>
                    </div>
                    <div className='experience-nav-selection'>
                        <img src={ucm_logo} alt="University of Central Missouri logo"/>
                    </div>
                    <div className='experience-nav-selection'>
                        <img src={ccsc_logo} alt="Consortium for Computing Sciences in Colleges logo"/>
                    </div>
                </div>
                <div className='experience-card'>
                    <div className='experience-card-header'>
                        <div className='experience-card-header-title'>
                            <h2>Cambium Carbon</h2>
                            <p>July 2020 - Present</p>
                        </div>
                        <div className='experience-card-header-image'>
                            <img src={cambium_logo} alt="Cambium Carbon logo"/>
                        </div>
                    </div>
                    <div className='experience-card-content'>
                        <ul>
                            <li>Constructed the official website from design to deployment through Agile development</li>
                            <li>Collaborated with team members and designers to ensure the requirements and user experience of the E-commerce platform</li>
                            <li>Self-taught crucial technologies such as AWS and Search Engine Optimization</li>
                            <li>Improved website visibility and traffic with more than 150 new users monthly through SEO research and implementation</li>
                            <li>Performed maintenance and timely bug fixes on the website</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}