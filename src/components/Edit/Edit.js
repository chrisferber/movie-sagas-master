import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Edit extends Component {

    state = {
        title: '',
        description: '',
    }

    handleTitleChange = () => {

    }

    handleDescriptionChange = () => {

    }

    render() {
        return (
            <>
            <Router>
                <button>
                    <Link to="/details">Cancel</Link>
                </button>
                <button>
                    <Link to="/details">Save</Link>
                </button>
            </Router>
            <div>
               Edit Page
            </div>
            <input onChange={this.handleTitleChange} placeholder={this.props.reduxState.currentMovie.title} value={this.state.title}></input>
            <input onChange={this.handleDescriptionChange} placeholder={this.props.reduxState.currentMovie.description} value={this.state.description} ></input>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);