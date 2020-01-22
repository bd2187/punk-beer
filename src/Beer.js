import React, { useState, useEffect } from "react";

const Beer = function({ match }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [beer, setBeer] = useState({});

    useEffect(function() {
        const { id: beerID } = match.params;
        fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
            .then(res => res.json())
            .then(parsedRes => {
                setLoading(false);
                setError(false);
                if (parsedRes[0] && +parsedRes[0].id >= 0) {
                    setBeer(parsedRes[0]);
                } else {
                    throw "beer not found";
                }
            })
            .catch(() => {
                setLoading(false);
                setError(true);
                setBeer({});
            });
    }, []);

    if (error) {
        <div>
            <p>Error!</p>
        </div>;
    } else if (loading) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        );
    } else {
        const { name, tagline, description, image_url, brewers_tips } = beer;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <p>{description}</p>
                <p>{brewers_tips}</p>

                {/* {food_pairing ? (
                    <ul>
                        {food_pairing.map(pairing => {
                            <li key={pairing}>{pairing}</li>;
                        })}
                    </ul>
                ) : null} */}

                <img
                    src={`${
                        image_url
                            ? image_url
                            : "https://images.punkapi.com/v2/keg.png"
                    }`}
                    alt={name}
                />
            </div>
        );
    }
};

export default Beer;
