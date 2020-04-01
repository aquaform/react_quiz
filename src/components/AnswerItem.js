import React from "react";
import styled from "styled-components";

const Item = styled.li`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 20%);
    transition: background 0.3s ease-in-out;
  }
`;

const AnswerItem = props => {
  return (
    <Item onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </Item>
  );
};

export default AnswerItem;
