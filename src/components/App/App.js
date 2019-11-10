import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  testAxiosConnect = () => {
    this.props.dispatch({type: 'GET_MOVIES'});
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <button onClick={this.testAxiosConnect}>Test</button>
      </div>
    );
  }
}

// gives component access to redux state
const mapStateToProps = reduxState => ({
  reduxState,
});

// makes dispatch available to send data to redux state and redux sagas
export default connect(mapStateToProps)(App);
