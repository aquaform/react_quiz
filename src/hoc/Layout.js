import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

class Layout extends Component {
  render() {
    return (
      <Container>
        <Main>{this.props.children}</Main>
      </Container>
    );
  }
}

export default Layout;
