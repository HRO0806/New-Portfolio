import React from 'react';
import Spi from '../../images/self-portrait.jpeg';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
    return(
        <div label="about">
            <div className={Card} id='big-container'>
                <img src={Spi} alt="self portrait"></img>
                <div className={Card} style={{marginTop: '45px'}}>
                    <h2 className={'bio-title'}>Bio</h2>
                    <p className={'bio'}> 
                    I am a front-end developer from Minnesota who is passionate about 
                    building sharp and polished user interfaces. I have a deep interest in 
                    web development, specifically front-end development. I have been 
                    trained to use tools such as HTML, CSS, JavaScript, Bootstrap, Bulma, 
                    Node.js, express.js, REACT, and HandleBars (just name a few). Part of 
                    the reason that I love web development is because I am a naturally 
                    curious person. I really love front-end development in particular because 
                    of how it engages both creativity and critical thinking. I am currently 
                    on track to graduate from the University of Minnesota's coding bootcamp. 
                    I have learned a lot through this experience and have become both a 
                    better developer and person because of it. Through this bootcamp 
                    I have been trained as a full stack developer. I think this sets me 
                    apart as a frontend developer as it means I can communicate well with 
                    backend developers.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;