import React from "react";

import { Row, Typography, Col } from "antd";
const { Text } = Typography;

import {
  Column,
  MatrixLayout,
  QuoteOptionsRowLayout
} from "./QuoteOptionsLayout";

const PremiumItem = ({ premium }) => (
  <Column>
    <div>{premium || "N/A"}</div>
  </Column>
);

const Premiums = ({ quoteOptionsMatrix }) => {
  const Title = () => (
    <Row justify="center">
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
          {" "}
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

export default Premiums;
