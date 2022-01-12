import React from 'react';
import classNames from 'classnames';
import './game-cover.css';

export const GameCover = ({ image = '', type }) => {
  const imageClass = classNames({
    image: true,
    'game-cover': type === 'image-m',
    'game-cover__small': type === 'image-s',
  });
  return (
    <div
      className={imageClass}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
