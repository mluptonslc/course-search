import React, { Component } from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import { DesignContext } from "../App";

class AcceleratedConfirmation extends Component {
  constructor(props) {
    super();

    this.getPage = this.getPage.bind(this);
  }
  getPage(activeValidationDesign) {
    let content = ``;
    if (parseInt(activeValidationDesign) === 0) {
      return (
        <div className="site">
          <Header />
          <main className="site-content">
            <div className="container">
              <Link className="back-link" to="/course-search">
                Back{" "}
              </Link>
              <h2 id="page-heading" className="heading--xlarge">
                You have selected an accelerated degree
              </h2>
              <div className="content">
                <span>
                  <p>
                    {" "}
                    Accelerated degrees are completed at least a year earlier
                    than standard length degrees and choosing this option may
                    affect the amount of tuition fees you are charged
                  </p>
                  <p>
                    {" "}
                    If this is correct and you will be studying an accelerated
                    course then continue with your application.
                  </p>
                  <p>
                    If you have made a mistake you can go back and change the
                    course you have selected.
                  </p>
                </span>
                <Link
                  to="/course-duration"
                  className="action--primary"
                  style={{ marginTop: "30px" }}
                >
                  Continue
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="site">
          <Header />
          <main className="site-content">
            <div className="container">
              <Link className="back-link" to="/course-search">
                Back{" "}
              </Link>
              <h2 id="page-heading" className="heading--xlarge">
                You have selected an accelerated degree. Is this correct?
              </h2>
              <div className="content">
                <details className="details">
                  <summary className="details__summary">
                    What is an accelerated degree?
                  </summary>
                  <div className="details__content">
                    Accelerated degrees are completed at least a year earler
                    than standard length degrees and choosing this option may
                    affect the amount of tuition fees you are charged.
                  </div>
                </details>
                <fieldset class="radio">

              <div class="radio__group">
                <input
                  class="radio__input"
                  type="radio"
                  name="radios"
                  value="radio.0"
                  id="radio0"
                />
                <label class="radio__label" htmlFor="radio0">
                  Yes
                </label>
              </div>
              <div class="radio__group">
                <input
                  class="radio__input"
                  type="radio"
                  name="radios"
                  value="radio.1"
                  id="radio1"
                />
                <label class="radio__label" htmlFor="radio1">
                  No
                </label>
              </div>
            </fieldset>
                <Link
                  to="/course-duration"
                  className="action--primary"
                  style={{ marginTop: "30px" }}
                >
                  Continue
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
  }

  render() {
    return (
      <DesignContext.Consumer>
      {({ activeValidationDesign }) => (
        this.getPage(activeValidationDesign)
      )}
      </DesignContext.Consumer>
    );
  }
}

export default AcceleratedConfirmation;
