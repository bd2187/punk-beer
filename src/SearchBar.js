import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SearchBar = function() {
    const [value, setValue] = useState("");
    const [redirect, setRedirect] = useState(false);

    function searchBeer(evt) {
        evt.preventDefault();

        let isValid = true;
        // place validation logic here

        // if form is valid, redirect to /search/value
        if (isValid) {
            setRedirect(true);
        } else {
            // display error
        }
    }

    return redirect ? (
        <Redirect to={`/search/${value}`} />
    ) : (
        <form onSubmit={searchBeer}>
            <input
                type="text"
                value={value}
                onChange={evt => setValue(evt.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchBar;
