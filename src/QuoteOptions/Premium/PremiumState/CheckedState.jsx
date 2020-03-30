import { string } from 'prop-types';
import React from 'react';
import { styles } from './styles';
import image from '../images/checked-premium.svg';

const CheckedState = ({ text }) => {
  const style = styles({ image });
  return <div style={style}>{text}</div>;
};

export default CheckedState;

CheckedState.propTypes = {
  text: string
};
