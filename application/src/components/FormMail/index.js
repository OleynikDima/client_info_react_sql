import React from 'react';
import './form-mail.scss';
const FormMail = () => {
  return (
    <form className="form">
      <div className="form-box">
        <input
          type="email"
          className="form-box__input"
          placeholder="Enter your email"
        />
        <button className="form-box__button">Subscribe</button>
      </div>
    </form>
  );
};
export default FormMail;
