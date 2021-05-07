import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ baseAmount, onInputChange }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">
      <input
        type="number"
        defaultValue={baseAmount}
        onChange={(evt) => {
          const newValue = parseInt(evt.target.value, 10);
          onInputChange(newValue);
        }}
      />
      {baseAmount > 1 ? 'euros' : 'euro'}
    </p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Header;
