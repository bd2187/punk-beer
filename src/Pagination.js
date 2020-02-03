import React from "react";
import { Link } from "react-router-dom";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            pages: []
        };
    }

    static getDerivedStateFromProps(props) {
        return { currentPage: props.currentPage };
    }

    componentDidMount() {
        let pages = [];

        for (let i = 1; i <= this.props.maxPages; i++) {
            pages = [
                ...pages,
                { number: i, selected: +this.state.currentPage === i }
            ];
        }

        this.setState({ pages });
    }

    componentDidUpdate({ currentPage: previousPage }) {
        if (+previousPage !== +this.state.currentPage) {
            // Update selected page
            const pages = [...this.state.pages].map(page => {
                page.selected = +page.number === +this.state.currentPage;
                return page;
            });

            this.setState({ pages });
        }
    }

    render() {
        const { currentPage } = this.state;
        const { link, maxPages } = this.props;
        return (
            <div>
                {parseInt(currentPage) - 1 > 0 ? (
                    <Link to={`${link}${parseInt(currentPage) - 1}`}>Prev</Link>
                ) : null}
                <ul>
                    {this.state.pages.map(({ number, selected }) => {
                        var color = selected ? "red" : "black";
                        return (
                            <li key={number}>
                                <Link to={`${link}${number}`} style={{ color }}>
                                    {number}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {parseInt(currentPage) + 1 <= parseInt(maxPages) ? (
                    <Link to={`${link}${parseInt(currentPage) + 1}`}>Next</Link>
                ) : null}
            </div>
        );
    }
}

export default Pagination;
