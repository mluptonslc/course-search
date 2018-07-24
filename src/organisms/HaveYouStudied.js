import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const HaveYouStudied = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/setup">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            Have you studied or are you currently studying any higher education
            courses?
          </h2>
          <div className="content">
            <p>
              {" "}
              A 'higher education course' is a degree, foundation degree, HND,
              HNC or any postgraduate qualification such as an MA
            </p>
            <p>
              {" "}
              Tell us about any higher education courses you attended, even if
              you didn't complete it.
            </p>
            <p>
              {" "}
              <strong>Don't include:</strong>
              <ul>
                <li>
                  the course you're applying for student finance for in this
                  application
                </li>
                <li>A Levels, AS Levels or BTECs</li>
                <li>
                  part-time courses you didn't achieve an honours degree (except
                  part-time initial teacher training)
                </li>
                <li>
                  self-funded, private university or college courses you didn't
                  achieve an honours degree for
                </li>
              </ul>
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
                  Yes, I'm currently studying or have studied before
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
                  No, I'm not currently studying and haven't studied before
                </label>
              </div>
            </fieldset>
            </div>
            <Link
              to="/relationship-status"
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

export default HaveYouStudied;
