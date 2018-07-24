import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./resources/styles/customer-portal.css";
import "./resources/styles/new-transport.css";
import "./resources/styles/pattern-library.css";
import InstitutionSearch from "./organisms/InstitutionSearch";
import CourseSearch from "./organisms/CourseSearch";
import Setup from "./organisms/Setup";
import AcceleratedConfirmation from "./organisms/AcceleratedConfirmation";
import CourseDuration from "./organisms/CourseDuration";
import HaveYouStudied from "./organisms/HaveYouStudied";
import RelationshipStatus from "./organisms/RelationshipStatus";
import RelationshipStatus2 from "./organisms/relationship-status2";
import ChildCare from "./organisms/child-care";
import AdultCare from "./organisms/adult-care";
import Independence from "./organisms/Independence";

export const DesignContext = React.createContext({
  activeDesign: 0,
  changeDesign: () => {},
  activeValidationDesign: 0,
  changeValidationDesign: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeDesign = event => {
      this.setState({ activeDesign: event.target.value });
    };

    this.changeValidationDesign = event => {
      this.setState({ activeValidationDesign: event.target.value });
    };

    this.state = {
      activeDesign: 0,
      changeDesign: this.changeDesign,
      activeValidationDesign: 0,
      changeValidationDesign: this.changeValidationDesign
    };

    this.changeDesign = this.changeDesign.bind(this);
  }

  render() {
    return (
      <DesignContext.Provider value={this.state}>
        <BrowserRouter basename="/application">
          <Switch>
            <Route exact path="/setup" component={Setup} />
            <Route
              exact
              path="/institution-search"
              component={InstitutionSearch}
            />
            <Route
              exact
              path="/course-search"
              render={props => <CourseSearch {...props} />}
            />
            <Route
              exact
              path="/accelerated-confirmation"
              component={AcceleratedConfirmation}
            />
            <Route exact path="/previous-study" component={HaveYouStudied} />
            <Route exact path="/relationship-status" component={RelationshipStatus} />
            <Route exact path="/relationship-status2" component={RelationshipStatus2} />
            <Route exact path="/course-duration" component={CourseDuration} />
            <Route exact path="/child-care" component={ChildCare} />
            <Route exact path="/adult-care" component={AdultCare} />
            <Route exact path="/independence" component={Independence} />
          </Switch>
        </BrowserRouter>
      </DesignContext.Provider>
    );
  }
}

export default App;
