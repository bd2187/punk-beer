import React, { StrictMode, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Beer from "./Beer";
// import SearchResults from "./SearchResults";

const Favorites = function() {
    return <h1>favorites</h1>;
};

const SearchResults = lazy(() => import("./SearchResults"));

const App = function() {
    return (
        <StrictMode>
            <div>
                <Router>
                    <Navigation />
                    <Switch>
                        <Suspense fallback={<h1>loading...</h1>}>
                            <Route exact path="/:page?" component={Home} />
                            <Route
                                exact
                                path="/search/:query"
                                component={SearchResults}
                            />
                            <Route
                                exact
                                path="/favorites"
                                component={Favorites}
                            />
                            <Route exacth path="/beer/:id" component={Beer} />
                        </Suspense>
                    </Switch>
                </Router>
            </div>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
