import React, { Component, Style } from "react";
import { DesignContext } from "../App";
import styled, { css } from "styled-components";

const StyledMain = styled.main`
  ${props =>
    props.alternate &&
    css`
      p {
        font-size: 22px;
        color: #005ea5;
      }
      h2 {
          color: #005ea5;
      }
      label {
        color: #005ea5;
      }
      legend {
        color: #005ea5;
      }
    `};
`;

class Main extends Component {
  constructor(props) {
    super();

    this.getMain = this.getMain.bind(this);
  }

  getMain(activeDesign, children) {
    if (parseInt(activeDesign) === 1) {
      return <StyledMain alternate>{children}</StyledMain>;
    } else return <StyledMain>{children}</StyledMain>;
  }

  render() {
    return (
      <DesignContext.Consumer>
        {({ activeDesign }) => this.getMain(activeDesign, this.props.children)}
      </DesignContext.Consumer>
    );
  }
}

export default Main;
