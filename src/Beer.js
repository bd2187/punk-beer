import React, { useState, useEffect } from "react";

const Beer = function({ match }) {
    const [state, setState] = useState({
        loading: true,
        error: false,
        beer: {}
    });

    useEffect(
        function() {
            const { id: beerID } = match.params;
            fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
                .then(res => res.json())
                .then(parsedRes => {
                    if (parsedRes[0] && +parsedRes[0].id >= 0) {
                        setState({
                            loading: false,
                            error: false,
                            beer: parsedRes[0]
                        });
                    } else {
                        throw "beer not found";
                    }
                })
                .catch(() => {
                    setState({
                        loading: false,
                        error: true,
                        beer: {}
                    });
                });
        },
        [match.params]
    );

    const { error, loading, beer } = state;

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
