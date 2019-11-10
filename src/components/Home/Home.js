import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class Home extends Component {

    // runs function to get movies from database on component ready
    componentDidMount() {
        this.renderMovies();
    }

    renderMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    render() {
        return (
            <>
                <div>
                    <h1>
                    Home Page
                    </h1>
                </div>
                <ul>
                {this.props.reduxState.movies.map((movie) => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    );
                })}
            </ul>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Home);