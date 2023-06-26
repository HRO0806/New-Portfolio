import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return(
    <div label="portfolio" className="portfolio">
            <div className='portfolio-title-container'>
                <h1 className='portfolio-title'>Portfolio</h1>
            </div>
            <ul className='portfolio-list'>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Henry-Chat" target="_blank">
                            <div className='project' id='social'>
                                <div className='title-container'>
                                    <h2 className='Project-title'>Henry Chat</h2>
                                </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://hro0806.github.io/Password-generator/" target="_blank">
                        <div className='project' id='password'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Password Generator</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/Regex-tutorial" target="_blank">
                        <div className='project' id='regex'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Regex tutorial</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/HRO0806/portfolio-generator" target="_blank">
                        <div className='project' id='portfolio-image'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Portfolio Generator</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://hro0806.github.io/git-it-done/" target="_blank">
                        <div className='project' id='coding'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Git it done</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://hro0806.github.io/text-to-speach/" target="_blank">
                        <div className='project' id='zoo'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Computer Mouth</h2>
                            </div>
                        </div>
                     </a>
                </li>
                <li>
                    <a className='portfolio-anchor' href="https://github.com/cespejo1/contractorpro" target="_blank">
                        <div className='project' id='team'>
                            <div className='title-container'>
                                <h2 className='Project-title'>Contractor Pro</h2>
                            </div>
                        </div>
                     </a>
                </li>                        
            </ul>
        </div>
  )
}

export default Portfolio;