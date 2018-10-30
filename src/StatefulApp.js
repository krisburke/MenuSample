import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import StatefulAppContainer from './StatefulAppContainer';

class StatefulApp extends Component {
    render() {
        return (
            <div className="App">
                <h1>StatefulApp</h1>
                <Router>
                    <StatefulAppContainer />
                </Router>
            </div>
        );
    }
};

export default StatefulApp;
