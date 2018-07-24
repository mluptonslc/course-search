import React from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Link } from "react-router-dom";
import Main from "../molecules/Main";

const AdultCare = props => {
  return (
    <div className="site">
      <Header />
      <Main className="site-content">
        <div className="container">
          <Link className="back-link" to="/child-care">
            Back{" "}
          </Link>
          <h2 id="page-heading" className="heading--xlarge">
            Will an adult depend on you financially on the first day of the
            academic year?
          </h2>
          <div className="content">
            <p>
              The adult who depends on you could be:
              <ul>
                <li>your husband, wife or civil partner</li>
                <li>
                  a partner you live with (including same sex partner) if you're
                  over 25
                </li>
                <li>
                  another adult you live with for example, a family member
                </li>
              </ul>
              <details className="details">
                <summary className="details__summary">
                  Why we need to know about who depends on you financially
                </summary>
                <div className="details__content">We need to know this as it may affect the amount of loan you
                will recieve.</div>
              </details>
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
                    Yes, an adult will depend on me financially
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
                    No, an adult won't depend on me financially
                  </label>
                </div>
              </fieldset>
            </div>
            <Link
              to="/independence"
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

export default AdultCare;
