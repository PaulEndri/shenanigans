import React, { Component } from 'react';
import Sender from './auth/sender';
import Receiver from './auth/receiver';
import history from './history'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const fuck = () => (
  <div>
    Hey fucker, I got a thing {window.location.search}
  </div>
)

class App extends Component {
  componentDidMount() {
    console.log('mounted', this.props)
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Sender} />
          <Route exact path="/success" component={Receiver} />
          <Route exact path="/clan" component={fuck} />
        </div>
      </Router>

    );
  }
}

export default App;
