import React from "react";
import { Link } from "react-router-dom";

const Navigation = function() {
    return (
        <div className="navigation">
            <div className="navigation__logo">Punk</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
