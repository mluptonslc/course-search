import React, { Component } from "react";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { Link } from "react-router-dom";
import { DesignContext } from "../App";

class Setup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DesignContext.Consumer>
        {({ activeDesign, changeDesign, activeValidationDesign, changeValidationDesign }) => (
          <div className="site">
            <Header />
            <main id="content" role="main" className="site-content">
              <div className="container">
                <h2 className="heading--xxlarge--my-account heading--xxlarge">
                  Setup
                </h2>
                <label htmlFor="activeDesign" className="label">
                  Active Design
                </label>
                <p className="label__hint">Enter the design number (0 or 1)</p>
                <p className="label__hint">
                  {`Active design: `}
                  {activeDesign}
                </p>
                <input
                  id="activeDesign"
                  type="text"
                  placeholder="0"
                  className="text-input"
                  onChange={changeDesign}
                />
                <label htmlFor="activeValidationDesign" className="label">
                  Active Validation Design
                </label>
                <p className="label__hint">Enter the design number (0 or 1)</p>
                <p className="label__hint">
                  {`Active design: `}
                  {activeValidationDesign}
                </p>
                <input
                  id="activeValidationDesign"
                  type="text"
                  placeholder="0"
                  className="text-input"
                  onChange={changeValidationDesign}
                />
                <div className="action-group">
                  <Link
                    to="/previous-study"
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
        )}
      </DesignContext.Consumer>
    );
  }
}

export default Setup;
