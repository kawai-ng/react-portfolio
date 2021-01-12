import React from 'react';
import '../css/main.css'

export default function Contact() {
    return (
        <div className='contact-wrapper' id='contact'>
            <h1>Contact</h1>

            <div className='contact-content-wrapper'>
                <p>I'm open to opportunities to improve my skill set and contribute to projects that are bigger than myself.</p>
                <p>Let me know if you would like to work with me!</p>
                <div className='contact-content-link-wrapper'>
                    <a href='mailto: kawai.ng@hotmail.com'>Let's Talk</a>
                </div>
            </div>
        </div>
    )
}