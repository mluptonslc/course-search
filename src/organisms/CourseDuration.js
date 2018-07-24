import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const CourseDuration = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/course-search">
            Back{" "}
          </Link>
          <div className="content">
            <fieldset class="radio">
              <legend
                id="have-you-started-your-course-radio-legend"
                class="heading--xlarge"
              >
                <span id="page-heading" role="heading" aria-level="2">
                  How long is your course?
                </span>
              </legend>

              <div class="radio__group">
                <input
                  class="radio__input"
                  type="radio"
                  name="radios"
                  value="radio.0"
                  id="radio0"
                />
                <label class="radio__label" htmlFor="radio0">
                  1 year
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
                  2 years
                </label>
              </div>
              <div class="radio__group">
                <input
                  class="radio__input"
                  type="radio"
                  name="radios"
                  value="radio.3"
                  id="radio2"
                />
                <label class="radio__label" htmlFor="radio2">
                  3 years
                </label>
              </div>
              <div class="radio__group">
                <input
                  class="radio__input"
                  type="radio"
                  name="radios"
                  value="radio.4"
                  id="radio3"
                />
                <label class="radio__label" htmlFor="radio3">
                  4 years
                </label>
              </div>
              <div aria-live="polite" />
            </fieldset>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
};
1;

export default CourseDuration;
