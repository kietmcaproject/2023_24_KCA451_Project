import React from 'react';
import style from '../../css/profile.module.css'

const RatingStar = ({ count }) => {
  return (
    <div className={style.rating}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
};

export default RatingStar;
