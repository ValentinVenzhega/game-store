import React from 'react';
import { Link } from 'react-router-dom';

import { CartBlock } from '../cart-block';

import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link
          to="/react-game/"
          className="header__store-title">
          Game Store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
