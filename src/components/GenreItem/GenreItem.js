import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreItem extends Component {
    render() {
        return (
            <>
                <li>
                    {this.props.genre.name}
                </li>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(GenreItem);