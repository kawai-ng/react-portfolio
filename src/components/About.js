import React from 'react';
import Pulse from 'react-reveal/Pulse';
import kawai_headshot from '../images/kawai-pic.jpg';

export default function About() {
    return (
        <div className='about-wrapper'>
            <div className='section-heading-wrapper'>
                <h1>About</h1>
                <div className='section-heading-underline'></div>
            </div>

            <div className='about-content-wrapper'>
                <div className='about-image-wrapper'>
                    <Pulse>
                        <img src={kawai_headshot} alt='Headshot of Ka Wai'/>
                    </Pulse>
                    <div className='about-image-decoration'></div>
                </div>
                <div className='about-text-wrapper'>
                    <p>
                        Hello! 你好！Salam Sejahtera! <br/>
                        My name is Ka Wai and I hail from the beautiful city of Kuala Lumpur, Malaysia.
                    </p>
                    <p>
                        Throughout my life, I have always been fascinated by technology and how things worked
                        behind the scenes to deliver a perfect user experience. I find joy in problem-solving and
                        creating applications that are simple, modern and gets the job done. My other interests
                        include web and mobile development, game programming, and artificial intelligence.
                    </p>
                    <p>
                        On a personal note, I enjoy playing video games, dancing and discovering new music in my 
                        down time. 
                    </p>
                    <p>
                        I'm currently a full stack developer at Cambium Carbon and a college graduate with a 
                        BS in Software Engineering and a minor in Cybersecurity from the University of Central 
                        Missouri. I'm actively seeking opportunities where I grow as an individual, improve my
                        skill set, and make meaningful contributions to the projects and groups I work with.
                    </p>
                </div>
            </div>
        </div>
    )
}