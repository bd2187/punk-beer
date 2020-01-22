import React from "react";
import { Link } from "react-router-dom";

const BeerThumbnail = function({ beer }) {
    return (
        <li>
            <Link to={`/beer/${beer.id}`}>
                <img
                    src={
                        beer.image_url
                            ? beer.image_url
                            : "https://images.punkapi.com/v2/keg.png"
                    }
                    alt={`${beer.name} beer`}
                />
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
            </Link>
        </li>
    );
};

export default BeerThumbnail;
