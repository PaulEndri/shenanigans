import React, { Component } from 'react';
import history from './history'
import './App.css';
import { Router, Route } from 'react-router-dom';
import { Container, Segment} from 'semantic-ui-react';
import Landing from './routes/landing'
import Success from './routes/success'

const fuck = () => (
  <div>
    Hey fucker, I got a thing {document.cookie}
  </div>
)

class App extends Component {
  componentDidMount() {
    console.log('mounted', this.props)
  }

  render() {
    return (
      <Router history={history}>
        <Container className="App">
          <Segment className="App-header" basic />

          <Container>
            <Route exact path="/" component={Landing} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/clan" component={fuck} />
          </Container>


        </Container>
      </Router>

    );
  }
}

export default App;
