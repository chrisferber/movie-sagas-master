import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        return (
            <div>
               Edit Page
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);