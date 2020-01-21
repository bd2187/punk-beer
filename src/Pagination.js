import React from "react";
import { Link } from "react-router-dom";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props) {
        return { currentPage: props.currentPage };
    }

    render() {
        const pages = [];
        const { maxPages, link } = this.props;
        const currentPage = +this.state.currentPage;

        for (let i = 1; i <= maxPages; i++) {
            var style = i === +currentPage ? { color: "red" } : {};

            pages.push(
                <li key={i} style={style}>
                    <Link to={`${link}${i}`}>{i}</Link>
                </li>
            );
        }

        return (
            <div>
                {currentPage - 1 > 0 ? (
                    <Link to={`${link}${currentPage - 1}`}>Prev</Link>
                ) : null}
                <ul>{pages}</ul>
                {currentPage + 1 <= maxPages ? (
                    <Link to={`${link}${currentPage + 1}`}>Next</Link>
                ) : null}
            </div>
        );
    }
}

export default Pagination;
