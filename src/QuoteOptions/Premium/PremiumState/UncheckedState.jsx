import { string } from 'prop-types';
import React from 'react';
import { styles } from './styles';
import image from '../images/unchecked-premium.svg';

const UncheckedState = ({ text }) => {
  const style = styles({ image });
  return <div style={style}>{text}</div>;
};

export default UncheckedState;

UncheckedState.propTypes = {
  text: string
};
