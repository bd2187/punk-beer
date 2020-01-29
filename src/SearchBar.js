import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SearchBar = function() {
    const [value, setValue] = useState("");
    const [hasError, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function searchBeer(evt) {
        evt.preventDefault();

        const query = value.trim();
        let isValid = query.length >= 4 ? true : false;

        isValid ? setRedirect(true) : setError(true);
    }

    return redirect ? (
        <Redirect to={`/search/${encodeURIComponent(value)}`} />
    ) : (
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

export default SearchBar;
