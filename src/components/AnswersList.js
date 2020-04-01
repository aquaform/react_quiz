import React from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AnswersList = props => (
  <List>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
        />
      );
    })}
  </List>
);

export default AnswersList;
