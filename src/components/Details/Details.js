import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreItem from '../GenreItem/GenreItem';

class Details extends Component {

    componentDidMount() {
        this.renderGenres();
    }

    renderGenres = () => {
        this.props.dispatch({ type: 'GET_GENRES' });
    }

    render() {
        return (
            <>
            <div>
               Details Page
            </div>
            <ul>
                {this.props.reduxState.genres.map((genre) => {
                    return (
                        <GenreItem key={genre.genres_id} genre={genre} />
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

export default connect(mapStateToProps)(Details);