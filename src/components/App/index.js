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
    selectedCurrency: 'Australian Dollar',
    filter: '',
  };

  componentDidMount = () => {
    this.updatePageTitle();
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.toggle();
      }
    });
  };

  componentDidUpdate = () => {
    this.updatePageTitle();
  };

  updatePageTitle = () => {
    const { selectedCurrency } = this.state;
    document.title = `Euro -> ${selectedCurrency}`;
  };

  toggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  calculate = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const currencyObject = currenciesList.find(
      (currencyInArray) => currencyInArray.name === selectedCurrency,
    );
    const calculated = parseFloat(
      (baseAmount * currencyObject.rate).toFixed(2),
      10,
    );
    if (Number.isNaN(calculated)) {
      return 0;
    }
    return calculated;
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

  handleFilterChange = (inputText) => {
    this.setState({
      filter: inputText,
    });
  };

  render() {
    const {
      opened, baseAmount, selectedCurrency, filter,
    } = this.state;

    const filteredCurrencies = currenciesList.filter(
      (currencyObject) => currencyObject.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggler open={opened} toggle={this.toggle} />
        {opened && (
          <Currencies
            filterText={filter}
            selectedCurrency={selectedCurrency}
            currenciesList={filteredCurrencies}
            onCurrencyChange={this.handleChangeCurrency}
            onFilterChange={this.handleFilterChange}
          />
        )}
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

export default Converter;
