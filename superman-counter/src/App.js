import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Counter from './containers/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <Counter/>
          </Layout>
      </div>
    );
  }
}

export default App;
