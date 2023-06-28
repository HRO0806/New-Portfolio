import React from 'react';
import './About.css';
import Spi from '../../images/self-portrait.jpg';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function About () {
  return(
    <div label="about">
       <div className={Card} id='big-container'>
          <img src={Spi} alt="self portrait"></img>
          <div className={Card} style={{marginTop: '45px'}}>
            <h2 className={'bio-title'}>Bio</h2>
            <p className={'bio'}>
            My name is Henry Olson, I am a web developer from Minnesota who is passionate about building sharp and polished 
            user interfaces. I have a deep interest in web development, as I am naturally 
            curious. I have been trained to use tools such as HTML, CSS, JavaScript, 
            Bootstrap, Bulma, Node.js, express.js, REACT, and HandleBars. I have recently 
            graduated from the University of Minnesota's coding Bootcamp. I have learned 
            a lot through this experience and have become both a better developer and 
            person because of it. Through this Bootcamp, I have been trained as a 
            full-stack developer. I showed that I am a team player during this program, 
            as we had three assignments where we worked as a group. I am also very flexible
            and open to learning and trying new things. I heavily value the input of 
            others as I think bringing in other perspectives from people that you trust 
            creates a better end product.
            </p>
          </div>
       </div>
    </div>
  )
}

export default About;