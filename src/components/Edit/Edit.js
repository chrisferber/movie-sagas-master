import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Edit extends Component {

    state = {
        title: '',
        description: '',
        editId: null,
    }

    handleTitleChange = (event) => {
        this.setState({
            ...this.state,
            editId: this.props.reduxState.currentMovie.id,
            title: event.target.value,
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            ...this.state,
            editId: this.props.reduxState.currentMovie.id,
            description: event.target.value,
        });
    }

    handleSave = () => {
        this.setState({
            ...this.state,
            editId: this.props.reduxState.currentMovie.id,
        });
        this.props.dispatch({ type: 'EDIT_MOVIE', payload: this.state });
    }

    render() {
        return (
            <>
                <Router>
                    <button>
                        <Link to="/details">Cancel</Link>
                    </button>
                    <button onClick={this.handleSave}>
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