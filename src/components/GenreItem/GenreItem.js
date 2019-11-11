import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreItem extends Component {

    state = {
        genres: [],
    }

    componentDidMount() {
        this.getCurrentGenres();
    }

    getCurrentGenres = () => {
        this.setState({

        })
        // this.props.dispatch({ type: 'CURRENT_GENRE', payload: this.state.genres })
    }

    render() {
        return (
            <>
                {this.props.reduxState.genres.map((genre) => {
                    if (genre.movies_id === this.props.reduxState.currentMovie.id) {
                    return (
                        <li key={genre.genres_id}>
                            {genre.name}
                        </li>
                    );
                }
                })}
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(GenreItem);