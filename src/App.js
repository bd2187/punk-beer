import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";

const Favorites = function() {
    return <h1>favorites</h1>;
};

const Search = function() {
    return <h1>Search</h1>;
};

const App = function() {
    return (
        <StrictMode>
            <div>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/:page?" component={Home} />
                        <Route exact path="/search/:query" component={Search} />
                        <Route exact path="/favorites" component={Favorites} />
                    </Switch>
                </Router>
            </div>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
