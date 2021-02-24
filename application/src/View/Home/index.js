import React from 'react';
import Header from '../../components/Header';
import data from './li-sours';
import ItemLi from './item-li';
import './home.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="section-main container">
        <div className="section-main__wrapper">
          <h3 className="section-main__title ">
            Why{' '}
            <span className="sapn-b">
              small business owners <br />
              love{' '}
            </span>
            AppCo?
          </h3>
          <p className="section-main__text">
            Our design projects are fresh and simple and will benefit your
            business
            <br /> greatly. Learn more about our work!
          </p>
        </div>
        <ul className="section-main__box-info">
          {data.map((item, ind) => {
            return <ItemLi key={ind} items={item} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default HomePage;
