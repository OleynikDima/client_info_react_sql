import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import mobileImg from '../../assets/images/Mobile/mobile.png';
const Header = () => {
  return (
    <header className="header">
      <nav className="header-navigation container">
        <div>
          <p className="logo-text">AppCo</p>
        </div>
      </nav>
      <div className="header-container container">
        <div className="container header-container__text">
          <h1>
            {' '}
            <span>Brainstorming</span> for desired perfect Usability
          </h1>
          <p>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
          <NavLink className="link-view" to="/users">
            {' '}
            Views Stats{' '}
          </NavLink>
        </div>
        <div className="header-container__img-mobile">
          <img src={mobileImg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
