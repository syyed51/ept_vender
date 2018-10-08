import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from './menuButton';

const Header = props => console.log({ props }) || (
  <div className="masthead">
    <MenuButton />

    <h1> Oxford Library inc. </h1>
  </div>
);
Header.defaultProps = {
  languageCode: 'en',
};
Header.propTypes = {
  languageCode: PropTypes.string,
  toogleAction: PropTypes.func,
};
export default Header;
