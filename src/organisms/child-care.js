import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const ChildCare = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/relationship-status2">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            Will you have care of a person under the age of 18 on the first day of the academic year?
          </h2>
          <div className="content">
            <p>
              This means a person under the age of 18 who depends on you financially.
            </p>
            <details className="details">
                <summary className="details__summary">
                    Why we need to know about dependent children
                </summary>
                <div className="details__content">We need to know about dependent children as it may affect the amount of loan you will recieve.</div>
            </details>
            <div className="content--container">
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
                    Yes, I'll have care of a person under 18
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
                    No, I won't have care of a person under 18
                  </label>
                </div>
              </fieldset>
            </div>
            <Link
              to="/adult-care"
              className="action--primary"
              style={{ marginTop: "30px" }}
            >
              Continue
            </Link>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
};
1;

export default ChildCare;
