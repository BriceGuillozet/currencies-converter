/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

// == Import
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
  }

  toggle = () => {
    console.log(this.state);
    this.setState({
      opened: !this.state.opened,
    });
  }

  // eslint-disable-next-line padded-blocks
  // eslint-disable-next-line arrow-body-style
  calculate = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const currencyObject = currenciesList.find(
      (currencyInArray) => currencyInArray.name === selectedCurrency,
    );
    return baseAmount * currencyObject.rate;
  }

  render() {
    const { opened, baseAmount, selectedCurrency } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler
          open={opened}
          toggle={this.toggle}
        />
        {opened && <Currencies currenciesList={currenciesList} />}
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

export default Converter;
