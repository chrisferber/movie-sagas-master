import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class MovieItem extends Component {
    render() {
        return (
            <>
                <li>
                    <Router>
                    <Link to="/details">
                    <div>
                        <img src={this.props.movie.poster} height="300px" width="300px" alt=""/>
                    </div>
                    </Link>
                    </Router> 
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