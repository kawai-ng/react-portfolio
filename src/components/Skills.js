import React from 'react';
import programming_gif from '../images/programming-edited.gif';

export default function Skills() {
    return (
        <div className='skills-wrapper'>
            <div className='section-heading-wrapper'>
                <h1>Skills</h1>
                <div className='section-heading-underline'></div>
            </div>

            <div className='skills-content'>
                <div className='programming-languages-wrapper'>
                    <div className='programming-languages-title-wrapper'>
                        <img src={programming_gif} alt="programming language animation"/>
                        <h2>Programming<br/>Languages</h2>
                    </div>
                    <div className='programming-languages-bars-wrapper'>
                        <div className='programming-languages-individual-bar-wrapper'>
                            <div className="programming-languages-individual-bar-title">JavaScript</div>
                            <div className="programming-languages-individual-bar-colored"><span className="percent-90-1">&nbsp;</span></div>
                            <div className="programming-languages-individual-bar-percentage">90%</div>
                        </div>

                        <div className='programming-languages-individual-bar-wrapper'>
                            <div className="programming-languages-individual-bar-title">Java</div>
                            <div className="programming-languages-individual-bar-colored"><span className="percent-90-2">&nbsp;</span></div>
                            <div className="programming-languages-individual-bar-percentage">90%</div>
                        </div>

                        <div className='programming-languages-individual-bar-wrapper'>
                            <div className="programming-languages-individual-bar-title">SQL</div>
                            <div className="programming-languages-individual-bar-colored"><span className="percent-80">&nbsp;</span></div>
                            <div className="programming-languages-individual-bar-percentage">80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}