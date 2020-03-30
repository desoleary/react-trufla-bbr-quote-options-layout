import React from 'react';
import { string, bool } from 'prop-types';
import { isNil } from 'lodash';
import PremiumState from './PremiumState';
import { Column } from '../QuoteOptionsLayout';

const Premium = ({ premium, selected }) => (
  <Column>
    <PremiumState
      premium={premium}
      enabled={!isNil(premium)}
      selected={selected}
    />
  </Column>
);

Premium.propTypes = {
  premium: string,
  selected: bool
};

export default Premium;
