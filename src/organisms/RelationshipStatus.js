import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const RelationshipStatus = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/previous-study">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            What is your current relationship status?
          </h2>
          <div className="content">
            <p>
              Telling us your current relationship status helps us know whose
              income we'll need to consider when working out what student
              finance you can get.
            </p>
            <p>
              When assessing you for some parts of student finance we'll take
              your parents' or partner's household income into account.
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
                    Married/civil partnership
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
                    Living with parner
                    <div className="label__hint">
                      You live with your partner as though you're married
                    </div>
                  </label>
                </div>
                <div class="radio__group">
                  <input
                    class="radio__input"
                    type="radio"
                    name="radios"
                    value="radio.2"
                    id="radio2"
                  />
                  <label class="radio__label" htmlFor="radio2">
                    Widowed/surviving civil partner
                  </label>
                </div>
                <div class="radio__group">
                  <input
                    class="radio__input"
                    type="radio"
                    name="radios"
                    value="radio.3"
                    id="radio3"
                  />
                  <label class="radio__label" htmlFor="radio3">
                    Divorced/disslved civil parntership
                    <div className="label__hint">
                      If you are now living with a new partner, please select
                      'Living with partner' option above
                    </div>
                  </label>
                </div>
                <div class="radio__group">
                  <input
                    class="radio__input"
                    type="radio"
                    name="radios"
                    value="radio.4"
                    id="radio4"
                  />
                  <label class="radio__label" htmlFor="radio4">
                    Separated
                    <div className="label__hint">
                      You and your, husband, wife or partner aren't divorced but
                      are livng separately
                    </div>
                  </label>
                </div>
                <div class="radio__group">
                  <input
                    class="radio__input"
                    type="radio"
                    name="radios"
                    value="radio.5"
                    id="radio5"
                  />
                  <label class="radio__label" htmlFor="radio5">
                    Single
                  </label>
                </div>
              </fieldset>
            </div>
            <Link
              to="/relationship-status2"
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

export default RelationshipStatus;
