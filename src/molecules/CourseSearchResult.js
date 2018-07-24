import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "./CourseSearchResult.css";
import { DesignContext } from "../App";

class CourseSearchResult extends Component {
  constructor(props) {
    super();
    this.state = {
      design: props.design ? this.props.design : 0
    };
    this.formatModifiers = this.formatModifiers.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.getButton = this.getButton.bind(this);
  }

  formatModifiers(activeDesign) {
    if (this.props.modifiers && parseInt(activeDesign) === 0) {
      return (
        <React.Fragment>
          <div className="search-results__meta">
            {this.props.modifiers.map((modifier, index) => {
              return (
                <div className="search-results__modifier" key={index}>
                  {modifier}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
    }
  }

  getDuration(activeDesign, modifiers) {
    if (parseInt(activeDesign) === 0) {
      return this.props.duration;
    } else {
      let modifierMessage = `${this.props.duration}`;
      if (modifiers.length > 1) {
        modifierMessage = `${this.props.duration} ${modifiers[0]} with ${
          modifiers[1]
        }`;
      } else if (modifiers.length === 1) {
        if (modifiers.includes("Accelerated degree")) {
          modifierMessage = `${this.props.duration} ${modifiers[0]}`;
        } else modifierMessage = `${this.props.duration} with ${modifiers[0]}`;
      }
      return modifierMessage;
    }
  }

  getButton(modifiers) {
    let accelerated = false;
    if (modifiers && modifiers.length > 0) {
      accelerated = modifiers.includes("Accelerated degree");
    }

    if (accelerated) {
      return (
        <Link to="/accelerated-confirmation" className="search-results__link">
          <span className="search-results__title">{this.props.courseName}</span>
        </Link>
      );
    } else
      return (
        <Link to="/course-duration" className="search-results__link">
          <span className="search-results__title">{this.props.courseName}</span>
        </Link>
      );
  }

  render() {
    return (
      <DesignContext.Consumer>
        {({ activeDesign }) => (
          <li className="search-results__row">
            {this.getButton(this.props.modifiers)}
            <div className="search-results__meta">
              <span className="search-results__meta-item">
                {this.props.qualification}
              </span>
            </div>
            <div className="search-results__meta">
              <span className="search-results__meta-item">
                Duration: {this.getDuration(activeDesign, this.props.modifiers)}
              </span>
            </div>
            <div className="search-results__meta">
              <span className="search-results__meta-item">
                UCAS code: {this.props.ucasCode}
              </span>
            </div>
            {this.formatModifiers(activeDesign)}
          </li>
        )}
      </DesignContext.Consumer>
    );
  }
}

export default CourseSearchResult;
