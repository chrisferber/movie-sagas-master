import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
               Details Page
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);