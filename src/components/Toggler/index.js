import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Toggler = ({ open, toggle }) => {
  const cssClassNames = open ? 'toggle toggle--open' : 'toggle';
  return (
    <button
      className={cssClassNames}
      onClick={toggle}
      type="button"
    >
      =
    </button>
  );
};

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;
