import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, handleClick = () => { }, ...props}) => (
  <button onClick={handleClick} className="button" {...props}>{children}</button>)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};
export default Button;
