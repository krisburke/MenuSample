import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import StatefulAppContainer from './StatefulAppContainer';

class StatefulApp extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <StatefulAppContainer />
                </Router>
            </div>
        );
    }
};

export default StatefulApp;
