import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchBar = function({ history }) {
    const [value, setValue] = useState("");
    const [hasError, setError] = useState(false);

    function searchBeer(evt) {
        evt.preventDefault();

        const query = value.trim();
        let isValid = query.length >= 4 ? true : false;

        isValid
            ? history.push(`/search/${encodeURIComponent(value)}`)
            : setError(true);
    }

    return (
        <form onSubmit={searchBeer}>
            <input
                type="text"
                value={value}
                onChange={evt => setValue(evt.target.value)}
            />
            <input type="submit" value="Search" />
            {hasError ? (
                <p>Search term must be at least 4 characters long.</p>
            ) : null}
        </form>
    );
};

export default withRouter(SearchBar);
