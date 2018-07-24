import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const RelationshipStatus2 = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/relationship-status">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            Have you been, or will you be married or in a civil partnership
            before the first day of the academic year?
          </h2>
          <div className="content">
            <p>
              If you're not married or in a civil partnership now, but will be
              before the first day of the academic year, you should answer 'yes'
              to this question.
            </p>
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
                    Yes, I've been or will be married or in a civil partnership
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
                    No, I haven't been or won't be married or in a civil
                    partnership
                  </label>
                </div>
              </fieldset>
            </div>
            <Link
              to="/child-care"
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

export default RelationshipStatus2;
