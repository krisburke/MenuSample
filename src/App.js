import React, { Component } from 'react';
import SimpleApp from './SimpleApp';
import StatefulApp from './StatefulApp';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <SimpleApp/>
          <StatefulApp/>
        </div>
    );
  }
};

export default App;
