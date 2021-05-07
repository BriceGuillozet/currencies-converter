/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './styles.css';

import Amount from '../Amount';
import Header from '../Header';
import Currencies from '../Currencies';
import Toggler from '../Toggler';

import currenciesList from '../../data/currencies';

class Converter extends React.Component {
  state = {
    opened: true,
    baseAmount: 1,
    selectedCurrency: 'United States Dollar',
  };

  toggle = () => {
    console.log(this.state);
    this.setState({
      opened: !this.state.opened,
    });
  };

  // eslint-disable-next-line padded-blocks
  // eslint-disable-next-line arrow-body-style
  calculate = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const currencyObject = currenciesList.find(
      (currencyInArray) => currencyInArray.name === selectedCurrency,
    );
    const calculated = (baseAmount * currencyObject.rate).toFixed(2);
    if (Number.isNaN(calculated)) {
      return 0;
    }
    return parseFloat(calculated, 10);
  };

  changeBaseValue = (newBaseValue) => {
    this.setState({
      baseAmount: newBaseValue,
    });
  };

  handleChangeCurrency = (newCurrencyName) => {
    this.setState({
      selectedCurrency: newCurrencyName,
    });
  };

  render() {
    const { opened, baseAmount, selectedCurrency } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggler open={opened} toggle={this.toggle} />
        {opened && (
          <Currencies
            currenciesList={currenciesList}
            onCurrencyChange={this.handleChangeCurrency}
          />
        )}
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

export default Converter;
