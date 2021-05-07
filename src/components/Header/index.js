import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ baseAmount }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">{baseAmount} {baseAmount > 1 ? 'euros' : 'euro'}</p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
