import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "./InstitutionSearchResult.css";

class InstitutionSearchResult extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <li className="search-results__row">
        <Link
          to={{
            pathname: "/course-search",
            institution: this.props.institutionName
          }}
          className="search-results__link"
        >
          {this.props.institutionName}
        </Link>
      </li>
    );
  }
}

export default InstitutionSearchResult;
