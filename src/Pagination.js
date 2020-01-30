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
        return (
            <div>
                <ul>
                    {this.state.pages.map(({ number, selected }) => {
                        var color = selected ? "red" : "black";
                        return (
                            <li key={number}>
                                <Link
                                    to={`${this.props.link}${number}`}
                                    style={{ color }}
                                >
                                    {number}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Pagination;

//             <div>
//                 {currentPage - 1 > 0 ? (
//                     <Link to={`${link}${currentPage - 1}`}>Prev</Link>
//                 ) : null}
//                 <ul>{pages}</ul>
//                 {currentPage + 1 <= maxPages ? (
//                     <Link to={`${link}${currentPage + 1}`}>Next</Link>
//                 ) : null}
//             </div>
