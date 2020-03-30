import React from "react";

import { Row, Col } from "antd";

export const Column = ({ children }) => <Col span={6}>{children}</Col>;

export const Content = ({ content }) => (
  <Column>
    <div>{content}</div>
  </Column>
);

export const MatrixLayout = props => {
  const { matrixOfProps, Component } = props;

  return (
    <div>
      {matrixOfProps.map(innerArrayProps => {
        return (
          <Row>
            {innerArrayProps.map(itemProps => {
              return <Component {...itemProps} />;
            })}
          </Row>
        );
      })}
    </div>
  );
};

export const QuoteOptionsRowLayout = ({ first, second }) => (
  <Row>
    <Col span={8}>{first}</Col>
    <Col span={16}>{second}</Col>
  </Row>
);
