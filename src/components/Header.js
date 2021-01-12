import React, { useState, useEffect } from 'react';

export default function Header() {
    const [sticky, setSticky] = useState(1000);
    const [lastOffset, setLastOffset] = useState(0);

    window.onscroll = function() {
        if (document.getElementById('header') !== null) {
            let navbar = document.getElementById('header');
            let newOffset = window.pageYOffset;

            if (window.pageYOffset >= sticky && newOffset < lastOffset) {
                navbar.classList.add('header-fixed');
                navbar.classList.remove('header-hide');
                setLastOffset(newOffset);
            }
            else if (window.pageYOffset >= sticky && newOffset > lastOffset){
                navbar.classList.add('header-hide');
                navbar.classList.remove('header-fixed');
                setLastOffset(newOffset);
                console.log('we in here!')
            }
            else {
                navbar.classList.remove('header-hide');
                navbar.classList.remove('header-fixed');
                setLastOffset(newOffset);
            }
        }
        
    };
    
    useEffect(() => {
        setSticky(document.getElementById('header').offsetTop)
    }, [])

    return (
        <div id='header' className='header-wrapper'>
            <div className='header-list'>
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
            <button onClick={() => window.open('https://drive.google.com/file/d/1pa3ampyJAKshOPVRCzip7dKmfvsBjO_T/view?usp=sharing', '_blank')}>Resume</button>
        </div>
    )
}