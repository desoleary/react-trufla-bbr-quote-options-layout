import React from 'react';
import { styles } from './styles';
import image from '../images/disabled-premium.svg';

const DisabledState = () => {
  const style = styles({ image });
  return <div style={style}>N/A</div>;
};

export default DisabledState;
