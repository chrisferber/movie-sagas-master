import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import in components for routing
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import Home from '../Home/Home';

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <div className="App">
        <Router>
          <div className="routes">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
          </div>
        </Router>
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
