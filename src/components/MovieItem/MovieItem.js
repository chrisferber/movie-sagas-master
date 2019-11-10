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
                    <div>
                        <img src={this.props.movie.poster} height="300px" width="300px" />
                    </div>
                    <div>
                        <h2>
                            {this.props.movie.title}
                        </h2>
                    </div>
                    <div>{this.props.movie.description}</div>

                </li>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieItem);