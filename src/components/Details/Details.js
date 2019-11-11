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
        this.props.dispatch({type: 'GET_MOVIES_GENRES'});
    }

    render() {
        return (
            <>
            <div>
               Details Page
            </div>
            <Router>
                <Link to="/">Go Back</Link>
            </Router>
            <ul>
                {this.props.reduxState.genres.map((genre) => {
                    return (
                        <GenreItem key={genre.genres_id} genre={genre} />
                    );
                })}

            </ul>
            <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);