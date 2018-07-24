import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const Independence = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/adult-care">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            Have you supported yourself financially for a total of 3 years or
            more before the start f the first academic year of your course?
          </h2>
          <div className="content">
            <p>
              This means you must have been paying all your own livng costs eg
              rent, Council Tax, utility bills, for a combined total of 3 years
              (36 months).
            </p>

            <p>
              Your income can comoe from the following sources:
              <ul>
                <li>employment</li>
                <li>savings</li>
                <li>benefits</li>
                <li>state studentships</li>
                <li>scholorships, exhibitions and bursaries</li>
              </ul>
            </p>
            <p>
              You're not financially supporting yourself if you're paying your
              living costs with money you get from your parents.
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
                    Yes, I've supported myself financially for 3 years
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
                    No, I haven't supported myself financially for 3 years
                  </label>
                </div>
              </fieldset>
            </div>
            <Link
              to="/institution-search"
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

export default Independence;
