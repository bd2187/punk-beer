import React, { useState, useEffect } from "react";
import BeerThumbnail from "./BeerThumbnail";
import Pagination from "./Pagination";

const Home = function({ match }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [beers, setBeers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

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
                setLoading(false);
                setError(false);
                setBeers(parsedRes);
                setPageNumber(page);
            })
            .catch(() => {
                setBeers([]);
                setLoading(false);
                setError(true);
            });
    }

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
                <ul>
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
