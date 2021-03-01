import React from 'react';
import FormMail from '../FormMail';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="form-mail">
        <FormMail />
      </div>
      <div className="footer-box container">
        <p className="footer-box__logo">AppCo</p>
        <p className="footer-box__text">All rights reserved by ThemeTags</p>
        <p className="footer-box__text">Copyrights © 2019. </p>
      </div>
    </footer>
  );
};

export default Footer;
