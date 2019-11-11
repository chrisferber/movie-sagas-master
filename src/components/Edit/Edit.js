import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Edit extends Component {
    render() {
        return (
            <>
            <Router>
                <button>
                    <Link to="/details">Go Back</Link>
                </button>
            </Router>
            <div>
               Edit Page
            </div>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);