import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

    // runs function to get movies from database on component ready
    renderMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    render() {
        return (
            <>
                <li>
                <span>{this.props.movie.title}</span>
                </li>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieItem);