import { string, arrayOf, shape } from 'prop-types';
import React from 'react';

import { Col, Row, Typography } from 'antd';

import { Column, MatrixLayout } from './QuoteOptionsLayout';

const { Text } = Typography;

const PremiumItem = ({ premium }) => (
  <Column>
    <div>{premium || 'N/A'}</div>
  </Column>
);

PremiumItem.propTypes = {
  premium: string
};

const Premiums = ({ quoteOptionsMatrix }) => {
  const Title = () => (
    <Row justify='center'>
      <Text strong>Premium</Text>
    </Row>
  );

  const PremiumSelectMatrix = () => (
    <MatrixLayout matrixOfProps={quoteOptionsMatrix} Component={PremiumItem} />
  );

  return (
    <div>
      <Title />
      <Row>
        <Col>
          {' '}
          <div style={{ opacity: 0 }}>n</div>
        </Col>
      </Row>
      <Row>
        <div />
      </Row>
      <PremiumSelectMatrix />
    </div>
  );
};

Premiums.propTypes = {
  quoteOptionsMatrix: arrayOf(
    shape({
      premium: string
    })
  )
};

export default Premiums;
