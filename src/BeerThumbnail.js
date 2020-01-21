import React from "react";

const BeerThumbnail = function({ beer }) {
    return (
        <li>
            <img src={beer.image_url} alt={`${beer.name} beer`} />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
        </li>
    );
};

export default BeerThumbnail;
