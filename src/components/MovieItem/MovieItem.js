import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Redirect } from 'react-router-dom';
import Details from '../Details/Details';

class MovieItem extends Component {

    state = {
        toDetails: false,
        
    }

    handleImageClick = () => {
        console.log(this.props.reduxState.movies);

        this.setState({
            toDetails: true,
        })
    }

    render() {

        if (this.state.toDetails === true) {
            return <Redirect to='/details' />
        }

        return (
            <>
                <li>
                    {/* <Router>
                    <Link to="/details"> */}
                    <div>
                        <img onClick={this.handleImageClick} src={this.props.movie.poster} height="300px" width="300px" alt="" />
                    </div>
                    {/* </Link>
                    </Router>  */}
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