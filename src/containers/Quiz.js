import React, { Component } from 'react'
import styled from 'styled-components'
import ActiveQuiz from '../components/ActiveQuiz'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
  background: linear-gradient(90deg, #5041b2 0%, #7969e6 100%);
`

const QuizWrapper = styled.div`
  width: 600px;
`

const Title = styled.h1`
  color: #fff;
  margin-left: 10px;
`

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        id: 0,
        question: 'Какого хрена?',
        rightAnswer: 4,
        answers: [
          { text: 'Старого', id: 1 },
          { text: 'А то...', id: 2 },
          { text: 'Прости, Батя!', id: 3 },
          { text: 'Единая Россия', id: 4 }
        ]
      },
      {
        id: 1,
        question: 'Кто победил на выборах',
        rightAnswer: 3,
        answers: [
          { text: 'Навальный', id: 1 },
          { text: 'Обама', id: 2 },
          { text: 'Путин', id: 3 },
          { text: 'Единая Россия', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log('Answer Id', answerId)

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <Container>
        <QuizWrapper>
          <Title>Ответьте на все вопросы!</Title>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </QuizWrapper>
      </Container>
    )
  }
}

export default Quiz
