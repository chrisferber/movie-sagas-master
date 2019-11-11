import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreItem from '../GenreItem/GenreItem';
import { HashRouter as Router, Link } from 'react-router-dom';

class Details extends Component {

    componentDidMount() {
        this.renderGenres();
        this.getMoviesGenres();
    }

    renderGenres = () => {
        this.props.dispatch({ type: 'GET_GENRES' });
    }

    getMoviesGenres = () => {
        this.props.dispatch({ type: 'GET_MOVIES_GENRES' });
    }

    render() {
        return (
            <>
                <Router>
                    <button>
                    <Link to="/">Go Back</Link>
                    </button>
                    <button>
                        <Link to="/edit">Edit</Link>
                    </button>
                </Router>
                {/* <ul>
                {this.props.reduxState.genres.map((genre) => {
                    return (
                        <GenreItem key={genre.genres_id} genre={genre} />
                    );
                })}
                <li>
                    {this.props.reduxState.currentMovie.title}
                </li>
            </ul>
            <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre> */}
                <h1>
                    {this.props.reduxState.currentMovie.title}
                </h1>
                <div>
                    <p>
                        {this.props.reduxState.currentMovie.description}
                    </p>
                </div>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);