import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({
  currenciesList, selectedCurrency, onCurrencyChange, onFilterChange,
}) => (
  <div className="currencies">
    <div className="currencies-title">
      <input
        type="text"
        className="currencies-search"
        placeholder="Find Currency"
        onChange={(evt) => {
          const inputText = evt.target.value;
          onFilterChange(inputText);
        }}
      />
    </div>
    <ul className="currencies-list">
      {
        currenciesList.map((currencyObject) => (
          <li
            key={currencyObject.name}
            className={currencyObject.name === selectedCurrency ? 'currency currency--active' : 'currency'}
            onClick={() => {
              onCurrencyChange(currencyObject.name);
            }}
          >
            { currencyObject.name }
          </li>
        ))
      }
    </ul>
  </div>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Currencies;
