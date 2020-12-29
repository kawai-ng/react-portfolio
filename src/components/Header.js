import React from 'react';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-title'>
                <h1>Ka Wai Ng</h1>
            </div>
            <div className='header-list'>
                <a href='/'>About</a>
                <a href='/'>Experience</a>
                <a href='/'>Skills</a>
                <a href='/'>Projects</a>
                <a href='/'>Contact</a>
            </div>
        </div>
    )
}