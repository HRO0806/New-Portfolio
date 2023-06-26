import React from 'react';
import './Contact.css';

function Contact() {
  return(
    <div label="contact" className={'big-contact-container'}>
      <div className={'contact-title-container'}>
        <h2 className={'contact-title'}>Contact Me</h2>
      </div>
      <div className={'container-container'}>
        <div className={'contact-form-container'}>
          <p className={'phone-number'}><strong>My phone number:</strong> 651-492-3132</p>
          <p className={'phone-number'}><strong>My Email:</strong> henryolson84@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;