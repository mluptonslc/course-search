import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import InstitutionSearchResult from "../molecules/InstitutionSearchResult";
import { DesignContext } from "../App";

class InstitutionSearch extends Component {
  constructor(props) {
    super();
    this.state = {
      searchQuery: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  displayResults() {
    let queryArray = Array.from(this.state.searchQuery.toLowerCase());
    if (queryArray[0] === "m" && queryArray.length > 2) {
      return (
        <React.Fragment>
          <div id="results-title" aria-live="polite" aria-relevant="additions">
            <h3 className="search-results__heading heading--small">
              <span className="text--large">2</span> results found
            </h3>
          </div>
          <div className="search__results">
            <ul className="search-results__list">
              <InstitutionSearchResult institutionName="Manchester Metropolitan University" />
              <InstitutionSearchResult institutionName="Manchester University" />
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }

  componentWillMount() {
    window.location;
  }

  render() {
    return (
      <div className="site">
        <Header />
        <main className="site-content">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <Link className="back-link" to="/independence">
                Back{" "}
              </Link>
              <h2 id="page-heading" className="heading--xlarge">
                Where will you be studying?
              </h2>
              <div className="content">
                <span>
                  If you are still deciding between your university or college
                  then tell us your first choice.
                </span>
              </div>
              <div data-component="course-search" className="form-group">
                <label className="label" htmlFor="questions[0].answer">
                  University or college
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
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default InstitutionSearch;
