import React from 'react'
import styled from 'styled-components'
import AnswersList from './AnswersList'

const Container = styled.div`
  padding: 20px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 0 10px;
  box-sizing: border-box;
`

const Question = styled.p`
  display: flex;
  justify-content: space-between;
`

const ActiveQuiz = props => (
  <Container>
    <Question>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
      </span>
      <small>
        {props.answerNumber} из {props.quizLength}
      </small>
    </Question>
    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </Container>
)

export default ActiveQuiz
