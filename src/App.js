import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = function() {
    return <h1>home</h1>;
};

const Favorites = function() {
    return <h1>favorites</h1>;
};

const Search = function() {
    return <h1>Search</h1>;
};

const App = function() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search/:id" component={Search} />
                    <Route exact path="/favorites" component={Favorites} />
                </Switch>
            </Router>
        </div>
    );
};

render(<App />, document.getElementById("root"));
