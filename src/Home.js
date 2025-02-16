import React, { useState, useEffect } from "react";
import BeerThumbnail from "./BeerThumbnail";
import Pagination from "./Pagination";

const Home = function({ match }) {
    const [state, setState] = useState({
        loading: true,
        error: false,
        beers: [],
        pageNumber: 1
    });

    useEffect(
        function() {
            let { page } = match.params;
            page = +page ? page : 1;
            fetchBeer(page);
        },
        [match.params.page] // eslint-disable-line
    );

    function fetchBeer(page) {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=50`)
            .then(res => res.json())
            .then(parsedRes => {
                setState({
                    loading: false,
                    error: false,
                    beers: parsedRes,
                    pageNumber: page
                });
            })
            .catch(() => {
                setState({
                    beers: [],
                    loading: false,
                    error: true
                });
            });
    }

    const { error, loading, beers, pageNumber } = state;

    if (error) {
        return (
            <div>
                <p>Error!</p>
            </div>
        );
    } else if (loading) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        );
    } else if (beers.length > 0) {
        // console.log(beers);
        return (
            <div>
                <ul style={{ display: "flex", width: "90%", flexWrap: "wrap" }}>
                    {beers.map(beer => (
                        <BeerThumbnail beer={beer} key={beer.id} />
                    ))}
                </ul>

                <Pagination maxPages={7} link={"/"} currentPage={pageNumber} />
            </div>
        );
    } else {
        return <h1>no more beer</h1>;
    }
};

export default Home;
