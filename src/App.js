import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <h4>Adopt Me!</h4>
          </Link>
        </header>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="search-params" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
