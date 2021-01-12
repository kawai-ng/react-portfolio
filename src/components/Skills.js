import React from 'react';
import '../css/main.css'
import '../css/skills.css'
import Fade from 'react-reveal/Fade';
import file_icon from '../images/file-icon.png';

export default function Skills() {
    return (
        <div className='skills-wrapper' id='skills'>
            <div className='section-heading-wrapper'>
                <h1>Skills</h1>
                <div className='section-heading-underline'></div>
            </div>

            <div className='skills-content'>
                <div className='programming-languages-wrapper'>
                    <Fade left>
                        <div className='programming-languages-title-wrapper'>
                            <div className='programming-languages-title-inside-wrapper'>
                                <p className='programming-language-typetext-1'>Programming</p>
                                <span className='blinking-caret-1'>|</span>
                                <br></br>
                                <p className='programming-language-typetext-2'>Languages</p>
                                <span className='blinking-caret-2'>|</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
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

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Python</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-65">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">65%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">C++</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-60">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">60%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Ruby</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-50-1">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">50%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">C</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-50-2">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">50%</div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className='frameworks-wrapper'>
                    <Fade left>
                        <div className='frameworks-title-wrapper'>
                            <div className='frameworks-title-inside-wrapper'>
                                <div className='frameworks-title-screen-1'>
                                    <div className='frameworks-title-screen-1-top'>
                                        <div className='frameworks-title-screen-1-top-left'></div>
                                        <div className='frameworks-title-screen-1-top-right'>
                                            <div className='frameworks-title-screen-1-top-right-line'></div>
                                            <div className='frameworks-title-screen-1-top-right-line'></div>
                                            <div className='frameworks-title-screen-1-top-right-line'></div>
                                            <div className='frameworks-title-screen-1-top-right-line'></div>
                                        </div>
                                    </div>
                                    <div className='frameworks-title-screen-1-bottom'>
                                        <p>Web & Application<br/>Frameworks</p>
                                    </div>
                                </div>
                                <div className='frameworks-title-screen-2'>
                                    <div className='frameworks-title-screen-2-top'>
                                        <div className='frameworks-title-screen-2-top-left'>
                                            <img src={file_icon} alt="Icon of folder"/>
                                        </div>
                                        <div className='frameworks-title-screen-2-top-right'>
                                            <div className='frameworks-title-progressbar'>
                                                <div className='frameworks-title-progressbar-colored'>&nbsp;</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='frameworks-title-screen-1-bottom'>
                                        <p>Web & Application<br/>Frameworks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className='programming-languages-bars-wrapper'>
                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">React</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-90-2">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">90%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Spring</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-80">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">80%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Selenium</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-70">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">70%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Django</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-40-1">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">40%</div>
                            </div>

                            <div className='programming-languages-individual-bar-wrapper'>
                                <div className="programming-languages-individual-bar-title">Ruby on Rails</div>
                                <div className="programming-languages-individual-bar-colored"><span className="percent-40-2">&nbsp;</span></div>
                                <div className="programming-languages-individual-bar-percentage">40%</div>
                            </div>

                        </div>
                    </Fade>
                </div>

                <Fade>
                    <div className='technologies-wrapper'>
                        <h2>Other Technologies</h2>
                        <div className='technologies-row-1'>
                            <div className='technologies-status-1'>
                                <p>Status: </p>
                            </div>
                            <div className='technologies-row-1-list-wrapper'>
                                <div className='technologies-row-1-list-column'>
                                    <ul>
                                        <li>Amazon Web Services (AWS)</li>
                                        <li className='column-row-2'>Search Engine Optimization (SEO)</li>
                                        <li className='column-row-3'>Agile Methodologies</li>
                                        <li className='column-row-4'>LINUX/UNIX Environments</li>
                                        <li className='column-row-5'>JavaFX</li>
                                        <li className='column-row-6'>Java Database Connectivity (JDBC)</li>
                                        <li className='column-row-7'>Git Technologies</li>
                                    </ul>
                                </div>
                                <div className='technologies-row-1-list-column'>
                                    <ul>
                                        <li>HTML5/CSS3</li>
                                        <li className='column-row-2'>Figma</li>
                                        <li className='column-row-3'>Canva</li>
                                        <li className='column-row-4'>REST APIs</li>
                                        <li className='column-row-5'>MySQL</li>
                                        <li className='column-row-6'>JUnit Testing</li>
                                        <li className='column-row-7'>Mockito</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2>Additional Skills</h2>
                        <div className='technologies-row-1'>
                            <div className='technologies-status-1'>
                                <p>Status: </p>
                            </div>
                            <div className='technologies-row-1-list-wrapper'>
                                <div className='technologies-row-1-list-column'>
                                    <ul>
                                        <li>Computer Networking</li>
                                        <li className='column-row-2'>Game Design</li>
                                        <li className='column-row-3'>Artificial Intelligence</li>
                                        <li className='column-row-4'>Graph Theory</li>
                                    </ul>
                                </div>
                                <div className='technologies-row-1-list-column'>
                                    <ul>
                                        <li>Algorithms</li>
                                        <li className='column-row-2'>Data Structures</li>
                                        <li className='column-row-3'>Discrete Structures</li>
                                        <li className='column-row-4'>Ethical Hacking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}