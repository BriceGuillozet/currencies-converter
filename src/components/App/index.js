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
  }

  toggle = () => {
    console.log(this.state);
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    const { opened } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggler
          open={opened}
          toggle={this.toggle}
        />
        {opened && <Currencies currenciesList={currenciesList} />}
        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}

// // == Composant
// const Converter = () => (
//   <div className="converter">
//     <Header baseAmount={1} />
//     {
//       true && <Currencies currenciesList={currenciesList} />
//     }
//     <Amount value={1.09} currency="United States Dollar" />
//   </div>
// );

// == Export
export default Converter;
