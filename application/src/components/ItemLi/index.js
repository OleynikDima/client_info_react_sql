import React from 'react';

const ItemLi = ({ items }) => {
  const { imgUrl, title, text } = items;
  return (
    <li className="section-main__item">
      <img src={imgUrl} alt={title} className="section-main__item-img" />
      <p className="section-main__item-title"> {title}</p>
      <p className="section-main__item-text"> {text}</p>
    </li>
  );
};

export default ItemLi;
