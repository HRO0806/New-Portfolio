import React from 'react';
import './Resume.css';
import resume from '../../assets/my-resume.pdf';
import google from '../../images/google-docs.png';
import download from '../../images/download.png';

function Resume() {
  return(
    <div label="resume">
    <div className="resume-container">
        <div className="resume">
            <div><a className="resume-link" href="https://docs.google.com/document/d/1MUZPVHr3JMrAvraxAKDad3ogmgdsYhFJXLmFA5aW6zE/edit?usp=sharing" 
            target='_blank'>
                <h2 className="resume-title">Click here to see my resume</h2>
                <img src={google} className='image'></img>
            </a>
        </div>
        </div>
        <div className='resume'>
            <div>
                <a
                    className="resume-link"
                    href={resume}
                    target='_blank'
                    rel="noopener noreferrer"
                    download>
                    <h2 className='resume-title'>Click here to download my Resume</h2>
                    <img src={download} className='image'></img>        
                </a>
        </div>
        </div>
    </div>
</div>
  )
}

export default Resume;