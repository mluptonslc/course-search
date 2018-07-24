import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import CourseSearchResult from "../molecules/CourseSearchResult";
import { DesignContext } from "../App";

class CourseSearch extends Component {
  constructor(props) {
    super();
    this.state = {
      institution: props.location.institution
        ? props.location.institution
        : "university",
      searchQuery: ""
    };

    console.log(props.institution);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  displayResults() {
    let queryArray = Array.from(this.state.searchQuery.toLowerCase());
    if (queryArray[0] === "a" && queryArray.length > 2) {
      return (
        <React.Fragment>
          <div id="results-title" aria-live="polite" aria-relevant="additions">
            <h3 className="search-results__heading heading--small">
              <span className="text--large">4</span> results found
            </h3>
          </div>
          <div className="search__results">
            <ul className="search-results__list">
              <CourseSearchResult
                courseName="Accounting"
                qualification="Bachelor Degree with Honours"
                duration="2"
                ucasCode="C3PO"
                modifiers={["Accelerated degree"]}
              />
              <CourseSearchResult
                courseName="Accounting"
                qualification="Bachelor Degree with Honours"
                duration="3"
                ucasCode="C3PO"
                modifiers={[]}
              />
              <CourseSearchResult
                courseName="Accounting"
                qualification="Bachelor Degree with Honours"
                duration="3"
                ucasCode="C3PO"
                modifiers={["Accelerated degree", "Placement (Year 2)"]}
              />
              <CourseSearchResult
                courseName="Accounting"
                qualification="Bachelor Degree with Honours"
                duration="4"
                ucasCode="C3PO"
                modifiers={["Placement (Year 3)"]}
              />
            </ul>
          </div>
        </React.Fragment>
      );
    } else if (queryArray[0] === "b" && queryArray.length > 2) {
      return (
        <React.Fragment>
          <div id="results-title" aria-live="polite" aria-relevant="additions">
            <h3 className="search-results__heading heading--small">
              <span className="text--large">4</span> results found
            </h3>
          </div>
          <div className="search__results">
            <ul className="search-results__list">
              <CourseSearchResult
                courseName="Biology"
                qualification="Bachelor Degree with Honours"
                duration="2"
                ucasCode="C3PO"
                modifiers={["Accelerated degree"]}
              />
              <CourseSearchResult
                courseName="Biology"
                qualification="Bachelor Degree with Honours"
                duration="3"
                ucasCode="C3PO"
                modifiers={[]}
              />
              <CourseSearchResult
                courseName="Biology"
                qualification="Bachelor Degree with Honours"
                duration="3"
                ucasCode="C3PO"
                modifiers={["Accelerated degree", "Placement (Year 2)"]}
              />
              <CourseSearchResult
                courseName="Biology"
                qualification="Bachelor Degree with Honours"
                duration="4"
                ucasCode="C3PO"
                modifiers={["Placement (Year 3)"]}
              />
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <DesignContext.Consumer>
        {({ activeDesign }) => (
          <div className="site">
            <Header />
            <main className="site-content">
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <Link className="back-link" to="/institution-search">
                    Back{" "}
                  </Link>
                  <h2 id="page-heading" className="heading--xlarge">
                    What course will you study at {this.state.institution}
                  </h2>
                  <div className="content">
                    <span>
                      If you are still deciding between your courses then tell
                      us your first choice.
                    </span>
                  </div>
                  <div data-component="course-search" className="form-group">
                    <label className="label" htmlFor="questions[0].answer">
                      Course name
                    </label>
                    <input
                      className="search-input search-input--live"
                      type="text"
                      name="searchQuery"
                      value={this.state.searchQuery}
                      onChange={this.handleChange}
                    />
                    <div className="search-input__icon" />
                  </div>
                  {this.displayResults()}
                  <details
                    className="details"
                    data-analytics-label="I cant find my course"
                    data-analytics-crn="24578211686"
                  >
                    <summary
                      role="button"
                      aria-controls="details-content-0"
                      aria-expanded="true"
                    >
                      <span className="details__summary">
                        I cant find my course
                      </span>
                    </summary>
                    <div
                      className="details__content"
                      id="details-content-0"
                      aria-hidden="false"
                    >
                      If you can't find your course you will need to contact
                      your university or college.{" "}
                    </div>
                  </details>
                </form>
              </div>
            </main>
            <Footer />
          </div>
        )}
      </DesignContext.Consumer>
    );
  }
}

export default CourseSearch;
