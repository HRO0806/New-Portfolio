import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer>
      <div className={'link-container'}>
        <p><a className='footer-item' href="https://github.com/HRO0806" target='_blank'>My Github</a></p>
        <p><a className='footer-item' href='https://www.linkedin.com/in/henry-olson-4b1169231/' target='_blank'>My Linkedin</a></p>
        <p><a className='footer-item' href='https://www.purewow.com/food/types-of-peppers' target='_blank'>Peppers</a></p>
      </div>
    </footer>
  );
}

export default Footer;