import { number, bool } from 'prop-types';
import React from 'react';
import CheckedState from './CheckedState';
import UncheckedState from './UncheckedState';
import DisabledState from './DisabledState';

const PremiumState = ({ selected, enabled, premium }) => {
  if (!enabled) return <DisabledState />;
  if (selected) return <CheckedState text={premium} />;

  return <UncheckedState text={premium} />;
};

export default PremiumState;

PremiumState.propTypes = {
  premium: number,
  enabled: bool,
  selected: bool
};
