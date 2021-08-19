import React, { useContext } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import CartContext from '../../context/CartContext';

const Header = () => {
  const { pathname } = useLocation();
  let title = '';
  const { carts } = useContext(CartContext);

  if (pathname === '/') title = 'shop';
  if (pathname === '/about') title = 'About';
  if (pathname === '/blog') title = 'Blog';
  if (pathname === '/contact') title = 'Contact';
  if (pathname.includes('product')) title = 'shop';

  return (

    <div className="header">
      <div className="Container">
        <Navbar />
        <div className="Cart">
          <h4>{carts.length}</h4>
          <MdShoppingCart />
        </div>
      </div>

      <h3>{title}</h3>
    </div>
  );
};
export default Header;
