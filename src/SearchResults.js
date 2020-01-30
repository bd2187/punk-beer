import React, { useState, useEffect } from "react";
import BeerThumbnail from "./BeerThumbnail";

const SearchResults = function({ match }) {
    const [state, setState] = useState({
        loading: true,
        error: false,
        searchResults: []
    });

    let { query } = match.params;
    query = decodeURIComponent(query);

    useEffect(
        function() {
            fetch(
                `https://api.punkapi.com/v2/beers/?beer_name=${query.replace(
                    / /g,
                    "_"
                )}`
            )
                .then(res => res.json())
                .then(parsedRes => {
                    setState({
                        loading: false,
                        error: false,
                        searchResults: parsedRes
                    });
                })
                .catch(() => {
                    setState({
                        loading: false,
                        error: true
                    });
                });
        },
        [match.params, query]
    );

    if (state.error) {
        return <h1>error!</h1>;
    } else if (state.loading) {
        return <h1>loading</h1>;
    } else if (state.searchResults.length > 0) {
        return (
            <>
                <h1>
                    {state.searchResults.length}{" "}
                    {state.searchResults.length > 1 ? "results" : "result"}{" "}
                    found for &quot;{query}&quot;
                </h1>

                <ul>
                    {state.searchResults.map(beer => (
                        <BeerThumbnail key={beer.id} beer={beer} />
                    ))}
                </ul>
            </>
        );
    } else {
        return <h1>no beer found under &quot;{query}&quot;</h1>;
    }
};

export default SearchResults;
