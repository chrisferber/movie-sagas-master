import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreItem extends Component {
    render() {
        return (
            <>
                {/* <li>
                    {this.props.reduxStore.currentMovie.title}
                </li> */}
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(GenreItem);