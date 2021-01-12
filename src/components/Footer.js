import React from 'react';
import '../css/main.css'
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-logo.png'

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content-icons-wrapper'>
                <img src={linkedin} alt='LinkedIn logo' onClick={() => window.open('https://www.linkedin.com/in/kawai-ng/','_blank')}/>
                <img src={github} alt='GitHub logo' onClick={() => window.open('https://github.com/kawai-ng','_blank')}/>
            </div>

            <div className='footer-divider'></div>

            <div className='footer-content-wrapper'>
                <p>Developed by Ka Wai Ng</p>
            </div>
        </div>
    )
}