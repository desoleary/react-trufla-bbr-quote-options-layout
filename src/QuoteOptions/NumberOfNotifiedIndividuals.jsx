import React from "react";
import {
  Column,
  MatrixLayout,
  QuoteOptionsRowLayout
} from "./QuoteOptionsLayout";

const NumberOfNotifiedIndividuals = ({ quoteOptionsMatrix }) => {
  const numberOfNotifiedIndividuals = quoteOptionsMatrix.slice(0, 1);

  const Title = () => <div>Number of Notified Individuals</div>;

  const Item = props => {
    return (
      <Column>
        <div>{props.notified_individuals}</div>
      </Column>
    );
  };
  const SelectPanels = () => (
    <MatrixLayout
      matrixOfProps={numberOfNotifiedIndividuals}
      Component={Item}
    />
  );

  return <QuoteOptionsRowLayout first={<Title />} second={<SelectPanels />} />;
};

export default NumberOfNotifiedIndividuals;
